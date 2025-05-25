<template>
  <div class="container">
    <h2>Profil Mahasiswa</h2>
    <div class="profil-info">
      <p><strong>Nama:</strong> {{ username }}</p>
      <p><strong>Email:</strong> {{ email }}</p>
      <p><strong>NIM:</strong> {{ nim }}</p>
      <p><strong>Program Studi:</strong> {{ prodi }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      nim: '',
      prodi: '',
    }
  },
  created() {
    this.username = localStorage.getItem('username') || 'Belum login';
    this.email = localStorage.getItem('email') || 'Belum login';
    this.nim = localStorage.getItem('nim') || 'Belum login';
    this.prodi = localStorage.getItem('prodi') || 'Belum login';
  }
}
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: 40px auto;
  padding: 20px 30px;
  background-color: #f7f9fc;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.12);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #34495e;
}
h2 {
  text-align: center;
  margin-bottom: 25px;
}
.profil-info p {
  font-size: 18px;
  margin: 12px 0;
}
.profil-info strong {
  color: #f39c12;
}
</style>

