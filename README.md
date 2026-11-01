# D'Haura — web toko + halaman ibu

Contoh awal. Foto dan harga masih contoh dari internet, wajib diganti foto dan harga asli sebelum tayang.

Isi:
- `index.html` — katalog umum (kue + Herbalife), tombol pesan WA, info QRIS dan pesanan acara.
- `admin.html` — halaman internal, login contoh nur / 1234. Catat pelanggan berikut tanggal pesanannya, dashboard grafik + daftar perlu disapa, cadangan JSON.
- `app.js`, `style.css` — data contoh dan tampilan.

Yang harus diganti sebelum launching:
1. Nomor WA ibu di `app.js` (WA_NUMBER) dan `admin.html`.
2. Foto asli tiap kue, harga asli, dan status halal per kue.
3. Alamat dan jam buka di `index.html`.
4. PIN admin dan siapa yang boleh buka halaman ibu.

Catatan: `preview-katalog.html` adalah gabungan satu-berkas dari index + css + js untuk pratinjau cepat. Dibuat ulang dengan perintah di bawah setiap ada perubahan:
python3 -c "h=open('index.html').read();c=open('style.css').read();j=open('app.js').read();h=h.replace('<link rel=\"stylesheet\" href=\"style.css\">','<style>'+c+'</style>');h=h.replace('<script src=\"app.js\"></script>','<script>'+j+'</script>');open('preview-katalog.html','w').write(h)"
