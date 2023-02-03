module.exports = {
  flags: {
    DEV_SSR: false
  },
  plugins: [
    {
      resolve: '@elegantstack/gatsby-theme-flexiblocks',
      options: {
        createDemoPages: false,
        colorMode: false,
        
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'content/assets/shared/favicon.png',
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: [ '/legal/**' ]
      }
    }

  ],
  // Customize your site metadata
  siteMetadata: {
    //General Site Metadata
    title: 'Remote Reason',
    name: 'Remote Reason',
    image: `site/content/assets/site/index/expertise-overview.png`,
    description: 'Building custom software for startups & companies that really care.',
    siteUrl: `https://remotereason.com`
  }
}
