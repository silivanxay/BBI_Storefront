import { getAxios } from '../../utils/get-axios'

export default async function getAPI() {
  const article_url = "http://localhost:3000/api/article";
  const method = "get";
  const response = await getAxios()[method](article_url,null);
    const data = await response.data;
  
    if (!data) return { props: {} };
  
    return {
      props: {
        article: data,
      },
    };
  };

