module.exports = {
  flags: {
    DEV_SSR: false
  },
  plugins: [
    {
      resolve: '@elegantstack/gatsby-theme-flexiblog-minimal-v2',
      options: {
        // Add theme options here. Check documentation for available options.
        siteUrl: process.env.URL || process.env.VERCEL_URL
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'content/assets/favicon.png',
      },
    },
    "gatsby-plugin-sitemap"

  ],
  // Customize your site metadata:
  siteMetadata: {
    title: 'Remote Reason - Software Development Services',
    name: 'Remote Reason',
    description: 'Building software products that power your business.',
    email: 'hello@remotereason.com',
    address:'',
    phone:'',

    //Site Social Media Links
    social: [
      {
        name: 'Github',
        url: 'https://github.com/RemoteReason'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/RemoteReason'
      },
      {
        name: 'Slack',
        url: 'https://remote-reason.slack.com/'
      }
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: 'Services',
        slug: 'https://remotereason.com/services/overview'
      },
      {
        name: 'Expertise',
        slug: 'https://remotereason.com/expertise/overview'
      },
      {
        name: 'Blog',
        slug: '/'
      }
    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'RR',
        items: [
          {
            name: 'Services',
            slug: 'https://remotereason.com/services/overview'
          },
          {
            name: 'Expertise',
            slug: 'https://remotereason.com/expertise/overview'
          },
          {
            name: 'Blog',
            slug: '/'
          }
        ]
      },
      {
        title: 'Legal',
        items: [
          {
            name: 'Privacy Policy',
            slug: 'https://www.remotereason.com/legal/privacy-policy'
          },
          {
            name: 'Cookie Policy',
            slug: 'https://www.remotereason.com/legal/cookie-policy'
          }
        ]
      }
    ]
  }
}
