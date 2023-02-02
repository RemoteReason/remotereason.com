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
    "gatsby-plugin-sitemap"
  ],
  // Customize your site metadata
  siteMetadata: {
    //General Site Metadata
    title: 'Remote Reason - Software Development Services',
    name: 'Remote Reason',
    description: 'Building software products that power your business.',
    siteUrl: `https://remotereason.com`
  }
}
