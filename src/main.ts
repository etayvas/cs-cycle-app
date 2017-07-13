import xs, {Stream} from "xstream"
import {run} from '@cycle/run'
import {makeDOMDriver,DOMSource, VNode} from '@cycle/dom'
import App from  './scripts/app'

namespace Sources {
    export interface dom {
        dom: DOMSource
    }
}
namespace Sinks {
    export interface dom {
        dom: xs<VNode>
    }
}

interface MainSources extends Sources.dom{}

type MainSinks = {
       //dom: Stream<VNode>
       dom: xs<VNode>
}


function main (sources: MainSources): MainSinks {
    const app  = App({dom: sources.dom})
        , dom$ = app.dom
            // .mapTo(app.dom)
            // .startWith(app.dom)
            // .flatten()
        , sinks = {
                 dom: dom$
          }
    return sinks
}

//const main2 = App

const drivers = {
  dom: makeDOMDriver('#app')
}

run(main, drivers)
