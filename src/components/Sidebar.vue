<template>
<aside>
 <ul id="slide-out" class="sidenav" :class="{open: value}">
      <li><a href="#!">First Sidebar Link</a></li>
      <li><a href="#!">Second Sidebar Link</a></li>
    </ul>
</aside>
</template>

<script>
import M from 'materialize-css'
export default {
    props: ['value'],
    mounted() { 
        M.Sidenav.init(this.$refs.slide,{
            menuWidth: 300, // Default is 300
            edge: 'left', // Choose the horizontal origin
            closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true // Choose whether you can drag to open on touch screens
    })
    }
}
</script>