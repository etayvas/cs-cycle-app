import xs from "xstream"
import {run} from "@cycle/run" //?
import {div, makeDOMDriver, DOMSource, VNode} from '@cycle/dom'

import  './../css//main.scss'


function App (sources: any) {

     const type = "es6"
     setTimeout(() => alert(`${type} enabled`), 300)

    const vtree$ = xs.of(
        div('My Awesome Cycle.js app')
    )
    const sinks = {
        DOM: vtree$
    }
    return sinks
}
export default App
