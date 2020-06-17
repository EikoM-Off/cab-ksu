<template>
  <div>
    <table class="centered striped responsive-table">
        <thead>
          <tr>
              <th>N</th>
              <th>Тип дис.</th>
              <th>Цикл дис.</th>
              <th>Наименование дисциплины (Ф.И.О. лектора)</th>
              <th>Кол кред</th>
              <th>Форма контроля</th>
              <th>Аттестация</th>
              <th>Результаты экзаменов</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(post, index) in getSemesters" :key="post.id">
            <td>{{index+1}}</td>
            <td>{{post.discipline_type}}</td>
            <td>{{post.discipline_cycle}}</td>
            <td>{{post.name}}</td>
            <td>{{post.credit}}</td>
            <td>{{post.control_form}}</td>
            <td>{{post.attestations}}</td>
            <td>{{post.date}} {{post.mark}} {{post.coefficient}}</td>
            
          </tr>
        </tbody>
      </table>

  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  computed: mapGetters(["getSemesters"]),
}
</script>