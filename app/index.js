import {deviceInfo} from "./resourse/js/mod";
import {browserInfo} from "./resourse/js/utils";
console.log('index.js is load!!');
console.log(deviceInfo());
var app=document.getElementById("app");
var html="<p>当前设备操作系统为："+(deviceInfo().isAndroid ?"andr" : "ios")+"</p>";
    html+="<p>当前浏览器UA为："+browserInfo+"</p>";
app.innerHTML=html;
