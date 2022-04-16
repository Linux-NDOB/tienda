<template>
  <div>
    <h1 class="black white-text center-align">Edit Cart Item</h1>
    <form class="container col-4" v-on:submit.prevent="addPros">
      <div class="form-group">
        <div class="form-group">
          <label for="exampleInputEmail1">Id</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="id"
            v-model="object.id"
          />
        </div>

        <label for="exampleInputEmail1">Url</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Url"
          v-model="object.url"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Name"
          v-model="object.names"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Price </label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Price"
          v-model="object.price"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Amount</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Amount"
          v-model="object.amount"
        />
      </div>

      <div class="center-align">
        <button
          type="submit"
          class="btn black white-text"
          @click="addPros(object)"
        >
          Register Product
        </button>

        <router-link to="/admin" class="btn black white-text"
          >Go Back</router-link
        >
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddPros",
  data() {
    return {
      object: {},
    };
  },
  methods: {
    addPros: function (object) {
      this.$store.dispatch("ADD_PRODUCT", object);
      this.$router.push("/admin");
    },
    get: function () {
      fetch("http://localhost:3000/cart/" + this.$route.params.id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((respuesta) => respuesta.json())
        .then((datos) => {
          this.object = [];
          this.object = datos;
          console.log(datos.id);
        });
    },
  },
  mounted: function () {
    this.get();
  },
};
</script>

<style scoped lang="scss">
.btn {
  margin-left: 5%;
}
</style>