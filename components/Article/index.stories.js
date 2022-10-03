import Article from '.'
import getAPI  from './util' 

export const ArticleMockStory = (args) => <Article {...args}/>;
ArticleMockStory.args = {
  article: { id: 1,
    author: 'Dr Silivanxay Phetsouvanh',
    company: 'Bamboo BI',
    image_url: 'https://bamboobi.la/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbamboobi.3fededfc.webp&w=256&q=75',
    content: 'Bamboo BI is expert in building E-Commerce platform.' }
}

// Here we export a variant of the default template passing props
export const ArticleStory = (args, { loaded: { article } }) => <Article {...args} {...article} />;
ArticleStory.args = {
};
ArticleStory.loaders = [
  async () => ({
    article: (await getAPI()).props}),
];
// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'Article',
  component: Article,
  argTypes: {
    showImage: { control: 'boolean' },
  },
};