module.exports = {
  flags: {
    DEV_SSR: false
  },
  plugins: [
    {
      resolve: '@elegantstack/gatsby-theme-flexiblocks',
      options: {
        createDemoPages: true,
        colorMode: true
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
  // Customize your site metadata
  siteMetadata: {
    title: 'FlexiBlocks Theme',
    name: 'FlexiBlocks',
    description: 'My site description...'
  }
}
