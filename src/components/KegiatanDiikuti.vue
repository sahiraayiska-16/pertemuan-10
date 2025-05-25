<template>
  <div class="container">
    <h2>Kegiatan yang Diikuti</h2>
    <ul class="kegiatan-list">
      <li v-for="kegiatan in kegiatanDiikuti" :key="kegiatan.id" class="kegiatan-item">
        <div>
          <h3>{{ kegiatan.nama }}</h3>
          <p>Tanggal: {{ kegiatan.tanggal }}</p>
        </div>
      </li>
      <li v-if="kegiatanDiikuti.length === 0" class="kegiatan-item">
        Kamu belum mendaftar kegiatan apapun.
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kegiatanDiikuti: []
    };
  },
  created() {
    
    const data = localStorage.getItem('kegiatanDiikuti');
    this.kegiatanDiikuti = data ? JSON.parse(data) : [];
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
  margin-bottom: 20px;
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
  color: #34495e;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}
.kegiatan-item h3 {
  margin: 0 0 5px 0;
}
.kegiatan-item p {
  margin: 0;
  color: #7f8c8d;
}
</style>
