<template>
    <div class="row">
        <div class="col s12"
        v-for="post in getInfoMessages"
        :key="post.id"
        >
          <div class="card hoverable blue-grey darken-1 pointer" @dblclick="hide_element">
            <div class="card-content white-text">
            <span class="card-title">{{post.title}}</span>
            <p>
            {{post.post}}
            </p>
            </div>
        </div>
        </div>
    </div> 
</template>

<script>
import {mapGetters} from "vuex"
export default {
    computed: mapGetters(["getInfoMessages"]),
    methods:{
    hide_element: function (event) {
      event.currentTarget.classList.add("hide");
    }
  }
}
</script>