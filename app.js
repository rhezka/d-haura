// Data final (struktur). Foto, nama, dan harga menyusul data asli.
const WA_NUMBER = "6280000000000"; // GANTI nomor WA

const U = (id) => "https://images.unsplash.com/" + id + "?w=600&q=80";
const IMG = {
  roti: U("photo-1608198093002-ad4e005484ec"),
  cokelat: U("photo-1578985545062-69928b1d9587"),
  stroberi: U("photo-1565958011703-44f9829ba187"),
  cupcake: U("photo-1486427944299-d1955d23e34d"),
  kukis: U("photo-1499636136210-6f4ee915583e"),
  salad: U("photo-1512621776951-a57141f2eefd"),
  mangkuk: U("photo-1490645935967-10de6ba17061"),
  bowl: U("photo-1546069901-ba9599a7e63c"),
  segar: U("photo-1540189549336-e6e99c3679fe"),
};

const KUE = [
  { nama:"Bolu Pandan", harga:25000, halal:true, img:IMG.roti,
    photos:[IMG.roti, IMG.cupcake, IMG.kukis],
    desc:"Bolu kukus aroma pandan, lembut dan tidak seret. Cocok untuk arisan dan hajatan." },
  { nama:"Brownies Kukus", harga:30000, halal:false, img:IMG.cokelat,
    photos:[IMG.cokelat, IMG.stroberi, IMG.kukis],
    desc:"Brownies kukus cokelat, legit di tengah. Tersedia loyang dan potong." },
  { nama:"Lapis Pelangi", harga:20000, halal:false, img:IMG.stroberi,
    photos:[IMG.stroberi, IMG.cokelat, IMG.cupcake],
    desc:"Lapis kukus warna-warni, kenyal dan manisnya pas." },
  { nama:"Putu Ayu", harga:15000, halal:false, img:IMG.cupcake,
    photos:[IMG.cupcake, IMG.roti, IMG.kukis],
    desc:"Putu ayu kelapa parut gurih, dikukus dadakan tiap pagi." },
  { nama:"Kue Kering", harga:35000, halal:false, img:IMG.kukis,
    photos:[IMG.kukis, IMG.cupcake, IMG.roti],
    desc:"Kue kering renyah untuk hampers dan pesanan acara." },
];

const HERBA = [
  { nama:"Shake Nutrisi", harga:0, img:IMG.salad,
    photos:[IMG.salad, IMG.bowl, IMG.segar],
    desc:"Minuman nutrisi praktis untuk pendamping sarapan harian. Varian rasa tanya via WA." },
  { nama:"Teh Herbal", harga:0, img:IMG.mangkuk,
    photos:[IMG.mangkuk, IMG.salad, IMG.segar],
    desc:"Teh herbal untuk teman aktivitas harian. Aturan pakai dijelaskan saat pesan." },
  { nama:"Aloe Pendamping", harga:0, img:IMG.bowl,
    photos:[IMG.bowl, IMG.mangkuk, IMG.salad],
    desc:"Minuman aloe untuk pendamping program harian." },
];

function rupiah(n){ if(!n) return "Tanya via WA"; return "Rp " + n.toLocaleString("id-ID"); }
function waLink(nama){
  const t = encodeURIComponent("Halo D'Haura, saya mau tanya " + nama);
  return "https://wa.me/" + WA_NUMBER + "?text=" + t;
}
function esc(s){ return String(s == null ? "" : s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
function card(p, kind, i){
  const stamp = p.halal ? '<img class="stamp" src="img/halal-indonesia.svg" alt="Halal Indonesia">' : '';
  return '<div class="card">' +
    '<div class="imgwrap"><img loading="lazy" src="' + p.img + '" alt="' + esc(p.nama) + '" onclick="openDetail(\'' + kind + '\',' + i + ')" onerror="this.style.display=\'none\'">' + stamp + '</div>' +
    '<div class="pad"><div class="name">' + esc(p.nama) + '</div>' +
    '<div class="price">' + rupiah(p.harga) + '</div>' +
    '<a class="btn order" target="_blank" rel="noopener" href="' + waLink(p.nama) + '">Tanya / Pesan</a>' +
    '</div></div>';
}
let GAL = [];
function openDetail(kind, i){
  const p = (kind === "k" ? KUE : HERBA)[i];
  GAL = (p.photos && p.photos.length) ? p.photos : [p.img];
  const thumbs = GAL.map((s,j) => '<img src="' + s + '" onclick="setPhoto(' + j + ')" class="' + (j === 0 ? "on" : "") + '" loading="lazy" alt="">').join("");
  document.getElementById("modal").innerHTML =
    '<div class="mback" onclick="closeModal()"><div class="mbox" onclick="event.stopPropagation()">' +
    '<button class="mx" onclick="closeModal()">Tutup</button>' +
    '<img id="mMain" src="' + GAL[0] + '" alt="' + esc(p.nama) + '">' +
    '<div class="mth">' + thumbs + '</div>' +
    '<div class="name">' + esc(p.nama) + '</div>' +
    '<div class="price">' + rupiah(p.harga) + '</div>' +
    '<div class="mdesc">' + esc(p.desc) + '</div>' +
    '<a class="btn order" style="display:block;text-align:center" target="_blank" rel="noopener" href="' + waLink(p.nama) + '">Tanya / Pesan</a>' +
    '</div></div>';
  document.getElementById("modal").style.display = "block";
}
function setPhoto(j){
  document.getElementById("mMain").src = GAL[j];
  const ts = document.querySelectorAll(".mth img");
  for(let k = 0; k < ts.length; k++) ts[k].className = (k === j ? "on" : "");
}
function closeModal(){
  const m = document.getElementById("modal");
  m.style.display = "none"; m.innerHTML = "";
}
function renderPublic(){
  const kg = document.getElementById("kueGrid");
  const hg = document.getElementById("herbaGrid");
  if(kg) kg.innerHTML = KUE.map((p,i) => card(p,"k",i)).join("");
  if(hg) hg.innerHTML = HERBA.map((p,i) => card(p,"h",i)).join("");
  const wo = document.getElementById("waOrder");
  if(wo) wo.href = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent("Halo D'Haura, saya mau tanya-tanya dulu");
}
