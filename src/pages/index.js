import React from "react"
import { graphql } from "gatsby"
import { Jumbo, SEO, Product } from '../components'

export const query = graphql`
  query GET_DATA{
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
    allStripePrice{
      edges{
        node{
          id
          product{
            name
            metadata{
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
`

const IndexPage = ({data}) => {
  console.log(data);
  return (
    <>
      <SEO title="Home" />
      <Jumbo description={data.allSite.edges[0].node.siteMetadata.description}/>
      <Product products={data.allStripePrice.edges}></Product>
    </>
)}

export default IndexPage
