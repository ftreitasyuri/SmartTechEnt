import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Contact from '@/views/Contact.vue';
import DevWeb from '@/views/DevWeb.vue';
import DevAutomate from '@/views/DevAutomate.vue';
import DevBi from '@/views/DevBi.vue';
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/devweb', name: 'DevWeb', component: DevWeb },
  { path: '/devautomate', name: 'DevAutomate', component: DevAutomate },
  { path: '/devbi', name: 'DevBi', component: DevBi },
  
];

const router = createRouter({
  history: createWebHashHistory('/SiteSmartTechEnterprise/'),
  routes,
});

export default router;
