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