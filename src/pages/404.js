import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

// This is functional component that returns 404 error page with some custom text
const NotFound = () => {
  return (
    <Layout>
      <Head title="404 Error!!!" />
      <h1>Page not found</h1>
      <p>
        <Link to="/">Go back to Homepage</Link>
      </p>
    </Layout>
  )
}

export default NotFound
