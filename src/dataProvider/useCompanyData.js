import { graphql, useStaticQuery } from "gatsby";

const useCompanyData = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiSiteConfig {
        edges {
          node {
            Email
            Phone
            Address
            strapi_id
          }
        }
      }
    }
  `);

  const { Email, Phone, Address, Address_Link, Facebook_Link, Instagram_Link } =
    data.allStrapiSiteConfig.edges[0].node;

  return { Email, Phone, Address, Address_Link, Facebook_Link, Instagram_Link };
};

export default useCompanyData;
