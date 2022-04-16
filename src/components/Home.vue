<template>
  <div class="row">
    <div class="slider">
      <ul class="slides">
        <li>
          <img
            src="https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_960_720.jpg"
          />
          <!-- random image -->
          <div class="caption center-align">
            <h3>Con la mejor disposición</h3>
            <h5 class="light grey-text text-lighten-3">
              Nuestros callcenter 24/7.
            </h5>
          </div>
        </li>
        <li>
          <img
            src="https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_960_720.jpg"
          />
          <!-- random image -->
          <div class="caption left-align">
            <h3>Certificados con 5 estrellas michellin</h3>
            <h5 class="light grey-text text-lighten-3">
              Los mejores chefs del país
            </h5>
          </div>
        </li>
        <li>
          <img
            src="https://cdn.pixabay.com/photo/2017/01/13/03/02/burgers-1976198_960_720.jpg"
          />
          <!-- random image -->
          <div class="caption right-align">
            <h3>Grandes reseñas en reseñas.com</h3>
            <h5 class="light grey-text text-lighten-3">Los mejores sabores</h5>
          </div>
        </li>
        <li>
          <img
            src="https://cdn.pixabay.com/photo/2022/01/28/12/17/fast-food-6974507_960_720.jpg"
          />
          <!-- random image -->
          <div class="caption center-align">
            <h3>30 minutos o es gratis</h3>
            <h5 class="light grey-text text-lighten-3">
              Porque tenemos los mejores tiempos de respuesta.
            </h5>
          </div>
        </li>
      </ul>
    </div>

    <div class="black">
      <h2 class="center-align white-text">La vía más rápida para comer</h2>
    </div>

    <p class="container">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni cupiditate
      harum ad architecto iure eaque totam tempora culpa! Nisi temporibus, totam
      qui dicta tenetur perspiciatis atque sed expedita officia rerum!
    </p>

    <div class="container center-align">
      <figure class="new__photo">
        <img
          class="materialboxed img"
          width="600"
          src="https://cdn.pixabay.com/photo/2016/11/18/15/03/burger-1835192__340.jpg"
        />
      </figure>
    </div>

    <div class="">
      <div class="black">
        <h2 class="white-text center-align">Con una nueva receta</h2>
      </div>
      <p class="container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
        cumque. Sit, iusto magni, consequatur qui reprehenderit, ullam
        voluptates eligendi repellendus enim explicabo deleniti odit. Quasi
        debitis blanditiis consequuntur nulla nam!
      </p>
    </div>

    <div class="container center-align">
      <figure class="new__photo">
        <img
          class="materialboxed"
          width="650"
          src="https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg"
        />

        <h5 class="white-text">No te quedes con las ganas de probarla</h5>
        <router-link to="/productos" class="btn center-align black white-text"
          >¡PIDELA YA!</router-link
        >
      </figure>
    </div>

    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "HomePage",
  components: {
    Footer,
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font-family: Open Sans;
}
</style>
