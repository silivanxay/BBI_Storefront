
import { getAxios } from "../../utils/get-axios";

export default async function postAPI(method, url, formdata) {
  const product = url.product;
  const response = await getAxios()[method](product, formdata);
  if (response.status !== 200) return response;
  const data = response.data;
  return data;
}