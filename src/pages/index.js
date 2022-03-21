import * as React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Layout from '../components/layout.js'

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query GetBlogPosts {
            allMdx(sort: {fields: frontmatter___date, order: DESC}) {
                nodes {
                    frontmatter {
                        description
                        title
                        date(fromNow: false)
                    }
                    id
                    slug
                }
            }
        }
    `)
     const posts = data.allMdx.nodes;
    return (
        <Layout>
            <h1>Frontend Masters Gatsby Site</h1>
            <Link to="/about">About this site</Link>
            <h2>Check out my other blog posts</h2>
            <ul>
                {posts.map(post => (
                     <li key={post.frontmatter.id}>
                        <Link to={post.slug}>{post.frontmatter.title}</Link>{' '}
                        <small>posted: {post.frontmatter.date}</small>
                    </li>
                ))}
            </ul>
        </Layout>
    )
}

export default IndexPage