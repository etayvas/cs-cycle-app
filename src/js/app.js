import {div} from '@cycle/dom'
import xs from 'xstream'

require('./../css/style.css');

export function App (sources) {

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
