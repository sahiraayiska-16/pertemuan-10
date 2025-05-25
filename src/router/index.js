import { createRouter, createWebHistory } from 'vue-router';

import Login from '../components/Login.vue';
import DaftarKegiatan from '../components/DaftarKegiatan.vue';
import KegiatanDiikuti from '../components/KegiatanDiikuti.vue';
import Profil from '../components/Profil.vue';


const Registrasi = () => import('../components/Registrasi.vue');

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/kegiatan', component: DaftarKegiatan },
  { path: '/kegiatan/diikuti', component: KegiatanDiikuti },
  { path: '/profil', component: Profil },

 
  {
    path: '/registrasi',
    name: 'Registrasi',
    component: Registrasi
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;