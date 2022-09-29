import Login from "../Login"

// Here we export a variant of the default template passing props

export const LoginStory = (args) => <Login method="post"  { ...args }/>;


// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'Login/Components',
  component: Login,
  argTypes:  {
    url: { defaultValue: 'http://localhost:8000/api/v1/login/' },
  },
};
