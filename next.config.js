
const path = require("path");
const allowedImageWordPressDomain = new URL(process.env.NEXT_PUBLIC_WORDPRESS_URL).hostname

module.exports =   {
    i18n: {
        locales: ["ro"],
        defaultLocale: "ro",
      },
    trailingSlash: true,
    webpackDevMiddleware: (config) => {
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300,
        };

        return config;
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    webpack5: true,
    /**
     * We specify which domains are allowed to be optimized.
     * This is needed to ensure that external urls can't be abused.
     * @see https://nextjs.org/docs/basic-features/image-optimization#domains
     */
    images: {
        domains: [ allowedImageWordPressDomain, 'pentru-par.cos-laboratories.com' ],
    },
};