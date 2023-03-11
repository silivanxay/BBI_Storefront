import Login from "../Login"
import { expect } from '@storybook/jest';
import { userEvent, waitFor, within, fireEvent} from '@storybook/testing-library';

const LoginStory = (args) => <Login method="post"  {...args} />;

export const ExampleWithInteraction = LoginStory.bind({});

ExampleWithInteraction.play = async({canvasElement }) => {
  const canvas = within(canvasElement);
  const username_input = canvas.getByLabelText('username-input');
  fireEvent.change(username_input, {target: {value: 'admin'}})
  const password_input = canvas.getByLabelText('password-input');
  fireEvent.change(password_input, {target: {value: 'admin'}})
  await userEvent.click(canvas.getByText('Sign in'));
  const login_form = canvas.getByLabelText('login_form')
  await waitFor(() => expect(username_input.value).toBe('admin'));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Login/Components',
  component: Login,
  argTypes: {
    url: { defaultValue: 'http://localhost:8000/api/v1/login/' },
  },
};
