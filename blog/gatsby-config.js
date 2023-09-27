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
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: [ '/tag/**','/authors','/contact' ]
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-9XXND626J7", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
      },
    }

  ],
  // Customize your site metadata:
  siteMetadata: {
    title: 'Remote Reason',
    name: 'Remote Reason',
    description: 'Building custom software for startups & companies that really care.',
    image: `content/assets/social-image.png`,
    email: 'hello@remotereason.com',
    siteUrl: `https://blog.remotereason.com`,
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
        slug: 'https://www.remotereason.com/services/overview'
      },
      {
        name: 'Expertise',
        slug: 'https://www.remotereason.com/expertise/overview'
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
            slug: 'https://www.remotereason.com/services/overview'
          },
          {
            name: 'Expertise',
            slug: 'https://www.remotereason.com/expertise/overview'
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
