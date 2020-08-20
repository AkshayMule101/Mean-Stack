let callAjax = function () {
  let xhr = newxXMLHTTPRequest();
  xhr.open("GET", "https://reqres.in/api/users?page=2");

  xhr.onload = () => {
    console.log(xhr.resposeText)
  }
  xhr.send();
}; 