<template>
  <div class="home">
    <Header></Header>
  </div>
</template>

<script>
import Header from "../components/Index/HeaderEn";
import $ from "jquery";
import { isView } from "../utils/index";
export default {
  name: "home",
  components: {
    Header
  },
  mounted() {
    this.$nextTick(() => {
      let heightArray = [
        "#one",
        "#two",
        "#three",
        "#four",
        "#five",
        "#six",
        "#seven",
        "#eight",
        "#nine"
      ];

      window.addEventListener("scroll", () => {
        heightArray.forEach((item, index) => {
          if (
            heightArray[index + 1] &&
            isView(document.querySelector(heightArray[index + 1]))
          ) {
            $(heightArray[index + 1])
              .find("*")
              .each(function() {
                if (isView(this)) {
                  $(this).addClass("animated fadeInUp");
                }
              });
          } else {
            heightArray[index + 1] &&
              $(heightArray[index + 1])
                .find("*")
                .removeClass("animated fadeInUp");
          }
        });
      });
    });
  }
};
</script>

<style>
@keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 30px, 0);
    transform: translate3d(0, 30px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}
</style>
