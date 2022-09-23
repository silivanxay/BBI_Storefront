import Login from '../Login'
import { getAxios } from '../../.storybook/preview';

const loginMock = {

}

const Story = (props) => <Login {...props} />

// Here we export a variant of the default template passing props
export const LoginStory = Story.bind({})
LoginStory.args = {
};


// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'Login/Components',
  component: Login,
  argTypes:  {
    url: { defaultValue: 'http://shop.localhost:8000/api/v1/login/' },
  },
};

export const Post = (args) => <Login method="post" { ...args }/>;