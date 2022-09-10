import Article from '../components/Article';

const articleMock = {
  id: 3,
  author: 'Dr SIlivanxay Phetsouvanh',
  company: 'Bamboo BI',
  image_url: 'https://bamboobi.la/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbamboobi.3fededfc.webp&w=256&q=75',
  content: 'Dr SIlivanxay Phetsouvanh born October 5, 1992 is a SaaS expert'
}

const Story = (props) => <Article {...props} />

// Here we export a variant of the default template passing props
export const ArticleStory = Story.bind({})
ArticleStory.args = {
  article: articleMock,
};

// Here we export a variant of the default template passing props
export const EmptyArticleStory = Story.bind({})
EmptyArticleStory.args = {
  article: null,
};

// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'Article',
  component: Article,
  argTypes: {
    showImage: { control: 'boolean' },
  },
};