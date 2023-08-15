
const config = {
    framework: '@storybook/your-framework',
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        // Other Storybook addons
        '@storybook/addon-a11y', //👈 The a11y addon goes here
    ],
};

export default config;