let btn = document.querySelector(".button");

btn.addEventListener("click", () => {
  let user_input = document.querySelector("#input_text");
  if (user_input.value != "") {
    if (document.querySelector(".qr-code").childElementCount == 0) {
      generate(user_input);
    } else {
      document.querySelector(".qr_code").innerHTML = "";
      generate(user_input);
    }
  } else {
    document.querySelector(".qr-code").style = "display:none";
    console.log("not valid input");
  }

});
function generate(user_input) {
  document.querySelector(".qr-code").style = "";
}


//https://cdnjs.cloudlare.com/ajax/libs/qrcode/1.0.0/qrcode.min.js 
var qrcode = new QRcode(document.querySelector(".qr-code"), {
  text: '${user_input.value}',
  width: 180, //128
  height: 180,
  colorDark: '#000000',
  colorLight: '#ffffff',
  correctlevel: QRcode.correctlevel.H
});
console.log(qrcode);
let download = document.createElement("button");
document.querySelector(".qr-code").appendChild(download);
let download_link = document.createElement("a");
document_link.setAttribute("download", "qr_code_linq.png");
document_link.innerText = "Download";
download.appendChild(download_link);
if (document.querySelector(".qr-code img").getAttribute('src') == null) {
  setTimedout(() => {
    download_link.setAttribute(
      "href",
      '${document.querySelectior("canvas").toDataURL()}'
    );
  }, 300);
} else {
  setTimeout(() => {
    download_link.setAttribute(
      "href",
      '${document.qureySelector(".qr-code img").getAttribute("src")}'
    );
  }, 300);

}

