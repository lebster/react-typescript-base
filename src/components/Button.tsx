import * as React from 'react'

interface IButton {
    onClick: () => void
}

class Button extends React.Component<IButton> {
    public render() {
        return (<button onClick={this.props.onClick}>{this.props.children}</button>)
    }
}

export { Button }
