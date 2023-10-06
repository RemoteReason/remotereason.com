import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import Header from '@solid-ui-blocks/Header/Block01'
import Contact from '@solid-ui-blocks/CallToAction/Block02'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import FeatureOne from '@solid-ui-blocks/FeaturesWithPhoto/Block01'
import Features from '@solid-ui-blocks/Features/Block05'

const Services04 = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout {...props}>
      <Seo title='Expertise - AI Engineering' />
      {/* Blocks */}
      <Header content={content['header']} />
      <Divider space='5' />
      <Divider space='3' />
      <Features content={content['tiers-ai-engineering']} />
      <Divider space='4' />
      <Contact content={content['cta']} />
      <Divider space='4' />
      <FeatureOne content={content['challenges-ai-engineering']} />
      <Divider space='3' />
      <Contact content={content['codemagic']} />
      <Divider space='3' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query innerpageSiteExpertiseAiEngineeringBlockContent {
    allBlockContent(
      filter: { page: { in: ["site/expertise/ai-engineering", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default Services04
