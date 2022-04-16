<template>
  <div class="container">
    <nav class="black">
      <div class="nav-wrapper">
         <a href="#!" class="brand-logo"><i class="material-icons">bolt</i>Fast Way</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="#"><router-link to="/">Home</router-link></a>
          </li>
          <li>
            <a href="#"><router-link to="/productos">Productos</router-link> </a>
          </li>
          <li>
            <a href="#"><router-link to="/registrarse">Login</router-link> </a>
          </li>
          <li>
            <a href="#"><router-link to="/adminlogin">Admin</router-link> </a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>


.brand-logo{
  margin-left: 1em;
}
</style>