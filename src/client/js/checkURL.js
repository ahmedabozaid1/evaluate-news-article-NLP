var validUrl = require('valid-url')
function checkURL(str)
{
    if(validUrl.isHttpsUri(str))
    {
        return true
    }else{
        return false
    }
}
export {checkURL}