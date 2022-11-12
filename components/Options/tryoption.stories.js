import Options from "../Options";

export const Story = (args) => (
  <Options method="post" {...args} />
);

export default {
  title: "Options",
  component: Options,
  argTypes:  {
    url: {
      defaultValue: {
        stock_url : "http://localhost:8000/api/v1/stock/",
        options_url : "http://localhost:8000/api/v1/option/",
  
      }
    }
  },
};
