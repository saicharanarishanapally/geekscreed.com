require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "GeeksCreed",
    siteUrl: "https://geekscreed.com",
    description: "Tech Blog or Geeks and Hobbyists 💻",
    coverImage: "/images/cover-image.jpg",
    icon: "/images/icon.png",
    logo: "/images/logo.png",

    social: {
      twitter: "theGeeksCreed",
      facebook: "theGeeksCreed",
    },
  },

  mapping: {
    "MarkdownRemark.frontmatter.authors": `AuthorsYaml.id`,
    "MarkdownRemark.frontmatter.tags": `TagsYaml.id`,
  },

  plugins: [
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "data",
        path: `./content/data/`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "assets",
        path: `./content/assets/`,
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./content/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "./content/posts/",
      },
      __key: "posts",
    },

    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              // maxWidth: 590,
              linkImagesToOriginal: false,
              showCaptions: true,
            },
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GeeksCreed - Tech Blog`,
        short_name: `GeeksCreed`,
        start_url: "/",
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: "content/assets/images/icon.png", // This path is relative to the root of the site.
      },
    },

    "gatsby-plugin-remove-serviceworker",

    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        createLinkInHead: true,
      },
    },

    "gatsby-plugin-next-seo",

    // "gatsby-plugin-webpack-bundle-analyser-v2",

    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GATSBY_SITE_GOOGLE_ANALYTICS,
      },
    },

    // {
    //   resolve: `gatsby-plugin-google-adsense`,
    //   options: {
    //     publisherId: process.env.GATSBY_GOOGLE_AD_SENSE_CLIENT,
    //   },
    // },

    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.published_at,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  categories: edge.node.frontmatter.tags.map((tag) => tag.name),
                  custom_elements: [{ "content:encoded": edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___published_at] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        published_at
                        tags {
                          name
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "GeeksCreed",
            match: "^/blog/",
          },
        ],
      },
    },
  ],
};
