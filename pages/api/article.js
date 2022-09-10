const Article = (_, res) => {
    res.statusCode = 200
    res.json({
      id: 1,
      author: 'Dr Silivanxay Phetsouvanh',
      company: 'Bamboo BI',
      image_url: 'https://bamboobi.la/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbamboobi.3fededfc.webp&w=256&q=75',
      content: 'Bamboo BI is expert in building E-Commerce platform.'
    })
  }
  
  export default Article