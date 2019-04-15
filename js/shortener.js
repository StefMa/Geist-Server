// This will create a short url via the firebase dynamic link shortener (https://firebase.google.com/docs/dynamic-links/rest)
// Param 1: The long url which will be shortend
// Param 2: The API key
// Param 3: The successfull callback (function) which will return the shortUrl as param
function createShortUrl(longUrl, apiKey, callback) {
  var req = new Object();
  var linkInfo = new Object();
  linkInfo.domainUriPrefix = "URL_PREFIX.page.link"
  linkInfo.link = longUrl
  req.dynamicLinkInfo = linkInfo
  var jsonBody = JSON.stringify(req);

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=" + apiKey, true);
  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  xhr.send(jsonBody);
  xhr.onloadend = () => {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      var shortUrl = JSON.parse(xhr.responseText).shortLink;
      if (typeof shortUrl === 'undefined') {
        callback(longUrl);
      } else {
        callback(shortUrl);
      }
    }
  };
}
