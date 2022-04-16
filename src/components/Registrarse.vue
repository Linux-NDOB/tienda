<template>
  <div class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          <div>
            <h2 class="black white-text center-align">Registrarse</h2>
            <h3 class="center-align">
              Si ya tienes una cuenta también puedes
              <router-link to="/Iniciar"> Iniciar Sesión </router-link>
            </h3>

            <form @submit.prevent="enviar">
                <div class="form-group">
                <label for="text">Nombre de Usuario</label>
                <input type="text" v-model="user.username" />
                <span v-if="v$.user.username.$error">
                  {{ v$.user.username.$errors[0].$message }}
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
              <div class="form-group">
                <label for="confirmPassword">Confirmar Contraseña</label>
                <input
                  type="password"
                  v-model="user.confirmPassword"
                  
                />
                <span v-if="v$.user.confirmPassword.$error">
                  {{ v$.user.confirmPassword.$errors[0].$message }}
                </span>
              </div>
              <div class="form-group center-align">
                <button
                  class="btn btn-primary black white-text"
                  @click="enviar"
                >
                  Registrarse
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
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  maxLength,
  sameAs,
} from "@vuelidate/validators";
import Footer from "@/components/Footer.vue";

export default {
  name: "app",
  components: {
    Footer,
  },
  data() {
    return {
      v$: useVuelidate(),
      user: {
        email: "",
        password: "",
        confirmPassword: "",
        username: ''
      },
    };
  },
  validations: function () {
    return {
      user: {
        username: {required, minLength: minLength(6)},
        email: { required, email },
        password: {
          required,
          minLength: minLength(6),
          maxLength: maxLength(13),
        },
        confirmPassword: { required, sameAs: sameAs(this.user.password) },
      },
    };
  },
  methods: {
    enviar() {
    
      this.v$.$validate();
      !this.v$.$error ? this.$store.dispatch("ADD_USER", this.user) : M.toast({html: 'Imposible Registrar' , classes: 'rounded'})
    },
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