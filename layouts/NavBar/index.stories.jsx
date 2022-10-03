import Navbar from ".";
import React from 'react';
import { withReactContext } from 'storybook-react-context';
import { ThemeContext } from "./ThemeToggle/ThemeContext";

const useProviderValue = (initialState) => {
    const [theme = initialState, setTheme] = React.useState();
    return {
      theme,
      setTheme,
    };
  };

export const Story = (args) => <Navbar {...args} />;

Story.parameters = {
    reactContext: {
        useProviderValue,
    },
  };


export default {
  title: "NavBar",
  component: Navbar,
  decorators: [
    withReactContext({
        Context: ThemeContext,
        initialState: { theme: 'light' },
      }),
  ],
  argTypes: {},
};