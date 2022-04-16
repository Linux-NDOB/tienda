<template>
  <div class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          <div>
            <h2 class="black white-text center-align">Iniciar Sesión</h2>
            <h3 class="center-align">
              Si no tienes una cuenta también puedes
              <router-link to="/Registrarse"> Registrarte</router-link>
            </h3>

            <form @submit.prevent="enviar">
                <div class="form-group">
                <label for="text"> Id </label>
                <input type="text" v-model="user.id" />
                <span v-if="v$.user.id.$error">
                  {{ v$.user.id.$errors[0].$message }}
                </span>
              </div>

              <div class="form-group">
                <label for="email">Email</label>
                <input type="text" v-model="user.email" />
                <span v-if="v$.user.email.$error">
                  {{ v$.user.email.$errors[0].$message }}
                </span>
              </div>

              <div class="form-group">
                <label for="password">Contraseña</label>
                <input
                  type="password"
                  v-model="user.password"
                 
                />
                <span v-if="v$.user.password.$error">
                  {{ v$.user.password.$errors[0].$message }}
                </span>
              </div>
              
              <div class="form-group center-align">
                <button
                  class="btn btn-primary black white-text"
                  @click="enviar(); validar()"
                >
                  Log In
                </button>
                <router-link to="/" class="btn btn-primary black white-text"
                  >Ir al Home</router-link
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import {mapActions,mapGetters} from "vuex"
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  maxLength,
 
} from "@vuelidate/validators";
import Footer from "@/components/Footer.vue";

export default {
  name: "app",
  components: {
    Footer,
  },
  computed:{
    ...mapGetters({
      u : "users"
    })
  },
  data() {
    return {
      v$: useVuelidate(),
      user: {
        email: "",
        password: "",
        
        id: ''
      },
    };
  },
  validations: function () {
    return {
      user: {
        id: {required, minLength: minLength(1)},
        email: { required, email },
        password: {
          required,
          minLength: minLength(1),
          maxLength: maxLength(13),
        },
        
      },
    };
  },
  methods: {
    ...mapActions({
      get: "GET_USERS"
    }),
    enviar() {

    
      this.v$.$validate();

      if (!this.v$.$error) {
        
        console.log("ok");
        
      } else {
        console.log("no");
      }
    },
    validar(){
      let us = this.u
      let id = this.user.id
      console.log(us[id-1].id)

      us[id].id === id ?
      alert("ok") :
      alert("incorrect")
      
    }
  },
  mounted() {
    this.get()
  },
  
};
</script>

<style scoped lang="scss">
.btn {
  margin-right: 1%;
}

h2,
h3 {
  font-family: Lato;
}
</style>