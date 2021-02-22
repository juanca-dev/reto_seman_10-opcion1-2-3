import React, { Fragment } from 'react'
import {Route} from "react-router-dom"

import UserView from './View/UserView'
export default function routes() {
  return (
    <Fragment>
      <Route path="/" exact component={UserView} />
    </Fragment>
  )
}
