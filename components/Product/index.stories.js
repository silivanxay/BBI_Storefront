import Product from "../Product";

export const Story = (args) => <Product {...args} />;

export default {
  title: "Product",
  component: Product,
  argTypes: {},
};
