<template>
  <div class="phone">
    <div class="fdfg"><img :src="banner" alt="banner" width="100%" /></div>
    <div class="nft">
      <div class="nft-left">
        <div class="nft-left-top">
          <img :src="nft2" alt="nft2" width="100%" />
        </div>
        <div class="nft-left-top">
          <img :src="nft3" alt="nft3" width="100%" />
        </div>
        <div class="nft-left-top">
          <img :src="nft1" alt="nft1" width="100%" />
        </div>
      </div>
      <div class="nft-right"><img :src="p1" alt="p1" width="100%" /></div>
    </div>
    <div class="about">
      <img :src="p2" alt="p2" width="100%" />
    </div>
  </div>
</template>

<script>
import banner from "@/assets/img/banner.png";
import nft1 from "@/assets/img/nft1.png";
import nft2 from "@/assets/img/nft2.png";
import nft3 from "@/assets/img/nft3.png";
import p1 from "@/assets/img/p1.png";
import p2 from "@/assets/img/p2.png";
import logo from "@/assets/img/logo.png";
import mint from "@/assets/img/mint.png";
import h1 from "@/assets/img/h1.png";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to mobile",
      // banner: require("/src/assets/img/banner.png"),
      // active: require("@/assets/logo.png"),
      banner,
      nft1,
      nft2,
      nft3,
      p1,
      p2,
      logo,
      mint,
      h1,
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
.nft {
  display: flex;
  justify-content: space-between;
}
.nft-left {
  width: 40%;
}
.nft-right {
  width: 50%;
}
.nft-left-top {
  width: 168px;
  height: 168px;
}
</style>
