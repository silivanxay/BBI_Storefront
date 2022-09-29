import Article from '.'
import getAPI  from './util' 


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