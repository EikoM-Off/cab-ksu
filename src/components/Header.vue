<template>
<header>
<!-- Dropdown Structure -->
<ul id="dropdown1" class="dropdown-content">
  <li><a href="#!">one</a></li>
  <li><a href="#!">two</a></li>
  <li class="divider"></li>
  <li><a href="#!">three</a></li>
</ul>
<nav>
  <div class="light-blue darken-3 nav-wrapper">
    <button class="btn" @click.prevent="OpenCloseMenuClick" >menu</button>
    <a href="#!" class="brand-logo">Logo</a>
    <ul class="right hide-on-med-and-down">
      <li><a href="sass.html">Sass</a></li>
      <li><a href="badges.html">Components</a></li>
      <!-- Dropdown Trigger -->
      <li><a class="dropdown-trigger" href="#!" data-target="dropdown1" ref="dropdown">Dropdown<i class="material-icons right">arrow_drop_down</i></a></li>
    </ul>
  </div>
</nav>
</header>
</template>


<script>
import M from 'materialize-css'
export default {
    mounted() { 
        M.Dropdown.init(this.$refs.dropdown, {
          coverTrigger: false
        })
    }
}
</script>
