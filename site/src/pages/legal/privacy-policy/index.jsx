import React from 'react'
import { graphql } from 'gatsby'
import Faq from '@solid-ui-blocks/Faq/Block02'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import Header from '@solid-ui-blocks/Header/Block01'
import Hero from '@solid-ui-blocks/Hero/Block02'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import ContentOne from '@solid-ui-blocks/Content/Block01'
import { Container } from 'theme-ui'
import JoinCompanies from '@solid-ui-blocks/Content/Block01'

const AboutUs02 = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout {...props}>
      <Seo title='Privacy Policy' />
      {/* Blocks */}
      <Header content={content['header']} />
      <Divider space='5' />
      <Hero content={content['hero']} reverse />
      <Container variant='narrow'>
        <ContentOne content={content['introduction']} />
      </Container>
      <Divider space='3' />
      <Faq content={content['types-of-personal-data']} />
      <Divider space='3' />
      <Faq content={content['how-we-collect-data']} />
      <Divider space='3' />
      <Faq content={content['how-we-use-personal-data']} />
      <Divider space='5' />
      <JoinCompanies content={content['third-party-services']} />
      <Divider space='5' />
      <JoinCompanies content={content['get-in-touch']} />
      <Divider space='5' />

      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query innerpagePrivacyPolicyBlockContent {
    allBlockContent(
      filter: { page: { in: ["site/legal/privacy-policy", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default AboutUs02
