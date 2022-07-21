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
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Skeleton from "vue-loading-skeleton";

Vue.use(Skeleton);
export default {
  name: "Home",
  props: {
    userData: {
      type: [Array, Object],
      default: () => {},
    },
  },
  created() {
    console.log("this.props:", this.userData);
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
