import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query getSiteTitle {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const meta = data?.site?.siteMetadata ?? {}

    return (
        <>
            <header>
                <Link to="/">{meta.title}</Link>
            </header>
            <main>
                <h1>Frontend Masters Gatsby Site</h1>
                <Link to="/about">About this site</Link>
            </main>
        </>
    )
}

export default IndexPage