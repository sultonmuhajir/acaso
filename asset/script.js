const metode = document.getElementById("metode");
const awal = document.getElementById("awal");
const akhir = document.getElementById("akhir");
const texIn = document.getElementById("text-input");
const texAr = document.getElementById("text-area");
const result = document.getElementById("result");
const lockToogle = document.getElementById("lock-toogle");
const lockButton = document.getElementById("lock-button");
const hapus = document.getElementById("hapus");
const loading = document.getElementById("loading");
const play = document.querySelector(".fa-play-circle");
const stop = document.querySelector(".fa-stop-circle");
let aArray = [];


function mLockButton() {
   let text = texAr.value;
   let mArray = text.split("-");
   if (mArray.length == 1) {
      result.innerHTML = "Format Salah";
   } else {
      result.innerHTML = "";
      texAr.toggleAttribute("disabled");
      lockToogle.classList.toggle("fa-lock");
      lockToogle.classList.toggle("fa-lock-open");
   }
}


function aLockButton() {
   const num = /^[0-9]+$/;
   if (awal.value == "" || akhir.value == "" || !awal.value.match(num) || !akhir.value.match(num) || parseInt(awal.value) >= parseInt(akhir.value)) {
      result.innerHTML = "Inputan Salah";
   } else {
      result.innerHTML = "";
      const first = parseInt(awal.value);
      const last = parseInt(akhir.value);
      for (let i = first; i <= last; i++) {
         aArray.push(i);
      }
      texAr.value = aArray;
      awal.value = "";
      akhir.value = "";
      awal.disabled = true;
      akhir.disabled = true;
      lockButton.style.visibility = "hidden";
   }
}


function mHapus() {
   texAr.value = "";
   result.innerHTML = "";
   texAr.disabled = false;
   lockToogle.classList.remove("fa-lock-open");
   lockToogle.classList.add("fa-lock");
}


function aHapus() {
   aArray = [];
   result.innerHTML = "";
   texAr.value = aArray;
   texAr.disabled = true;
   awal.disabled = false;
   akhir.disabled = false;
   lockButton.style.visibility = "initial";
}


function mPlay() {
   if (texAr.disabled === false) {
      result.innerHTML = "Lock";
   } else {
      play.style.display = "none";
      stop.style.display = "inline-block";
      loading.style.display = "inline-block";
      result.style.display = "none";
      lockButton.style.display = "none";
      hapus.style.display = "none";
   }
}


function aPlay() {
   if (texAr.value == "") {
      result.innerHTML = "Lock";
   } else {
      play.style.display = "none";
      stop.style.display = "inline-block";
      loading.style.display = "inline-block";
      result.style.display = "none";
      lockButton.style.display = "none";
      hapus.style.display = "none";
   }
}


function mnStop() {
   loading.style.display = "none";
   result.style.display = "inline-block";
   let text = texAr.value;
   let mArray = text.split("-").filter(el => el != "");
   const random = mArray[Math.floor(Math.random() * mArray.length)];
   result.innerHTML = random;
   play.style.display = "inline-block";
   stop.style.display = "none";
   lockButton.style.display = "initial";
   hapus.style.display = "initial";
}


function meStop() {
   loading.style.display = "none";
   result.style.display = "inline-block";
   let text = texAr.value;
   let mArray = text.split("-").filter(el => el != "");
   const random = mArray[Math.floor(Math.random() * mArray.length)];
   result.innerHTML = random;
   if (mArray.length == 1) {
      text = texAr.value = text.split(random).join("");
      texAr.disabled = false;
      lockToogle.classList.remove("fa-lock-open");
      lockToogle.classList.add("fa-lock");
   } else if (random == mArray[0]) {
      text = texAr.value = text.split(`${random}-`).join("");
   } else {
      text = texAr.value = text.split(`-${random}`).join("");
   }
   play.style.display = "inline-block";
   stop.style.display = "none";
   lockButton.style.display = "initial";
   hapus.style.display = "initial";
}


function anStop() {
   loading.style.display = "none";
   result.style.display = "inline-block";
   const random = aArray[Math.floor(Math.random() * aArray.length)];
   result.innerHTML = random;
   texAr.value = aArray;
   play.style.display = "inline-block";
   stop.style.display = "none";
   lockButton.style.display = "initial";
   hapus.style.display = "initial";
   if (aArray.length == 0) {
      awal.disabled = false;
      akhir.disabled = false;
   }
}


function aeStop() {
   loading.style.display = "none";
   result.style.display = "inline-block";
   const random = aArray[Math.floor(Math.random() * aArray.length)];
   result.innerHTML = random;
   aArray = aArray.filter(el => el != random);
   texAr.value = aArray;
   play.style.display = "inline-block";
   stop.style.display = "none";
   lockButton.style.display = "initial";
   hapus.style.display = "initial";
   if (aArray.length == 0) {
      awal.disabled = false;
      akhir.disabled = false;
      lockButton.style.visibility = "initial";
   }
}



// -> Modal
function load(element, url) {
   const xhr = new XMLHttpRequest();
   xhr.open("GET", url, false);
   xhr.send(null);
   element.innerHTML = xhr.responseText;
}
load(document.getElementById('modal'), './asset/modal.html');


const buttonModal = document.querySelector(".fa-info-circle");
const modal = document.querySelector(".modal");
const bgmodal = document.querySelector(".modal .bgmodal");
const mainModal = document.querySelector(".modal .main");
const closeModal = document.querySelector(".modal i");

function clearModal() {
   modal.style.display = "none";
   bgmodal.style.backgroundColor = "initial";
   bgmodal.style.opacity = ".5";
   mainModal.style.transform = "translate(-50%, -100%)";
   mainModal.style.opacity = "0";
}

buttonModal.addEventListener("click", function () {
   modal.style.display = "initial";
   setTimeout(function () {
      bgmodal.style.backgroundColor = "black";
      bgmodal.style.opacity = ".5";
      mainModal.style.transform = "translate(-50%, -50%)";
      mainModal.style.opacity = "1";
   }, 100);
});
closeModal.addEventListener("click", clearModal);
bgmodal.addEventListener("click", clearModal);