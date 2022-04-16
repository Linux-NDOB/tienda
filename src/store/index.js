"use strict";
import router from "@/router";
import { createStore } from "vuex";
// storeKey
export default createStore({
  state: {
    users: [],
    products: [],
    cart: [],
    root: [],
  },
  getters: {
    users: (state) => state.users,
    products: (state) => state.products,
    cart: (state) => state.cart,
    root: (state) => state.root,
  },
  actions: {
    GET_ROOT: async function ({ commit }) {
      const res = await fetch("http://localhost:3000/root");

      const root = await res.json();

      commit("SET_ROOT", root);
    },
    GET_USERS: async function ({ commit }) {
      const res = await fetch("http://localhost:3000/users");

      const users = await res.json();

      commit("SET_USERS", users);
    },
    GET_PRODUCTS: async function ({ commit }) {
      const res = await fetch("http://localhost:3000/products");

      const products = await res.json();

      commit("SET_PRODUCTS", products);
    },
    GET_CART: async function ({ commit, state }) {
      const res = await fetch("http://localhost:3000/cart");

      const cart = await res.json();

      commit("SET_CART", cart);
    },

    ADD_USER: async function ({ commit }, array) {
      const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(array),
      });
      const user = await res.json();

      console.log(user);

      M.toast({ html: "REGISTERED", classes: "rounded" });

      commit("SET_USERS", user);
    },

    ADD_CART: async function ({ commit }, array) {
      const res = await fetch("http://localhost:3000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(array),
      });
      const cart = await res.json();

      console.log(cart);
      M.toast({ html: "REGISTERED", classes: "rounded" });

      commit("SET_CART", cart);
    },
    ADD_PRODUCT: async function ({ commit }, array) {
      const res = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(array),
      });
      const user = await res.json();

      console.log(user);

      M.toast({ html: "REGISTERED", classes: "rounded" });

      commit("SET_PRODUCTS", user);
    },

    DELETE_CART: async function ({ commit }, id) {
      fetch("http://localhost:3000/cart/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const res = await fetch("http://localhost:3000/cart");

      const cart = await res.json();

      commit("SET_CART", cart);

      this.$router.push("/admin");
    },
    DELETE_PRODUCT: async function ({ commit }, id) {
      fetch("http://localhost:3000/products/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const res = await fetch("http://localhost:3000/products");

      const cart = await res.json();

      commit("SET_PRODUCTS", cart);

      this.$router.push("/admin");
    },
    DELETE_USER: async function ({ commit }, id) {
      fetch("http://localhost:3000/users/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const res = await fetch("http://localhost:3000/users");

      const cart = await res.json();

      commit("SET_USERS", cart);

      this.$router.push("/admin");
    },
    EDIT_USER: async function ({ commit }, object) {
      fetch("http://localhost:3000/users/" + object.id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: object.id,
          username: object.username,
          email: object.email,
          password: object.password,
        }),
      });

      const res = await fetch("http://localhost:3000/users");

      const cart = await res.json();

      commit("SET_USERS", cart);

      this.$router.push("/admin");
    },
    EDIT_PRODUCT: async function ({ commit }, object) {
      fetch("http://localhost:3000/products/" + object.id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: object.id,
          name: object.name,
          url: object.url,
          price: object.price,
          amount: object.amount,
        }),
      });

      const res = await fetch("http://localhost:3000/products");

      const cart = await res.json();

      commit("SET_PRODUCTS", cart);

      this.$router.push("/admin");
    },
    EDIT_CART: async function ({ commit }, object) {
      fetch("http://localhost:3000/cart/" + object.id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: object.id,
          names: object.name,
          url: object.url,
          price: object.price,
          amount: object.amount,
        }),
      });

      const res = await fetch("http://localhost:3000/cart");

      const cart = await res.json();

      commit("SET_CART", cart);

      this.$router.push("/admin");
    },
  },
  mutations: {
    SET_USERS: function (state, users) {
      state.users = users;
    },
    SET_PRODUCTS: function (state, products) {
      state.products = products;
    },

    SET_CART: function (state, cart) {
      state.cart = cart;
    },
    SET_ROOT: function (state, root) {
      state.root = root;
    },
  },
});
