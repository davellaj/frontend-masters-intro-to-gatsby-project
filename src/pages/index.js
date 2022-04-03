import * as React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Layout from '../components/layout.js';
import { StaticImage } from 'gatsby-plugin-image';
import { imageWrapper } from '../styles/index.module.css';
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query GetBlogPosts {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            description
            title
            date(fromNow: true)
          }
          id
          slug
        }
      }
      allSanityEpisode(
        sort: { order: DESC, fields: date }
        filter: { youtubeID: { ne: null }, slug: { current: {} } }
        limit: 20
      ) {
        nodes {
          id
          slug {
            current
          }
          guest {
            name
          }
          title
          gatsbyPath(filePath: "/episodes/{SanityEpisode.slug__current}")
        }
      }
    }
  `);

  const posts = data.allMdx.nodes;
  const episodes = data.allSanityEpisode.nodes;
  return (
    <Layout>
      <div className={imageWrapper}>
        <StaticImage
          src="../images/ivana-la-61jg6zviI7I-unsplash.jpg"
          alt="a corgi sitting on a bed with red paper hearts all over it. it looks unamused."
          placeholder="dominantColor"
          width={300}
          height={300}
        />
      </div>
      <h1>Frontend Masters Gatsby Site</h1>
      <Link to="/about">About this site</Link>
      <h2>Check out my other blog posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.frontmatter.id}>
            <Link to={post.slug}>{post.frontmatter.title}</Link>{' '}
            <small>posted: {post.frontmatter.date}</small>
          </li>
        ))}
      </ul>

      <h2>
        Latest Episodes of <em>Learn with Jason</em>
      </h2>
      <ul>
        {episodes.map((episode) => (
          <li id={episode.id}>
            <Link to={episode.gatsbyPath}>
              {episode.title} (with {episode.guest?.[0]?.name})
            </Link>
          </li>
        ))}
      </ul>

      <a href="https://www.learnwithjason.dev/">
        Watch all episodes of <em>Learn with Jason</em>
      </a>
    </Layout>
  );
};

export default IndexPage;
