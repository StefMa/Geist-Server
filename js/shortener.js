// This will create a short url via the google url shortener api (https://goo.gl/pZbaF)
// Param 1: The long url which will be shortend
// Param 2: The API key
// Param 3: The successfull callback (function) which will return the shortUrl as param
function createShortUrl(longUrl, apiKey, callback) {
  var req = new Object();
  req.longUrl = longUrl;
  var jsonBody = JSON.stringify(req);

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://www.googleapis.com/urlshortener/v1/url?key=" + apiKey, true);
  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  xhr.send(jsonBody);
  xhr.onloadend = () => {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      var shortUrl = JSON.parse(xhr.responseText).id;
      if (typeof shortUrl === 'undefined') {
        callback(longUrl);
      } else {
        callback(shortUrl);
      }
    }
  };
}
