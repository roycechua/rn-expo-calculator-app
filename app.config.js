module.exports = {
    expo: {
        name: 'rn-calculator-app',
        slug: 'rn-calculator-app',
        version: '1.0.0',
        orientation: 'portrait',
        icon: './assets/icon.png',
        userInterfaceStyle: 'light',
        splash: {
            image: './assets/splash.png',
            resizeMode: 'contain',
            backgroundColor: '#ffffff',
        },
        assetBundlePatterns: ['**/*'],
        ios: {
            supportsTablet: true,
        },
        android: {
            adaptiveIcon: {
                foregroundImage: './assets/adaptive-icon.png',
                backgroundColor: '#ffffff',
            },
        },
        web: {
            favicon: './assets/favicon.png',
        },
        // All values in extra will be passed to your app.
        extra: {
            eas: {
                projectId: '39931ebf-dd60-4c1e-b522-4530da57b2f4',
            },
        },
    },
};
