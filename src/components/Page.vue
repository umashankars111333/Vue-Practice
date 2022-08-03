<template>
  <div>
    <div id="navigation" @click="navigationClick">
      <div id="navigation-items" data-action="home">Home</div>
      <div id="navigation-items" data-action="about">About</div>
    </div>
    <div id="navigation-component">
      <Home @submit="submit" v-if="$route.params.menu === 'home'" :userData="userData" />
      <About v-if="$route.params.menu === 'about'" />
    </div>
  </div>
</template>

<script>
import Home from "./Home.vue";
import About from "./About.vue";
export default {
  name: "Page",
  components: {
    Home,
    About,
  },
  data() {
    return {
      userData: {
        name: "",
        company: "",
        role: "",
        experience: "",
        image: "",
      },
    };
  },
  created() {
    // setTimeout(() => {
      Object.assign(this.userData, {
        name: "Umashankar",
        company: "Finastra",
        role: "Front End Developer",
        experience: "2 Years",
        image: "Avatar.png",
      });
    // }, 6000);
  },
  methods: {
    navigationClick(e) {
      this.$router.push(e.target.dataset.action);
    },
    submit() {
      Object.assign(this.userData, {
        name: "Shivashankar",
        company: "Finastra",
        role: "Front End Developer",
        experience: "2 Years",
        image: "Avatar.png",
      });
    }
  },
};
</script>

<style>
#navigation {
  width: 100%;
  height: 30px;
  display: flex;
  background-color: rgb(176, 176, 205);
}
#navigation-items {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 100%;
  transition: all 2s;
}
#navigation-items:hover {
  background-color: beige;
}
</style>
