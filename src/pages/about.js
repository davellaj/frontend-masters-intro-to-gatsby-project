import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout.js';

export const query = graphql`
  query CocktailQuery {
    file(name: { eq: "cocktail" }) {
      id
      childImageSharp {
        gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
    }
  }
`;
const AboutPage = ({ data }) => {
  console.log('data ', data);
  return (
    <Layout title="about this site" description="more about this site">
      <GatsbyImage
        image={getImage(data.file)}
        alt="a cocktail in a floral arangement"
      />
      <h1>About Page</h1>
      <Link to="/">Go back to home</Link>
    </Layout>
  );
};

export default AboutPage;
