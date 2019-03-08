import React from 'react'
import { Context } from './ContextProvider'
export const GreatGrandChildren = () => {
    return (<React.Fragment>
        <br></br>
        <Context.Consumer>
            {(context) => <span>   GreatGrandChildren {context.digit}  <button onClick={context.onDigitChange}>increase digit</button></span>}
        </Context.Consumer>

    </React.Fragment>)
}