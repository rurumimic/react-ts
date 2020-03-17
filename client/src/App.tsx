import React from 'react'

interface State {
  message: string
}

class App extends React.Component<{}, State> {
  state: State = { message: 'loading...' }

  async componentDidMount(): Promise<void> {
    const response = await fetch('/api/hello')
    const json = await response.json()
    this.setState({ message: json.greet })
  }

  render(): JSX.Element {
    return <div>{this.state.message}</div>
  }
}

export default App
