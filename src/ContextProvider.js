import React from 'react'

export const Context = React.createContext();
class ContextProvider extends React.Component {

    state = { digit: 2 }

    render() {
        return (<Context.Provider value={{ digit: this.state.digit, onDigitChange: () =>
         this.setState({ digit: this.state.digit + 1 })
          }} >
            {this.props.children}
        </Context.Provider>)
    }
}
export default ContextProvider