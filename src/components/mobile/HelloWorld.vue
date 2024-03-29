<template>
  <div class="phone">
    <div><img :src="banner" alt="p1" /></div>
    <div>2</div>
    <div>3</div>
  </div>
</template>

<script>
import banner from "@/assets/img/banner.png";
console.log(11111111, banner);
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to mobile",
      // banner: require("/src/assets/img/banner.png"),
      // active: require("@/assets/logo.png"),
      banner,
    };
  },
  created() {
    console.log(11111111);
  },
  mounted() {
    console.log(22222222);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.phone {
  background-color: red;
  -webkit-overflow-scrolling: touch;
  will-change: transform;
  position: absolute;
  top: 0;
  left: 0;
  width: -webkit-fill-available;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
}
</style>
