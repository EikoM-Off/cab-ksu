<template>
<div>
    <Header @OpenCloseMenuClick="isOpen = !isOpen" />
    <Sidebar v-model="isOpen" />
    <router-view />
</div>

</template>

<script>
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
export default {

  name: 'main-layout',
  data: () => ({
    isOpen: true
  }),
  components: {
    Header, Sidebar
  }
}
</script>
