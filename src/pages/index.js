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
    allStripeSku: allStripePrice{
      edges{
        node{
          id
          price: unit_amount
          product{
            images
            name
            metadata{
              img
              description
              descripcion
              wear
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({data}) => {
  return (
    <>
      <SEO title="Home" />
      <Jumbo description={data.allSite.edges[0].node.siteMetadata.description}/>
      <Product products={data.allStripeSku.edges}></Product>
    </>
)}

export default IndexPage
