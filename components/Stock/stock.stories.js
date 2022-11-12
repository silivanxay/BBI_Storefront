import Stock from "../Stock";

export const Story = (args) => (
  <Stock method="post" {...args} />
);

export default {
  title: "Stock",
  component: Stock,
  argTypes:  {
    url: {
      defaultValue: { 
        stock_url : "http://localhost:8000/api/v1/stock/"}
    }
  },
};
