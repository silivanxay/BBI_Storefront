module.exports = {
    "stories": [
      // Paths to the story files
      "../components/**/*.stories.@(js|jsx|mdx)",
      "../layouts/**/*.stories.@(js|jsx|mdx)",
    ],
    "addons": [
      "@storybook/addon-links",
      "@storybook/addon-essentials",
      "@storybook/addon-docs",
      'storybook-addon-jsx',      
      'storybook-axios', 
      '@storybook/addon-interactions',
      '@storybook/addon-coverage',
    ],
    staticDirs: ['../public'],
  }