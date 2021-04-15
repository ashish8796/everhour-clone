import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

function PrivateRoutes({
  children,
  exact=false,
  path,
  to,
  push=false,
  redirectPath = "/login"
}){

  const isAuth = useSelector(state => state.auth.isAuth);

  return( isAuth ?
    <Route path={path} exact>
      {children}
    </Route> :
    <Redirect to={redirectPath} push={push}/>
  )
}

export {PrivateRoutes}