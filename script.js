//let response=await fecth(
//"AIzaSyBKmYMqOjKKVp08cVdxEK0xcGuupJJxGjk"
//)

//let cache=document.querySelector("#cache2");
//const changeC=()=>{
//if ('click'){
//background-color:#ffffff
//}
//}
//cache.addEventlistener ('click', changecolor)
//

// let mesForms = document.getElementById("cache3");
// mesForms.addEventlistener("click", function () {
// document.getElementById("monProfil").style.display = "none";
// });

document.getElementById("cache2").addEventListener("click", function () {
  document.getElementById("mesexpé").style.display="block"
  document.getElementById("monProfil").style.display="none"
  document.getElementById("mesForms").style.display="none"
  document.getElementById("mesleti").style.display="none"
  document.getElementById("mesassos").style.display="none"
  document.getElementById("mecontacter").style.display="none"
});

document.getElementById("cache1").addEventListener("click", function () {
  document.getElementById("monProfil").style.display="block"
  document.getElementById("mecontacter").style.display="none"
  document.getElementById("mesexpé").style.display="none"
  document.getElementById("mesForms").style.display="none"
  document.getElementById("mesleti").style.display="none"
  document.getElementById("mesassos").style.display="none"
});


document.getElementById("cache3").addEventListener("click", function () {
  document.getElementById("mesForms").style.display="block"
  document.getElementById("monProfil").style.display="none"
  document.getElementById("mesexpé").style.display="none"
  document.getElementById("mesleti").style.display="none"
  document.getElementById("mesassos").style.display="none"
  document.getElementById("mecontacter").style.display="none"
});

document.getElementById("cache4").addEventListener("click", function () {
  document.getElementById("mesleti").style.display="block"
  document.getElementById("monProfil").style.display="none"
  document.getElementById("mesexpé").style.display="none"
  document.getElementById("mesForms").style.display="none"
  document.getElementById("mecontacter").style.display="none"
  document.getElementById("mesassos").style.display="none"
});

document.getElementById("cache5").addEventListener("click", function () {
  document.getElementById("mesassos").style.display="block"
  document.getElementById("monProfil").style.display="none"
  document.getElementById("mesexpé").style.display="none"
  document.getElementById("mesForms").style.display="none"
  document.getElementById("mesleti").style.display="none"
  document.getElementById("mecontacter").style.display="none"
});

document.getElementById("cache6").addEventListener("click", function () {
  document.getElementById("mecontacter").style.display="block"
  document.getElementById("monProfil").style.display="none"
  document.getElementById("mesexpé").style.display="none"
  document.getElementById("mesForms").style.display="none"
  document.getElementById("mesleti").style.display="none"
  document.getElementById("mesassos").style.display="none"
});
