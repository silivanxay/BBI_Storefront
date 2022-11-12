
import { getAxios } from "../../utils/get-axios";

export default async function postAPI(method, url, formdata) {
  let product_url = url.product_url;
  console.log("dddddd", product_url)
  const response = await getAxios()[method](product_url, formdata);
  console.log("yyyyyy", response)
  if (response.status !== 200) 
    return response;
  const data = response.data;
  return data;
}
