import axios from 'axios';

export default async function getAPI() {
  const response = await axios.get("http://localhost:3000/api/article");
    const data = await response.data;
  
    if (!data) return { props: {} };
  
    return {
      props: {
        article: data,
      },
    };
  };

