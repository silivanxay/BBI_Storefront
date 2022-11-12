module.exports = {
  "stories": [
    // Paths to the story files
    "../components/**/*.stories.@(js|jsx|mdx)",

  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    'storybook-axios', 
  ],
  staticDirs: ['../public'],
}