
import { getAxios } from "../../utils/get-axios";

export default async function postAPI(method, url, formdata) {

  let stock_url = url.stock_url;
  console.log("stock_url", stock_url);
  let options_url = url.options_url
  console.log("opton_url", options_url)


  const response_stock = await getAxios()[method](stock_url, formdata);
  console.log(response_stock);
  if (response_stock.status !== 200)
    return response_stock;
  const data = response_stock.data;
  const stock_id = data.stock.id
  console.log("stock_id", stock_id);

  formdata.append("stock_id", stock_id);

  const response_option = await getAxios()[method](options_url, formdata);
  console.log("response_option", response_option);
  return response_option;
  
}