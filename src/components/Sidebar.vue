<template>
  <ul class="sidenav app-sidenav" :class="{open: value}">

    <router-link
      v-for="link in links"
      :key="link.url"
      tag="li"
      active-class="active"
      :to="link.url"
      :exact="link.exact"
    >
      <a href="#" class="waves-effect waves-light pointer">{{link.title}}<i class="material-icons">{{link.ico}}</i></a>
    </router-link>
  </ul>
</template>

<script>
export default {
  props: ['value'],
  data: () => ({
    links: [
      {title: 'Информация', url: '/', ico: 'info_outline', exact: true},
      {title: 'Зачетка', url: '/recordbook', ico: 'chrome_reader_mode'},
      {title: 'Личные данные', url: '/personal', ico: 'account_circle'},
      {title: 'ИУП', url: '/iyp', ico: 'assignment'},
      {title: 'Оплата', url: '/pay', ico: 'payment'},
      {title: 'E-Обходной', url: '/obhodnoy', ico: 'format_list_numbered'}
    ]
  })
}
</script>