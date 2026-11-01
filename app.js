// Data contoh — nanti diganti data asli ibu.
const WA_NUMBER = "6280000000000"; // GANTI nomor WA ibu

const KUE = [
  { nama:"Bolu Pandan Contoh", harga:25000, halal:"resmi", desc:"Contoh saja. Nanti foto dan harga asli.", img:"https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=600&q=80" },
  { nama:"Brownies Kukus Contoh", harga:30000, halal:"proses", desc:"Izin halal sedang diurus.", img:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80" },
  { nama:"Lapis Pelangi Contoh", harga:20000, halal:"proses", desc:"Contoh saja.", img:"https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80" },
  { nama:"Putu Ayu Contoh", harga:15000, halal:"proses", desc:"Contoh saja.", img:"https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&q=80" },
  { nama:"Kue Kering Contoh", harga:35000, halal:"proses", desc:"Untuk pesanan acara.", img:"https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&q=80" },
];

const HERBA = [
  { nama:"Shake Nutrisi Contoh", harga:0, desc:"Harga via WA. Foto contoh, bukan foto produk asli.", img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80" },
  { nama:"Teh Herbal Contoh", harga:0, desc:"Harga via WA. Dosis disesuaikan kebutuhan.", img:"https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80" },
  { nama:"Aloe / Pendamping Contoh", harga:0, desc:"Harga via WA.", img:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80" },
];

function rupiah(n){ if(!n) return "Tanya via WA"; return "Rp " + n.toLocaleString("id-ID"); }
function waLink(nama){
  const t = encodeURIComponent("Halo D'Haura, saya mau tanya " + nama);
  return "https://wa.me/" + WA_NUMBER + "?text=" + t;
}
function card(p){
  const badge = p.halal === "resmi"
    ? '<span class="badge">Halal</span>'
    : (p.halal === "proses" ? '<span class="badge pending">Halal segera</span>' : '');
  return '<div class="card">' +
    '<img loading="lazy" src="' + p.img + '" alt="' + p.nama + '" onerror="this.style.display=\'none\'">' +
    '<div class="pad"><div class="name">' + p.nama + '</div>' +
    '<div class="price">' + rupiah(p.harga) + '</div>' +
    '<div class="desc">' + p.desc + '</div>' + badge +
    '<a class="btn order" target="_blank" rel="noopener" href="' + waLink(p.nama) + '">Tanya / Pesan</a>' +
    '</div></div>';
}
function renderPublic(){
  const kg = document.getElementById("kueGrid");
  const hg = document.getElementById("herbaGrid");
  if(kg) kg.innerHTML = KUE.map(card).join("");
  if(hg) hg.innerHTML = HERBA.map(card).join("");
  const wo = document.getElementById("waOrder");
  if(wo) wo.href = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent("Halo D'Haura, saya mau tanya-tanya dulu");
}
