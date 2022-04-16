<template>
  <div class="row center-align">
    <h3 class="black white-text center-align">Carrito de Compras</h3>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse at vel
      veniam, quo accusamus voluptate cumque dolorum distinctio fuga laborum
      magnam, eius ullam nemo praesentium laudantium? Eveniet modi quae
      voluptatibus.
    </p>
    <h4 v-if="cart.length === 0">Carrito Vacio</h4>
    <div>
      <router-link to="/productos"
        ><a href="!#" class="btn black white-text center-align"
          >Volver</a
        ></router-link
      >
    </div>

    <div class="white">
      <div v-for="el of cart" :key="el.id" class="white">
        <div class="col s12 m6">
          <div class="card">
            <div class="card-image">
              <img :src="el.url" class="image" />
              <span class="card-title">{{ el.names }}</span>
            </div>
            <div class="card-content">
              <p>Precio: {{ el.price }}</p>
              <p>En el carrito: {{ el.amount }}</p>
            </div>
            <div class="card-action center-align">
              <button class="btn black white-text" @click="vaciar(el.id)">
                Elimninar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    
     
   
  </div>
   <Footer />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Footer from "@/components/Footer.vue";

export default {
  name: "ProductPage",
  components: {
    Footer,
  },
  computed: {
    ...mapGetters({
      cart: "cart",
    }),
  },
  methods: {
    ...mapActions({
      get: "GET_CART",
    }),
    vaciar: function (id) {
      this.$store.dispatch("DELETE_CART", id)
      router.push("/carrito");
    },
  },

  mounted() {
    this.get();
  },
};
</script>