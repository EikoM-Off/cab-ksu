<template>
    <div class="collection">
        <h5 class="center-align">Информационные материалы</h5>
        <router-link
        class="collection-item black-text darken-4"
        v-for="link in links"
        :key="link.url"
        :to="link.url"
        >{{link.title}} <i class="material-icons teal-text lighten-2 right">send</i></router-link>
    </div>
</template>

<script>
export default {
    data: () => ({
    links: [
      {title: 'Эдвайзер', url: '/adviserprofile'},
      {title: 'Учебный план', url: '#!'},
      {title: 'Заказ справки, транскрипта', url: '#!'},
      {title: 'Академический календарь', url: '#!'},
    ]
  }),
}
</script>