
import { getAxios } from "../../utils/get-axios";

export default async function postAPI(method, url, formdata) {
  let stock_url = url.stock_url;
  console.log("dddddd", stock_url)
  const response = await getAxios()[method](stock_url, formdata);
  if (response.status !== 200) 
    return response;
  const data = response.data;
  return data;
}
