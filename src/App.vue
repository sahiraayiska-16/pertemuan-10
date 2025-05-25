<template>
  <div id="app" class="app-container">
    <Navbar v-if="!isLoginPage" />
    <div class="main-content" :class="{ 'with-sidebar': !isLoginPage }">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar
  },
  computed: {
    isLoginPage() {
      return this.$route.path === '/login' || this.$route.path === '/';
    }
  }
}
</script>

<style>
body {
  margin: 0;
  background-color: #fafafa;
}
.app-container {
  display: flex;
}
.main-content {
  flex: 1;
  padding: 30px;
  margin-left: 0;
  transition: margin-left 0.3s;
}
.with-sidebar {
  margin-left: 220px; 
}
</style>
