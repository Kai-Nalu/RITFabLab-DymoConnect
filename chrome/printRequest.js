// content.js
//alert('Hello, world!');

//create XMLHttpRequest object
const xhr = new XMLHttpRequest()
//open a get request with the remote server URL
xhr.open("GET", "http://localhost:3000/print/PR3D-13999")
//send the Http request
xhr.send()