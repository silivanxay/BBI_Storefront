export const getAPI = async () => {
    const response = await fetch("http://localhost:3000/api/article");
    const data = await response.json();
  
    if (!data) return { props: {} };
  
    return {
      props: {
        article: data,
      },
    };
  };