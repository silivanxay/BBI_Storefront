import InvertedButton from '.'


export const Story = (args) => <InvertedButton  { ...args }/>;

export default {
  title: 'NavBar/Elements/InvertedButton',
  component: InvertedButton,
  argTypes:  {
    children: { control: 'text' },
  },
};