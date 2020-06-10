<template>
  <div>
      <div class="row">
        <div class="col s12">
          <div class="card hoverable blue-grey darken-1 pointer" @dblclick="hide_element">
            <div class="card-content white-text">
            <span class="card-title">Внимание!</span>
            <p>
            В рамках акции «Чистая сессия» организованы штаб и факультетские посты, работают телефоны доверия. Обо всех нарушениях Вы можете сообщить по указанным телефонам и в виртуальные приемные руководителя университета и подразделений.</p>
            </div>
            <!-- <div class="card-action">
            <a href="#">This is a link</a>
            <a href="#">This is a link</a>
            </div> -->
        </div>
        
        <div class="card hoverable blue-grey darken-1 pointer" @dblclick="hide_element">
          <div class="card-content white-text">
            <span class="card-title">Уважаемые студенты!</span>
            <p>
            Для уточнения Вашего статуса и получения информации о государственной поддержке в рамках программ реализуемых в регионах, Вы можете обратиться через интернет-ресурсы или явиться в организации, предоставляющие услуги (ЦОН, ЦЗН, отделения Казпочты) или акиму сельского округа.</p>
            </div>
            <!-- <div class="card-action">
            <a href="#">This is a link</a>
            <a href="#">This is a link</a>
            </div> -->
        </div>
        </div>
      </div> 

    <div>
      <ul class="collection with-header">
        <li class="collection-header"><h4>Информационные материалы</h4></li>
        <li class="collection-item"><div>Эдвайзер<router-link to="/adviserprofile" class="secondary-content"><i class="material-icons">send</i></router-link></div></li>
        <li class="collection-item"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
        <li class="collection-item"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
        <li class="collection-item"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  methods:{
    hide_element: function (event) {
      event.currentTarget.classList.add("hide");
    }
  }
}
</script>
