import Addproduct from "../Addproduct";

export const Story = (args) => (
  <Addproduct method="post" {...args} />
);


export default {
  title: "Addproduct",
  component: Addproduct,
  argTypes: {
    url: {
      defaultValue: { 
        product_url : "http://localhost:8000/api/v1/product/"}
    }
  },
};
