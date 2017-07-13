import {div} from '@cycle/dom'
import xs from 'xstream'

import  './../css/main.scss'

export function App (sources) {

    const type = "es6"
    setTimeout(() => alert(`${type} enabled`), 300)

    const vtree$ = xs.of(
        div('CJS app')
    )
    const sinks = {
        DOM: vtree$
    }
    return sinks
}
