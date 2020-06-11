<template>
  <div>
    <div class="page-title">
      <h3 class="hide-on-small-and-down">Профиль</h3>
      <button data-target="modal_chng_pass" class="btn modal-trigger right">Сменить пароль</button>
    </div>
 <div class="row">
   <div class="col s12 m6 l6 xl3">
     <img src="https://avatars.mds.yandex.net/get-pdb/921063/f744ffc7-3243-49f5-9d19-56be4c9f0699/s1200?webp=false" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
   </div>

    <div class="col s12 m6 l6 xl9 right">
      <ul class="collection with-header">
            <li class="collection-header"><h4>Личные данные</h4></li>
              <li class="collection-item">Имя: {{personalData[0].name}}</li>
              <li class="collection-item">Фамилия: {{personalData[0].surname}}</li>
              <li class="collection-item">Отчество: {{personalData[0].middname}}</li>
              <li class="collection-item">Возраст: {{personalData[0].age}}</li>
        </ul>
    </div>
    <!-- <div class="col s12">
        <ul class="collection with-header">
        <li class="collection-header"><h4>Аккаунт</h4></li>
          <li class="collection-item"><input type="text" name="login" id="login"><label for='login'>Логин</label></li>
          <li class="collection-item"><input type="password" name="password" id="password"><label for='password'>Пароль</label></li> 
        </ul>
    </div> -->

    </div>
      
    <PasswordChange />

  </div>
</template>

<script>
import PasswordChange from '@/components/PasswordChange.vue'
export default {
  computed: {
    personalData() {     
      return this.$store.getters.getPersData;    
    }
  },
  components: {
    PasswordChange
  }
}
</script>
  