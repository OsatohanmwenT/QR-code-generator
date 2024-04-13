const urlInput = document.getElementById("url-input")
const generateBtn = document.getElementById("generate-btn")
const qrCodeDiv = document.querySelector(".qrcode")
const urlTab = document.querySelector(".url-tab")
const qrCodeTab = document.querySelector(".qrcode-tab")
const downloadBtn = document.getElementById("download-btn")
const copyBtn = document.getElementById("copy-btn")

  generateBtn.addEventListener("click", () => {
    let url = urlInput.value.trim()

    if (url === "") {
      alert("Please enter a URL")
      return;
    }

    qrCodeDiv.innerHTML = "";
    urlTab.classList.remove("active")
    qrCodeTab.classList.add("active")

    var qrcode = new QRCode(qrCodeDiv, {
      text: url,
      width: 200,
      height: 200,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    })
  })

  downloadBtn.addEventListener("click", () => {
    const qrCodeImg = qrCodeDiv.querySelector('img');
    const url = qrCodeImg.src;

    const a = document.createElement('a');
    a.href = url;
    a.download = 'qrcode.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

copyBtn.addEventListener("click", () => {
    const url = urlInput.value.trim();
    navigator.clipboard.writeText(url)
        .then(() => {
            alert('URL copied to clipboard');
        })
        .catch(err => {
            console.error('Error copying URL to clipboard:', err);
            alert('Failed to copy URL to clipboard');
        });
});