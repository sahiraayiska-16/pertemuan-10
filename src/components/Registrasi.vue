<template>
  <div class="container">
    <h2>Registrasi Mahasiswa</h2>
    <input v-model="nama" placeholder="Masukkan Nama Lengkap" />
    <input v-model="email" placeholder="Masukkan Email" />
    <button @click="kirim">Kirim</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nama: '',
      email: '',
    };
  },
  methods: {
    kirim() {
      if (!this.nama || !this.email) {
        alert('Nama dan email harus diisi!');
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.email)) {
        alert('Email tidak valid!');
        return;
      }

      const kegiatanId = parseInt(this.$route.query.kegiatanId);
      const kegiatanList = [
        { id: 1, nama: 'Kuliah Umum', tanggal: '25 Juni 2025' },
        { id: 2, nama: 'Seminar Beasiswa Unggulan', tanggal: '28 Juni 2025' },
      ];

      const kegiatan = kegiatanList.find(k => k.id === kegiatanId);
      if (kegiatan) {
        let data = JSON.parse(localStorage.getItem('kegiatanDiikuti')) || [];
        const sudahAda = data.some(item => item.id === kegiatanId);
        if (!sudahAda) {
          data.push(kegiatan);
          localStorage.setItem('kegiatanDiikuti', JSON.stringify(data));
        }
      }

      alert('Registrasi berhasil!');
      this.$router.push('/kegiatan/diikuti');
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 700px;
  margin: 40px auto;
  padding: 30px 20px;
  background: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
}
input {
  display: block;
  width: 100%;
  padding: 10px;
  margin: 15px 0;
  border-radius: 6px;
  border: 1px solid #ccc;
}
button {
  padding: 10px 20px;
  background: #27ae60;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;
}
button:hover {
  background: #1e8449;
}
</style>
