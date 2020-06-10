<template>
  <div>
    <div class="page-title">
      <h3>Профиль</h3>
    </div>
 <div class="row">
   <div class="col s12 m6">
          <ul class="collection with-header">
            <li class="collection-header"><h4>Личные данные</h4></li>
              <li class="collection-item">Имя: {{personalData[0].name}}</li>
              <li class="collection-item">Фамилия: {{personalData[0].surname}}</li>
              <li class="collection-item">Отчество: {{personalData[0].middname}}</li>
              <li class="collection-item">Возраст: {{personalData[0].age}}</li>
            </ul>
   </div>

    <div class="col s12 m6">
      <ul class="collection with-header">
        <li class="collection-header"><h4>Аккаунт</h4></li>
          <li class="collection-item"><input type="text" name="login" id="login"><label for='login'>Логин</label></li>
          <li class="collection-item"><input type="password" name="password" id="password"><label for='password'>Пароль</label></li> 
        </ul>
    </div>
    </div>
 </div>
</template>

<script>
export default {
  computed: {
    personalData() {     
      return this.$store.getters.getPersData;    
    }
  }
}
</script>
  