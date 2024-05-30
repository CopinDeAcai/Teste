function encodeImageFileAsURL(element) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
      console.log(reader.result)
      document.getElementById("image").src = reader.result
    }
    reader.readAsDataURL(file);

    
  }