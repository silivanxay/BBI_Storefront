import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
   // Run the cors middleware
   // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
   await NextCors(req, res, {
      // Options
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      origin: '*',
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
   });

  //  Rest of the API logic
   res.json({ id: 1,
    author: 'Dr Silivanxay Phetsouvanh',
    company: 'Bamboo BI',
    image_url: 'https://bamboobi.la/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbamboobi.3fededfc.webp&w=256&q=75',
    content: 'Bamboo BI is expert in building E-Commerce platform.' });

}



