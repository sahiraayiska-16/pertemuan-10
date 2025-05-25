<template>
  <div class="container">
    <h2>Daftar Kegiatan Kampus</h2>
    <ul class="kegiatan-list">
      <li v-for="kegiatan in kegiatanList" :key="kegiatan.id" class="kegiatan-item">
        <div>
          <h3>{{ kegiatan.nama }}</h3>
          <p>Tanggal: {{ kegiatan.tanggal }}</p>
          <p>Gedung: {{ kegiatan.gedung }}</p>
          <p>Ruangan: {{ kegiatan.ruangan }}</p>
          <p>Jam: {{ kegiatan.jam }}</p>
        </div>
        <button @click="daftar(kegiatan.id)">Daftar</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kegiatanList: [
        { 
          id: 1, 
          nama: 'Kuliah Umum', 
          tanggal: '25 Juni 2025', 
          gedung: 'Gedung A', 
          ruangan: 'Aula Teknik', 
          jam: '09:00 - 12:00' 
        },
        { 
          id: 2, 
          nama: 'Seminar Beasiswa Unggulan', 
          tanggal: '28 Juni 2025', 
          gedung: 'Gedung PKM', 
          ruangan: 'Aula PKM', 
          jam: '13:00 - 16:00' 
        },
      ],
    };
  },
  methods: {
    daftar(id) {
      this.$router.push({ name: 'Registrasi', query: { kegiatanId: id } });
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 700px;
  margin: 40px auto;
  padding: 0 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
h2 {
  color: #2c3e50;
  margin-bottom: 25px;
  text-align: center;
}
.kegiatan-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.kegiatan-item {
  background-color: #ecf0f1;
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 20px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  transition: box-shadow 0.3s ease;
}
.kegiatan-item:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
.kegiatan-item h3 {
  margin: 0 0 5px 0;
  color: #34495e;
}
.kegiatan-item p {
  margin: 4px 0;
  color: #7f8c8d;
}
button {
  background-color: #27ae60;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 18px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: #1e8449;
}
</style>
