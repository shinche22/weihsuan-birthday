const candle = document.getElementById("candle");
const wish = document.getElementById("wish");

candle.addEventListener("click", async () => {

try {

await navigator.mediaDevices.getUserMedia({ audio: true });

candle.innerHTML = "💨";

alert("WISH FULFILLED 🎂");

} catch {

alert("請允許麥克風權限");

}

});
