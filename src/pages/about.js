import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout.js'

const AboutPage = () => {
    return (
        <Layout
            title="about this site"
            description="more about this site"
        >
            <h1>About Page</h1>
            <Link to="/">Go back to home</Link>
        </Layout>
    )
}

export default AboutPage