<template>
  <div class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          <div>
            <h2 class="black white-text center-align">ROOT LOGIN</h2>
            <h3 class="center-align">JUST REGISTERED USERS CAN ACCES</h3>

            <form @submit.prevent="send">
              <div class="form-group">
                <label for="text">USERNAME</label>
                <input type="text" v-model="user.username" />
                <span v-if="v$.user.username.$error">
                  {{ v$.user.username.$errors[0].$message }}
                </span>
              </div>

              <div class="form-group">
                <label for="email">EMAIL</label>
                <input type="text" v-model="user.email" />
                <span v-if="v$.user.email.$error">
                  {{ v$.user.email.$errors[0].$message }}
                </span>
              </div>

              <div class="form-group">
                <label for="password">PASSWORD</label>
                <input type="password" v-model="user.password" />
                <span v-if="v$.user.password.$error">
                  {{ v$.user.password.$errors[0].$message }}
                </span>
              </div>

              <br />

              <div class="form-group center-align">
                <button
                  class="btn btn-primary black white-text"
                  @click="authenticate(user)"
                >
                  LOG IN AS ROOT
                </button>
                <router-link to="/" class="btn btn-primary black white-text"
                  >GO HOME</router-link
                >
              </div>
            </form>

            <br />

            <br />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
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
  computed: {
    ...mapGetters({
      root: "root",
    }),
  },
  data() {
    return {
      v$: useVuelidate(),
      user: {
        email: "",
        password: "",
        username: "",
      },
    };
  },
  validations: function () {
    return {
      user: {
        username: { required, minLength: minLength(1) },
        email: { required, email },
        password: {
          required,
          minLength: minLength(1),
          maxLength: maxLength(13),
        },
      },
    };
  },
  //this.$store.dispatch("ADD_USER", this.user)
  methods: {
    ...mapActions({
      fetchRoot: "GET_ROOT",
    }),
    send() {
      this.v$.$validate();
      !this.v$.$error
        ? console.log("validations ok")
        : M.toast({ html: "Imposible Registrar", classes: "rounded" });
    },
    authenticate: function () {
      let data = [];
      data = this.root;
      console.log(data[0].email)
      data[0].id === 1 &&
      data[0].username === "root" &&
      data[0].password === "root" &&
      data[0].email === "root@gmail.com"
        ? this.$router.push("/admin")
        :  M.toast({ html: "Invalid data", classes: "rounded" });
    },
  },
  mounted: function () {
    this.fetchRoot();
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