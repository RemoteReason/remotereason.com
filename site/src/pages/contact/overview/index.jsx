import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import Header from '@solid-ui-blocks/Header/Block01'
import Content from '@solid-ui-blocks/Content/Block02'
import Gallery from '@solid-ui-blocks/Blog/Block01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import { Container } from 'theme-ui'
import styles from './_styles'
import Contact from '@solid-ui-blocks/CallToAction/Block02'

const Services03 = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout {...props}>
      <Seo title='Contact' />
      {/* Blocks */}
      <Header content={content['header']} />
      <Divider space='5' />
      <Container sx={styles.heroContainer}>
        <Content content={content['contact-intro']} />
        <Gallery content={content['contact']} />

      </Container>

      <Divider space='4' />
      <Contact content={content['cta']} />

      <Divider space='5' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query innerpageSiteCareersBlockContent {
    allBlockContent(
      filter: { page: { in: ["site/contact/overview", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default Services03
