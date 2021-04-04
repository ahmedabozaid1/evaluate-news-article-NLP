import { checkURL } from "./checkURL"
const fetch = require("node-fetch")

const link="http://localhost:8081/check";
async function handleSubmit(event) {
    event.preventDefault()
    let url = document.getElementById('url').value
    if(Client.checkURL(url))
    { 
        sendData(url);
              
    }else{ 
        alert('URL is Wrong')
        console.log("wrong")
    }
}


function sendData(url)
{
    postData(link,{url: url}).then(
        data =>{
        document.getElementById("agreement").innerHTML= `Agreement: ${data.agreement}`;
        document.getElementById("subjectivity").innerHTML=`Subjectivity: ${data.subjectivity}`;
        document.getElementById("confidence").innerHTML=`Confidence: ${data.confidence}`;
        document.getElementById("irony").innerHTML=`Irony: ${data.irony}`;
    }) 
}

/* source: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch  (post method)*/
async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST', 
        mode: 'cors', 
        credentials: 'same-origin', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    return response.json()
}

export { handleSubmit }
