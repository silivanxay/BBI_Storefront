import Button from '.'


export const Story = (args) => <Button  { ...args }/>;

export default {
  title: 'NavBar/Elements/Button',
  component: Button,
  argTypes:  {
    children: { control: 'text' },
  },
};