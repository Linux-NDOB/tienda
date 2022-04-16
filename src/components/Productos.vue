<template>
  <div class="row">
    <div class="fixed-action-btn">
      <router-link to="/carrito"
        ><a class="btn-floating btn-large waves-effect waves-light black"
          ><i class="material-icons">shopping_cart</i></a
        ></router-link
      >
    </div>
    <div class="center-align">
      <img
        class="banner-img"
        src="https://cdn.pixabay.com/photo/2015/09/09/22/01/steak-933667_960_720.jpg"
        alt=""
      />
      <h2 class="black white-text center-align">Elije lo que quieras</h2>
    </div>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quod
      tenetur ipsa debitis perspiciatis eum sed sint, impedit nam saepe, quo
      nihil explicabo eligendi autem, tempore modi nesciunt? Quas, nemo! Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Facere possimus
      ducimus, consequatur animi perspiciatis dolorem sit magnam! Commodi unde
      dicta qui neque assumenda, dolores est vel rerum dolor, ipsam numquam!
    </p>

    <div v-for="el of vector" :key="el.id">
      <span style="display: none"
        >{{ el.id }} {{ el.price }} {{ el.amount }}</span
      >
      <div class="col s12 m6">
        <div class="card">
          <div class="card-image">
            <img :src="el.url" class="image" />
            <span class="card-title">{{ el.name }}</span>
          </div>
          <div class="card-content">
            <p>Precio: {{ el.price }}</p>
          </div>
          <div class="card-action center-align">
            <button
              class="btn black white-text"
              @click="send(el.id, el.url, el.name, el.price, el.amount)"
              onclick="M.toast({html: 'Agregado al carrito' , classes: 'rounded'})"
            >
              Agregar al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Footer from "@/components/Footer.vue";

export default {
  
  name: "ProductPage",
  components:{
    Footer
  },
  computed: {
    ...mapGetters({
      vector: "products",
    }),
  },
  methods: {
    ...mapActions({
      get: "GET_PRODUCTS",
    }),

    tryes: async function (id) {
      let ans = await fetch("http://localhost:3000/cart/" + id);
      let json = await ans.json();
      let amount = json.amount;

      let sendd = await fetch("http://localhost:3000/cart/" + id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amount + 1,
        }),
      });
    },
    send: async function (id, url, names, price, amount) {
      let res = await fetch("http://localhost:3000/cart");
      let json = await res.json();

      let temp = {
        id,
        url,
        names,
        price,
        amount,
      };

      let add = () => {
        this.$store.dispatch("ADD_CART", temp);
        this.tryes(id);
      };
      let increase = () => {
        json.find((el) => {
          if (el.id === id) {
            this.tryes(id);
          } else {
            add();
          }
        });
      };

      json.length === 0 ? add() : increase();
    },
  },

  mounted() {
    this.get();
  },
};
</script>

<style lang="scss" scoped>
.banner-img {
  width: 100%;
}
h2 {
  font-family: "Lato";
}
</style>