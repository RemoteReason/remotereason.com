import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import Header from '@solid-ui-blocks/Header/Block01'
import WhyChooseUs from '@solid-ui-blocks/Features/Block04'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import theme from './_theme'
import Gallery from '@solid-ui-blocks/Blog/Block01'
import Contact from '@solid-ui-blocks/CallToAction/Block02'

const IndexPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props}>
      <Seo title='Home' />
      {/* Blocks */}
    
       <Header content={content['header']} />
      
       <Divider space='5' />
      <Gallery content={content['services']} />

      <Divider space='3' />
      <WhyChooseUs content={content['why-choose-us']} />

      <Divider space='4' />
      <Contact content={content['cta']} />
      <Divider space='5' />
      <Footer content={content['footer']} /> 
    </Layout>
  )
}

export const query = graphql`
  query homepageSiteBlockContent {
    allBlockContent(
      filter: { page: { in: ["site/index", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
