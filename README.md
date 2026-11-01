# D'Haura — web toko + halaman ibu

Tayang sementara di GitHub Pages (sebelum domain d-haura.my.id diarahkan).
Ganti foto, nama, harga, dan nomor WA dengan data asli bila sudah siap.

## APK Android

Project Capacitor disiapkan dengan workflow GitHub Actions `Build Android APK`.
Jalankan workflow manual dari tab Actions; file APK debug akan tersedia sebagai
artifact `dhaura-debug-apk` setelah build selesai.

## Google Sheets

- Folder Drive `D-HAURA` berisi Sheet `D-HAURA — Database Pelanggan dan Pesanan`.
- Tab `Pelanggan` dan `Pesanan`; berisi 12 pelanggan dan 41 pesanan DEMO.
- Contoh tersebut hanya data dummy untuk melihat dashboard, boleh dihapus saat
  mulai memakai data sungguhan.
- APK saat ini belum tersinkron ke Sheet; integrasi butuh endpoint Apps Script
  dan autentikasi sebelum data dapat dipakai bersama lintas perangkat.

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
