import Toggle from ".";
import React from 'react';
import { withReactContext } from 'storybook-react-context';
import { ThemeContext } from "./ThemeContext";

const useProviderValue = (initialState) => {
    const [theme = initialState, setTheme] = React.useState();
    return {
      theme,
      setTheme,
    };
  };

export const Story = (args) => <Toggle {...args} />;

Story.parameters = {
    reactContext: {
        useProviderValue,
    },
  };


export default {
  title: "NavBar/Elements/ThemeToggle",
  component: Toggle,
  decorators: [
    withReactContext({
        Context: ThemeContext,
        initialState: { theme: 'light' },
      }),
  ],
  argTypes: {},
};