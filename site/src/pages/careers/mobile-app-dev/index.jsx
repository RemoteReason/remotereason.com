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

const Services03 = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout {...props}>
      <Seo title='Careers - Mobile app developer' />
      {/* Blocks */}
      <Header content={content['header']} />
      <Divider space='5' />
      <Divider space='3' />
      <Features content={content['highlights']} />
      <Divider space='4' />
      <FeatureOne content={content['details']} />
      <Divider space='3' />
      <Features content={content['compensation']} />
      <Divider space='2' />
      <Contact content={content['apply-for-job']} />
      <Divider space='3' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query innerpageSiteExpertiseMobileAppsBlockContent {
    allBlockContent(
      filter: { page: { in: ["site/careers/mobile-app-dev", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default Services03
