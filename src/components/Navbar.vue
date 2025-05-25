<template>
  <div class="sidebar">
    <ul>
      <li><router-link to="/kegiatan" active-class="active-link">Daftar Kegiatan</router-link></li>
      <li><router-link to="/kegiatan/diikuti" active-class="active-link">Kegiatan Diikuti</router-link></li>
      <li><router-link to="/profil" active-class="active-link">Profil</router-link></li>
      <li><a href="#" @click.prevent="logout">Logout</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      alert('Kamu sudah logout');
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 220px;
  height: 100vh;
  background-color: #34495e;
  padding-top: 30px;
  position: fixed;
  left: 0;
  top: 0;
  box-shadow: 2px 0 6px rgba(0, 0, 0, 0.15);
}
.sidebar ul {
  list-style: none;
  padding: 0;
}
.sidebar li {
  margin-bottom: 20px;
  text-align: center;
}
.sidebar a {
  color: #ecf0f1;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  transition: color 0.3s ease;
}
.sidebar a:hover {
  color: #f39c12;
}
.active-link {
  color: #f39c12 !important;
}
</style>
