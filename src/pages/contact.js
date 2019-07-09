import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact Me" />
      <h1>Contact Me</h1>
      <p>
        Best way to reach me is on Twitter via{" "}
        <a href="https://twitter.com/ZuzaSasa" target="blank">
          @ZuzaSasa
        </a>
        !!!
      </p>
    </Layout>
  )
}

export default ContactPage
