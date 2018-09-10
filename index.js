exports.handler = (event, context, callback) => {
    var randNumber = randomIntInc(0,99999);
    
    function randomIntInc(low, high) {
        return Math.floor(Math.random() * (high - low + 1) + low)
    }
    
    if(event.queryStringParameters != undefined){
         if(event.queryStringParameters.cp){
             randNumber = "param addded " + randNumber;
         }
    }

    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda! '+ randNumber)
    };
    callback(null, response);
};
