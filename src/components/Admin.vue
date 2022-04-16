<template>
  <h2 class="center-align black white-text">Resources Admin</h2>

  <div>
    <h2 class="white-text purple darken 4 center-align">As Admin you can</h2>

    <div class="center-align">
      <router-link to="/addpros" class="purple white-text btn"
        >Add Products</router-link
      >
      <router-link to="/addus" class="purple white-text btn"
        >Add Users</router-link
      >
      <router-link to="/addcar" class="purple white-text btn"
        >Add Cart</router-link
      >
    </div>
    <br />
    <h3 class="black white-text center-align">Manage Products</h3>
    <br />

    <div class="center-align">
      <button class="btn purple white-text" @click="showP">
        Hide Products
      </button>
    </div>

    <div class="row" v-show="!P">
      <div v-for="el of p" :key="el.id" class="col s4">
        <div class="card row">
          <div
            class="card-image waves-effect waves-block waves-light"
            :class="{ invisible: !value1 }"
          >
            <img class="activator" :src="el.url" />
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4"
              >{{ el.name }}<i class="material-icons right">more_vert</i></span
            >
            <p>
              <a href="#">{{ el.price }}</a>
            </p>
            <div class="card-action center-align">
              <router-link
                :to="{ name: 'editpros', params: { id: el.id } }"
                
                >EDIT</router-link
              >
              <a href="#" @click="deleteP(el.id)">DELETE</a>
            </div>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4"
              >Card Title<i class="material-icons right">close</i></span
            >
            <p>
              Here is some more information about this product that is only
              revealed once clicked on.
            </p>
          </div>
        </div>
      </div>
    </div>

    <br />

    <h3 class="black white-text center-align">Manage Cart</h3>
    <br />

    <div class="center-align">
      <button class="btn purple white-text" @click="showC">
        Hide Products
      </button>
    </div>

    <div class="row" v-show="!C">
      <div v-for="el of c" :key="el.id" class="col s4">
        <div class="card row">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" :src="el.url" />
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4"
              >{{ el.names }}<i class="material-icons right">more_vert</i></span
            >
            <p>
              <a href="#">{{ el.price }}</a>
            </p>
            <div class="card-action center-align">
              <router-link
                :to="{ name: 'editcar', params: { id: el.id } }"
               
                >EDIT</router-link
              >
              <a href="#" @click="deleteC(el.id)">DELETE</a>
            </div>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4"
              >Card Title<i class="material-icons right">close</i></span
            >
            <p>
              Here is some more information about this product that is only
              revealed once clicked on.
            </p>
          </div>
        </div>
      </div>
    </div>
    <br />

    <h3 class="black white-text center-align">Manage Users</h3>
    <br />

    <div class="center-align">
      <button class="btn purple white-text" @click="showU">
        Hide Products
      </button>
    </div>

    <div class="row" v-show="!U">
      <div v-for="el of u" :key="el.id" class="col s4">
        <div class="card row">
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4"
              >{{ el.username
              }}<i class="material-icons right">more_vert</i></span
            >
            <p>
              <a href="#">{{ el.email }}</a>
            </p>
            <p>
              <a href="#">{{ el.password }}</a>
            </p>
            <div class="card-action center-align">
              <router-link
                :to="{ name: 'editus', params: { id: el.id } }"
                
                >EDIT</router-link
              >
              <a href="#" @click="deleteU(el.id)">DELETE</a>
            </div>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4"
              >Card Title<i class="material-icons right">close</i></span
            >
            <p>
              Here is some more information about this product that is only
              revealed once clicked on.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>



<script>
import Footer from "@/components/Footer.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { Footer },
  name: "ResourcesManager",
  data() {
    return {
      text: "Show Products",
      text2: "Show Products",
      text3: "Show Products",
      P: false,
      C: false,
      U: false,
    };
  },
  computed: {
    ...mapGetters({
      p: "products",
      c: "cart",
      u: "users",
    }),
  },
  methods: {
    ...mapActions({
      fetchP: "GET_PRODUCTS",
      fetchC: "GET_CART",
      fetchU: "GET_USERS",
    }),
    showP() {
      this.P = false ? this.P === true : this.P === false;
    },
    showC() {
      this.C = false ? this.C === true : this.C === false;
    },
    showU() {
      this.U = false ? this.U === true : this.U === false;
    },

    deleteP(id) {
      this.$store.dispatch("DELETE_PRODUCT", id);
      M.toast({ html: "DELETED" });
    },
    deleteC(id) {
      this.$store.dispatch("DELETE_CART", id);
      M.toast({ html: "DELETED" });
    },
    deleteU(id) {
      this.$store.dispatch("DELETE_USER", id);
      M.toast({ html: "DELETED" });
    },
  },
  mounted() {
    this.fetchP();
    this.fetchC();
    this.fetchU();
  },
};
</script>

<style lang="scss" scoped>
a {
  margin-right: 2%;
}
.divv {
  margin-right: 0.1%;
}

button {
  margin-left: 1%;
}
</style>