# The RR marketing sites
This repo contains two independent projects :
* RR homepage - folder *site*
* RR blog - folder *blog*

Each project is a completely separate Gatsby project.

# Development
## RR homepage
Uses a paid [Flexiblocks Landing Page template](https://themeforest.net/item/flexiblocks-react-gatsby-landing-page-site-template/30807682).

## RR blog
Uses a paid [FlexiBlog Blog Theme](https://themeforest.net/item/flexiblog-react-gatsby-blog-template/27538998).

Both Gatsby themes were acquired via ThemeForest using the account paul.sabou@gmail.com.

## How to run in development mode
1. Run blog in development
```
cd ./blog; npm run develop 
```

2. Run site in development
```
cd ./site; npm run develop 
```

## How to customise things
* gatsby shadowing strategy => override folders inside each site
* change specific theme components inside the root folder /packages (not ideal as it makes theme update merges harder)

# Production
The two projects are available in production as follows:
* [RR homepage](https://www.remotereason.com/)
* [RR blog](https://blog.remotereason.com/)

# Deployment
## Github & Gatsby Cloud
Both sites are deployed automatically after every repo push. The building & deployment is on [Gatsby Cloud](https://www.gatsbyjs.com/dashboard/organization/f168671a-3fcd-4d2a-ae45-aed7be2a33c4/sites). The Gatsby Cloud account is hello@remotereason.com.

The repo does not need Github actions or anything similar to build. Gatsby cloud uses webhooks to be notified when the repo has changed and takes care of everything from then on.

## Keeping things online
As we use a free tier Gatsby Cloud will take down the site if there are no visitors for a while. To avoid this we use [Uptime Robot](https://uptimerobot.com/dashboard#793652822) to simulate visits. The Uptime Robot account is hello@remotereason.com.




