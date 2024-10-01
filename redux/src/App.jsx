import { Fragment, useEffect, useRef } from "react"
import {Header} from "./Components"
import {ProductList} from "./Components"
import axios from "axios";

function App() {
  return (
    <Fragment>
    <Header/>
    <ProductList/>
    </Fragment>
   
  )
}

export default App