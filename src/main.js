import React from 'react'
import ReactDOM from 'react-dom'
import { Actions } from './actions'
import { nameStore, messageStore } from './stores'

class AppView extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: '', message: '' }
        nameStore.onChange = () => {
            this.setState({ name: nameStore.name })
        }
        messageStore.onChange = () => {
            this.setState({ message: messageStore.message })
        }
    }
    render() {
        console.log('View.Render')
        return (
            <div>
                <div>
                    <input value={this.state.name} onChange={(e) => Actions.changeName(e.target.value)} />
                    <button onClick={(e) => Actions.submitName()}>登録</button>
                </div>
                <div>{this.state.message}</div>
            </div>
        )
    }
}

ReactDOM.render(
    <AppView />,
    document.querySelector('#root')
)