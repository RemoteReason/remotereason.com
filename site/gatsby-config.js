module.exports = {
  flags: {
    DEV_SSR: false
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Remote Reason - Software Development Services',
        short_name: 'Remote Reason',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#5a67d8',
        display: 'minimal-ui',
        icon: 'content/assets/favicon.png'
      }
    },
    {
      resolve: '@elegantstack/gatsby-theme-flexiblocks',
      options: {
        createDemoPages: false,
        colorMode: true
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
  // Customize your site metadata
  siteMetadata: {
    title: 'Remote Reason - Software Development Services',
    name: 'Remote Reason',
    description: 'Building software products that power your business.'
  }
}
