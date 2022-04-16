<template>
  <div class="">
    <h3 class="black white-text center-align">User Options</h3>
    <div class="center-align">
      <h4 class="black white-text">User info</h4>
      <h4>User Id</h4>
      <p>{{ u.id }}</p>
      <h4>User Name</h4>
      <p>{{ u.username }}</p>
      <h4>Email</h4>
      <p>{{ u.email }}</p>
      <h4>Password</h4>
      <p>{{ u.password }}</p>

      <div class="center-align">
        <router-link to="/addus" class="btn black white-text center-align"
          >Add User</router-link
        >
        <button
          class="btn black white-text center-align"
          @click="deletes(u.id)"
        >
          Delete User
        </button>
        <router-link
          :to="/editus/ + u.id"
          class="btn black white-text center-align"
          >Edit User</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "USERINFO",
  data() {
    return {
      u: [],
    };
  },
  computed: {
    ...mapGetters({
      users: "users",
    }),
  },
  methods: {
    ...mapActions({
      get: "GET_USERS",
    }),
    getId: async function () {
      const res = await fetch(
        "http://localhost:3000/users/" + this.$route.params.id
      );

      const us = await res.json();

      this.u = us;

      console.log(us);
    },
    deletes: function (id) {
      this.$store.dispatch("DELETE_USER", id);
    },
  },
  mounted() {
    this.get();
    this.getId();
  },
};
</script>

<style lang="scss" scoped>
.btn {
  margin-right: 1%;
}
</style>