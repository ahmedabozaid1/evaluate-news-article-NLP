import { checkURL } from "./checkURL"
const fetch = require("node-fetch");
async function handleSubmit(event) {
    event.preventDefault()
    ///alert('here')
    let url = document.getElementById('url').value

    if(Client.checkURL(url))
    {
        ///alert(url
        ///send to backend 
        post("http://localhost:8081/check",{url: url}).then(data =>{
            document.getElementById("agreement").innerHTML= `Agreement: ${data.agreement}`;
            document.getElementById("subjectivity").innerHTML=`Subjectivity: ${data.subjectivity}`;
            document.getElementById("confidence").innerHTML=`Confidence: ${data.confidence}`;
            document.getElementById("irony").innerHTML=`Irony: ${data.irony}`;
        })
      
       
    }else{ 
        alert('URL is Wrong')
        console.log("wrong")
    }

}




const post = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    try {
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

export { handleSubmit }
