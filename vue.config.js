
module.exports = {
    pluginOptions: {
        i18n: {
            locale: 'en',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: false
        }
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: '@import "src/assets/scss/data.scss";',
            },
        },
    },

}
