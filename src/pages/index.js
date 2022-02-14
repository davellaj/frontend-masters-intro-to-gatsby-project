import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout.js'

const IndexPage = () => {
    return (
        <Layout>
            <h1>Frontend Masters Gatsby Site</h1>
            <Link to="/about">About this site</Link>
        </Layout>
    )
}

export default IndexPage