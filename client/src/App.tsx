import React from 'react'
import axios from 'axios'

interface State {
  message: string
}

class App extends React.Component<{}, State> {
  state: State = { message: 'loading...' }

  async componentDidMount(): Promise<void> {
    const response = await axios.get('/api/hello')
    const json = await response.data
    this.setState({ message: json.greet })
  }

  render(): JSX.Element {
    return <div>{this.state.message}</div>
  }
}

export default App
