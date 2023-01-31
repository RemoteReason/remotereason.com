import React from 'react'
import { Layout, Stack, Main } from '@layout'
import CardList from '@components/CardList'
import Seo from '@widgets/Seo'

const Posts = ({ data: { paginatedPosts = {}, posts }, ...props }) => {
  const { pageContext: { services = {}, basePath } = {} } = props

  return (
    <Layout {...props}>
      <Seo title='Home' />
      <Stack>
        <Main sx={{ zIndex: 1 }}>
          <CardList
            variant={['vertical']}
            nodes={paginatedPosts.nodes}
            columns={[1,2]}
          />
        </Main>
      </Stack>
    </Layout>
  )
}

export default Posts
