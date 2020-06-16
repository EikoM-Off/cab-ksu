<template>
  <div>
    <div class="page-title">
      <h3>Эдвайзер</h3>
    </div>
<div class="row">
  <div class="col s12 m6 l6 xl3">
     <img src="https://i.pinimg.com/736x/d6/5d/50/d65d503aaf75524213da7db5c6d6f173.jpg" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
   </div>

  <div class="col s12 m6 l6 xl9 right">
  <ul class="collection">
      <li class="collection-item"><b>Ф.И.О. эдвайзера:</b>  {{getadviser_personal_data[0].surname}} {{getadviser_personal_data[0].name}} {{getadviser_personal_data[0].middname}}</li>
      <li class="collection-item"><b>Должность:</b>  {{getadviser_personal_data[0].position}} </li>
      <li class="collection-item"><b>Факультет:</b>  {{getadviser_personal_data[0].faculty}}</li>
      <li class="collection-item"><b>Кафедра:</b>  {{getadviser_personal_data[0].department}}</li>
      <li class="collection-item"><b>Телефон:</b>  {{getadviser_personal_data[0].phone}}</li>
      <li class="collection-item"><b>Тел.мобильный:</b>  {{getadviser_personal_data[0].mobile_phone}}</li>
      <li class="collection-item"><b>Адрес электронной почты:</b>  {{getadviser_personal_data[0].email}}</li>
    </ul>
  </div>
</div>
    <table class="striped">
        <thead>
          <tr>
              <th>Факультет</th>
              <th>Курс</th>
              <th>Номер группы</th>
              <th>Шифр - Специальность</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="group in get_adviser_groups_data" :key="group.id">
            <td>{{group.faculty}}</td>
            <td>{{group.course}}</td>
            <td>{{group.study_group}}</td>
            <td>{{group.specialty}}</td>
          </tr>
        </tbody>
      </table>

  </div>
</template>


<script>
import {mapGetters} from "vuex"
export default {
 computed: mapGetters(["getadviser_personal_data", "get_adviser_groups_data"])
}
</script>