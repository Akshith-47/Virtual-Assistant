//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 
const { Configuration, OpenAIApi } = require("openai");
const express=require('express');
const bodyParser=require('body-parser')
const cors=require('cors')
const app=express();
app.use(bodyParser.json());
app.use(cors());
const configuration = new Configuration({
  organization: "org-kWTCDUHFaWDmieSM6aLMqMLm",
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();



const port=3080;
app.post('/',async(req,res)=>{
    const {message, currentModel}=req.body;
    //console.log(message);
    const response = await openai.createCompletion({
        model: "text-davinci-003",//`${currentModel}`
        prompt: `${message}`,
        max_tokens: 100,
        temperature: 0.5,
      });
      console.log(response.data.choices[0].text);
      res.json({
        message:response.data.choices[0].text,
        //data:message
      })
});
// app.get('/models',async(req,res)=>{
//     const response=await openai.listEngines();
//     console.log(response.data.data);
//     res.json({
//         models : response.data.data
//     })
// })
app.listen(port,()=>
{
    console.log("listening");
});