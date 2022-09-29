import FormGrid from '../FormGrid'

const formGridMock = {

}

const Story = (props) => <FormGrid {...props} />

// Here we export a variant of the default template passing props
export const FormGridStory = Story.bind({})
FormGridStory.args = {
};


// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'Product Form/Elements/Form Grid',
  component: FormGrid,
  argTypes: {
  },
};