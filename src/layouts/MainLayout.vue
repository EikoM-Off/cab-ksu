<template>
<div>
  <header>
    <Header @OpenCloseMenuClick="isOpen = !isOpen" />
    <Sidebar v-model="isOpen" />
  </header>
  <main class="app-content" :class="{full: !isOpen}">
      <div class="app-page">
        <router-view />
      </div>
    </main>

<!--     <Footer /> -->
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
//import Footer from '@/components/Footer.vue'
export default {

  name: 'main-layout',
  data: () => ({
    isOpen: true
  }),
  components: {
    Header, Sidebar
    //, Footer
  }
}
</script>
