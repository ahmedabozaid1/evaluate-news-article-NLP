const mockAPIResponse = require('./mockAPI.js')
const express = require('express')
const dotenv = require('dotenv')
dotenv.config();
const fetch = require("node-fetch");
var path = require("path");
const app = express()
const PORT = 8081
const parser = require("body-parser");
app.use(parser.urlencoded({extended: false}))
app.use(parser.json())
app.use(express.static('dist'))
const cors = require('cors');
app.use(cors());
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
   // res.sendFile(path.resolve('src/client/views/index.html'))
})
app.post('/check', async (req, res) => {
    try {
            const url=req.body.url;        
            const API_URL = 'https://api.meaningcloud.com/sentiment-2.1'
            const API_KEY=process.env.API_KEY
            ///console.log(`Your API key is ${process.env.API_KEY}`);
            const API_info = `${API_URL}?key=${API_KEY}&url=${url}&lang=en`
            const response=await fetch(API_info)
            const data=await response.json()
           ////console.log(data)
           
            const Apidata={
                agreement:data.agreement,
                subjectivity:data.subjectivity,
                confidence:data.confidence,
                irony:data.irony
            }
            
            res.send(Apidata)

    } catch (error) {
        console.log(error.message)
    }
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})
