import { graphql } from "gatsby";

export const menuFragment = graphql`
  fragment menuFragment on STRAPI_MENU {
    Slug
    Title
    strapi_parent {
      Slug
      Title
    }
    Link_Type
  }
`;

export const componentCTAFragment = graphql`
  fragment componentCTAFragment on STRAPI__COMPONENT_COMPONENTS_CTA {
    Label
    strapi_id
    Custom_Link
    menu {
      ...menuFragment
    }
    Theme
  }
`;
