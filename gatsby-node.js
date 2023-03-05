/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const path = require("path");

exports.createPages = ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const DefaultTemplate = path.resolve("./src/templates/default-template.js");
    const LandingTemplate = path.resolve("./src/templates/landing-template.js");

    resolve(
      graphql(`
        {
          allStrapiMenu {
            edges {
              node {
                id
                Slug
                page {
                  Layout
                  strapi_id
                }
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reporter.panicOnBuild(`Error while running GraphQL query.`);
          reject(result.errors);
        }

        const menus_data = result.data.allStrapiMenu.edges;

        const getPath = (menu) => {
          if (menu.Slug === "home") return "/";
          return `/${menu.Slug}/`;
        };

        menus_data.forEach(({ node }) => {
          if (!node?.page) return;

          let page_layout = "";

          switch (node.page?.Layout) {
            case "home_template":
              page_layout = DefaultTemplate;
              break;
            case "landing_template":
              page_layout = LandingTemplate;
              break;
            default:
              page_layout = LandingTemplate;
          }

          createPage({
            path: getPath(node),
            component: page_layout,
            context: {
              page_id: node.page.strapi_id,
            },
          });
        });
      })
    );
  });
};
