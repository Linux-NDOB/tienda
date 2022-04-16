<template>
  <div>
    <h1 class="black white-text center-align">Edit User</h1>
    <form class="container col-4" v-on:submit.prevent="addPros">
      <div class="form-group">
      
        <label for="exampleInputEmail1">Id</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Url"
          v-model="object.id"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">UserName</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Name"
          v-model="object.username"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Price"
          v-model="object.email"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Amount"
          v-model="object.password"
        />
      </div>

      <div class="center-align">
        <button type="submit" class="btn black white-text" @click="addPros(object)">
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
       
      this.$store.dispatch("ADD_USER", object);
      this.$router.push("/admin");
    },get: function () {
      fetch("http://localhost:3000/users/" + this.$route.params.id, {
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