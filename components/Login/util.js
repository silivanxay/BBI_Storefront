import { getAxios } from "../../utils/get-axios";

export default async function postAPI(method, url, formdata) {
  const response = await getAxios()[method](url, formdata)
  return response;
}
