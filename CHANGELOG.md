# CHANGELOG d-haura

## 2026-11-02 — APK 0.2.0: perbaikan rilis & navigasi
- Tier: 1
- Backup: commit `9f3af68` (sebelum bump versi).
- Temuan: unggahan `--clobber` sebelumnya memakai nama aset berbeda (`app-debug.apk`),
  sehingga `DHaura-debug.apk` tetap APK lama. Itu sebab pengguna tidak melihat perubahan.
- Perubahan: hapus kedua aset lama, bump `versionCode 2` / `versionName 0.2.0`,
  build ulang, unggah ulang sebagai `DHaura-debug.apk`.
- Verifikasi: sha256 aset rilis `d6d3b21c…e07525` sama dengan hasil build; isi APK
  memuat `inset: 0 0 auto 0` di `assets/public/style.css` dan `nativeNav` di
  `index.html` + `admin.html`; workflow sukses pada commit `dc1f3fd`.
- Data pengguna terpengaruh: TIDAK.
- Rollback: `git revert dc1f3fd`, lalu build & unggah ulang.

## 2026-11-02 — APK-only navigation visibility fix
- Tier: 1
- Backup: `git` prior state at commit `5adea34`.
- Perubahan: tambah `apk-only.css`, hanya digabung ke `www/style.css` oleh workflow APK; tab Katalog/Admin dipaksa tampil fixed di atas dan area spacer tetap disediakan. Web (`style.css`, HTML publik) tidak disentuh oleh override APK.
- Verifikasi: akan diverifikasi dengan build GitHub Actions dan inspeksi hasil APK.
- Data pengguna terpengaruh: TIDAK.
- Rollback: `git revert <commit>`.

## 2026-11-02 — Data contoh Sheets + kerangka build APK
- Tier: 1 (kode) + data dummy baru di Sheet atas persetujuan user.
- Backup: Google Sheets disalin ke `1e7wcNC83DNGRBOIykotSBb64Fm4afmnz-sxDbJR7tNw`; kode sebelum perubahan di git commit `206b1ad`.
- Perubahan: buat folder Drive `D-HAURA`; buat Sheet dua tab `Pelanggan`/`Pesanan`, isi 12 pelanggan dan 41 pesanan dummy; tambah project Capacitor Android dan workflow GitHub Actions untuk APK debug.
- Menu admin diambil dari `KUE` dan `HERBA` pada katalog; ada input Lainnya.
- Verifikasi: Sheets API baca balik 13 baris Pelanggan (termasuk header) dan 42 baris Pesanan; `npx cap sync android` sukses; APK build menunggu workflow GitHub.
- Data pengguna terpengaruh: Sheet baru diisi data dummy atas permintaan, bukan data pelanggan nyata.
- Rollback: hapus data dummy tab `Pelanggan`/`Pesanan` setelah backup, atau pulihkan salinan Sheet di folder `BACKUP`.

## 2026-11-01 — Tayang di GitHub Pages
- Repo GitHub rhezka/d-haura, Pages aktif dari branch master.
- Alamat sementara tayang dan terverifikasi 200.

## 2026-11-01 — Login + tanggal pesanan + grafik
- Admin pakai login contoh nur / 1234, tiap pencatatan ada kolom tanggalnya.
- Dashboard ada grafik kunjungan 14 hari dan pelanggan per jenis.
- Pratinjau gabungan `preview-lengkap.html` bisa bolak-balik katalog dan admin.

## 2026-11-01 — Contoh pertama
- Katalog umum: 5 kue contoh + 3 produk Herbalife contoh, tombol WA, info QRIS dan pesanan acara.
- Halaman ibu: PIN sederhana, tambah pelanggan, catat kunjungan harian, dashboard (total, 7 hari, sepi 14 hari, kunjungan 30 hari), daftar perlu disapa, cadangan JSON.
- Semua foto dan harga masih contoh internet, belum untuk tayang.
