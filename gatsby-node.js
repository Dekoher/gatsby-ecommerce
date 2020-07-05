/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve(`src/templates/Product.js`)
  const queryResult = await graphql(`
    query GET_PRICES {
      allStripePrice {
        edges {
          node {
            id
            product {
              images
              name
              metadata {
                img
                description
                descripcion
                wear
              }
            }
            unit_amount
          }
        }
      }
    }
  `)
  if(queryResult.errors) {
    throw queryResult.errors
  }

  queryResult.data.allStripePrice.edges.forEach(({node}) => {
    createPage({
      path: `${node.id}`,
      component: productTemplate,
      context: node
    })
  });
}
