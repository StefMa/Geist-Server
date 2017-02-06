// This will upload the given file to the firebase storage
// Param 1: The file which will be uploaded
// Param 2: Optional: the filename
// Return: The uploadTask from firebase
function uploadFileToStorage(file, filename) {
  var metadata = {
    'contentType': file.type
  };

  // build the filename if is not provided
  if(typeof filename === 'undefined') {
    // FIXME: This is guly. Because some people name files like
    // Images_26.5.2015.zip
    var baseName = file.name.split('.')[0];
    var extension = file.name.split('.')[1];
    var filename = baseName + "_" + Date.now().toString() + "." + extension;
  }

  // Push to child path.
  var uid = firebase.auth().currentUser.uid;
  return firebase.storage().ref().child('user/cache/' + uid + '/' + filename).put(file, metadata);
}
