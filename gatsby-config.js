/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
              `gatsby-plugin-sass`, 
              `gatsby-plugin-typescript`,
              {
                resolve: `gatsby-plugin-minify-classnames`,
                options: {
                  dictionary: 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ0123456789',
                  enable: process.env.NODE_ENV === 'production',
                },
              }
            ],
}
