<template>
  <div class="login-container">
    <h2>Login Mahasiswa</h2>
    <form @submit.prevent="login" autocomplete="on">
      <input
        v-model="username"
        placeholder="Masukkan Nama"
        autocomplete="name"
        required
      />
      <input
        v-model="email"
        placeholder="Masukkan Email"
        type="email"
        autocomplete="email"
        required
      />
      <input
        v-model="nim"
        placeholder="Masukkan NIM"
        autocomplete="off"
        required
      />
      <input
        v-model="prodi"
        placeholder="Masukkan Program Studi"
        autocomplete="organization"
        required
      />
      <button type="submit">Login</button>
    </form>
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
  methods: {
    login() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.email)) {
        alert('Format email tidak valid!');
        return;
      }

      // Hapus data pengguna sebelumnya
      localStorage.removeItem('username');
      localStorage.removeItem('email');
      localStorage.removeItem('nim');
      localStorage.removeItem('prodi');
      localStorage.removeItem('kegiatanDiikuti'); // <- ini kuncinya

      // Simpan data pengguna baru
      localStorage.setItem('username', this.username);
      localStorage.setItem('email', this.email);
      localStorage.setItem('nim', this.nim);
      localStorage.setItem('prodi', this.prodi);

      this.$router.push('/kegiatan');
    }
  }
}
</script>

<style scoped>
.login-container {
  max-width: 350px;
  margin: 60px auto;
  padding: 30px 40px;
  background-color: #f7f9fc;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border-radius: 10px;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
h2 {
  margin-bottom: 20px;
  color: #34495e;
}
input {
  width: 100%;
  padding: 12px 15px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 7px;
  font-size: 16px;
  transition: border-color 0.3s;
}
input:focus {
  border-color: #f39c12;
  outline: none;
}
button {
  background-color: #f39c12;
  border: none;
  padding: 12px 20px;
  width: 100%;
  border-radius: 7px;
  color: white;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}
button:hover {
  background-color: #d87e0c;
}
</style>
