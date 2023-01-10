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
    "gatsby-plugin-sharp"
  ],
  // Customize your site metadata
  siteMetadata: {
    //General Site Metadata
    title: 'Remote Reason - Software Development Services',
    name: 'Remote Reason',
    description: 'Building software products that power your business.',
  }
}
