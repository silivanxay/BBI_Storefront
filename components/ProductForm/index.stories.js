import ProductForm from '../ProductForm'


const Story = (props) => <ProductForm {...props} />

// Here we export a variant of the default template passing props
export const ProductFormStory = Story.bind({})
ProductFormStory.args = {
};


// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'Product Form/Components',
  component: ProductForm,
  argTypes: {
  },
};