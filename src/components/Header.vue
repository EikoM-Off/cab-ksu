<template>
  <nav class="navbar blue-grey darken-4">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="$emit('OpenCloseMenuClick')">
          <i class="material-icons white-text">format_list_bulleted</i>
        </a>
        <span class="white-text hide-on-small-and-down">Личный кабинет учащегося КГУ им. А.Байтурсынова</span>
      </div>

      <ul class="right">
        <li>
          <a
              class="dropdown-trigger white-text"
              href="#"
              data-target="dropdown"
              ref="dropdown"
          >
            {{personalData[0].name}} {{personalData[0].surname}}
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id='dropdown' class='dropdown-content'>
            <li>
              <router-link to="/profile" class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <router-link to="/login" class="black-text">
                <i class="material-icons">assignment_return</i>Выйти
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>


<script>
import M from 'materialize-css'
export default {
  computed: {
    personalData() {     
      return this.$store.getters.getPersData;    
    }
  } ,
    mounted() { 
        M.Dropdown.init(this.$refs.dropdown, {
          coverTrigger: false
        })
    }
}
</script>
