<template>
  <div id="home">
    <div id="information">
      <div id="information-items">
        <div
          v-for="data in userData"
          :key="data"
          :class="data ? 'card' : 'card skeleton'"
        >
          {{ data }}
        </div>
      </div>
      <div id="avatar-items">
        <img :src="userData.image" alt="" class="avatar" />
        <button @click="triggerHome">Click Me</button>
      </div>
      <div>{{ computedCalled }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    userData: {
      type: [Array, Object],
      default: () => {},
    },
  },
  data() {
    return {
      users: "Computed",
      users1: ""
    };
  },
  computed: {
    computedCalled() {
      return this.users;
    },
  },
  created() {
    alert("Home Created Called:");
  },
  mounted() {
    alert("Mounted called:");
  },
  updated() {
    // this.users = "Computed changed"
    alert("updated called");
  },
  destroyed() {
    alert("destroyed called");
  },
  methods: {
    triggerHome() {
      this.users = "Computed changed"
      // this.$emit("submit");
    },
  },
};
</script>

<style>
#home {
  width: 100%;
  height: 500px;
  /* display: flex; */
  background-color: green;
}
#information {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid blue;
  width: 50%;
  background-color: rgb(221, 229, 234);
}
#information-items {
  flex-grow: 1;
}
#avatar-items {
  flex-grow: 1;
}
.card {
  border-radius: 5px;
  /* border: 2px solid blue; */
  margin: 12px;
  height: 30px;
}
.skeleton {
  animation: skeleton-loading 1s linear infinite alternate;
}
.avatar {
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  /* border: 1px solid blue; */
  animation: skeleton-loading 1s linear infinite alternate;
}

@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 70%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
}
</style>
