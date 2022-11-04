
import Listagent from '.'
import getAPI  from './util' 

// Here we export a variant of the default template passing props

export const ListagentStory = (args, { loaded: {listagent} }) => <Listagent {...args} {...listagent} />;
ListagentStory.args = {
};


ListagentStory.loaders = [
  async () => ({
    listagent: (await getAPI()).props}),
];


// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'Admins/Agentslist/Elements/Listagent',
  component: Listagent,
  argTypes: {
    
  },
};

