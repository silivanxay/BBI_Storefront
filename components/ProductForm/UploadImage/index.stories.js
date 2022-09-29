import UploadImage from '../UploadImage'

const uploadImageMock = {

}

const Story = (props) => <UploadImage {...props} />

// Here we export a variant of the default template passing props
export const UploadImageStory = Story.bind({})
UploadImageStory.args = {
};


// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'Product Form/Elements/Upload Image',
  component: UploadImage,
  argTypes: {
  },
};