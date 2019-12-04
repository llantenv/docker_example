let jsonResponse = function(res, success, data, message, responseCode) {

    data = data || {};
    message = message || "ok";
    responseCode = responseCode || 200;

    var resp = { success: success, message: message, data: data };
    res.setHeader('content-type','application/json');
    res.status(responseCode).send(JSON.stringify(resp));
};

let getRandomInt = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
    jsonResponse: jsonResponse,
    getRandomInt: getRandomInt
};
  

  