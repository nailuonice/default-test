let str1 = 'query=%7B%22limit%22:20,%22offset%22:0,%22where%22:%7B%22type%22:1%7D,%22order%22:[[%22createdAt%22,%22desc%22]]%7D';
// console.log(urlencode(obj));
// console.log(encodeURIComponent(str1));

let str2 = decodeURI(str1);
console.log(str2,typeof (str2));

let str3 = encodeURIComponent(str2);
// console.log(str3);


function url_encode(url){
  url = encodeURIComponent(url);
  url = url.replace(/\%3A/g, ":");
  url = url.replace(/\%2F/g, "/");
  url = url.replace(/\%3F/g, "?");
  url = url.replace(/\%3D/g, "=");
  url = url.replace(/\%26/g, "&");
  url = url.replace(/\%2C/g, ",");

  return url;
}
console.log(url_encode(str2));
console.log(str1);