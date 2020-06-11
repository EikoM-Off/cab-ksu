<template>
    <div id="modal_chng_pass" class="modal" ref="modal">
    <div class="modal-content">
      <h4>Смена пароля</h4>
      <div class="row">
        <form class="col s12">
            <div class="row">
                <div class="col s12 m6">
                <div class="input-field">
                    <input v-model="password1" @change="validate" id="password1" type="password" class="validate">
                    <label class="active" for="password1">Новый пароль</label>
                </div>
                </div>
                <div class="col s12 m6">
                <div class="input-field">
                    <input v-model="password2" @change="validate" id="password2" type="password" class="validate">
                    <label for="password2">Повторите пароль</label>
                    <span v-if="showerror" class="helper-text">Пароли не совпадают</span>
                </div>
                </div>
            </div>

            <router-link to="/profile" @click="clear_inp" class="modal-close btn-flat right">Отмена</router-link>
            <button class="btn right" type="submit" v-if="!showerror && !emptyfield">Сменить</button>
            <button class="btn right" disabled type="submit" v-else>Сменить</button>

        </form>
      </div>
    </div>
  </div>
</template>


<script>
import M from 'materialize-css'
export default {
    data: () => ({
        password1: '',
        password2: '',
        showerror: false,
        emptyfield: true
    }),
    methods:{
        validate: function(){
            if(this.password1 === this.password2){
                this.showerror = false
                this.validate_empty()
            }else {
                this.showerror = true
            }
        },
        validate_empty: function(){
            if(this.password1 && this.password2){
                this.emptyfield = false
            }else {
                this.emptyfield = true
            }
        },
        clear_inp: function(){
            console.log("cleared")
            this.password1 = ''
            this.password2 = ''
        }
    },
  mounted() { 
        M.Modal.init(this.$refs.modal)
    }
}
</script>