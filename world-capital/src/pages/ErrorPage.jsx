import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error= useRouteError()
  return (
    <div>
      <h1>Oops! An Error occurred </h1>
      {error && <p>{error.data}</p>}
      <NavLink to="/"><button>Go To Home Page</button></NavLink>
    </div>
  )
}

export default ErrorPage
