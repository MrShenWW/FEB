<template>
  <div class="header-wrap">
    <div class="wrap">
      <img class="logo" src="../../assets/logo.png" height="40px" alt />
      <div class="menu-wrap">
        <a href="#one">
          interpretation
        </a>
        <a href="#two_one">
          Bright spot
        </a>
        <a href="#three_one">application</a>
        <a href="#four_one">advantage</a>
        <a href="#five_one">scene</a>
        <div>
          <router-link to="/">中文</router-link>|
          <router-link to="/en">EN</router-link>
        </div>
      </div>
    </div>
    <div class="mobile-wrap">
      <div class="mobile-header-wrap">
        <img src="../../assets/logo.png" height="30px" alt />
        <div @click="mobileNavShowFn">
          <img v-if="!mobileNavShow" src="../../assets/menu.png" alt height="40px" />
          <img v-else src="../../assets/close.png" alt height="25px" />
        </div>
      </div>
      <div :class="{  'mobile-select-menu': true,  'mobile-select-menu-show': mobileNavShow}">
        <a href="#one" @click="hiddenMenu">
          interpretation
        </a>
        <a href="#two_one" @click="hiddenMenu">
          Bright spot
        </a>
        <a href="#three_one" @click="hiddenMenu">application</a>
        <a href="#four_one" @click="hiddenMenu">advantage</a>
        <a href="#five_one" @click="hiddenMenu">scene</a>
        <div @click="hiddenMenu">
          <router-link to="/">中文</router-link>|
          <router-link to="/en">EN</router-link>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: ["active"],
  data() {
    return {
      mobileNavShow: false
    };
  },
  methods: {
    mobileNavShowFn() {
      this.mobileNavShow = !this.mobileNavShow;
    },
    hiddenMenu() {
      this.mobileNavShow = !this.mobileNavShow;
    }
  },
  mounted() {
    window.onscroll = function() {
      var scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (scrollTop > 3) {
        document.querySelector(".header-wrap").style.background = "#000f19";
      } else {
        document.querySelector(".header-wrap").style.background = "#000f19";
      }
    };
    window.onscroll();
    document.addEventListener("click", e => {
      if (e.target.id === "go-digital") {
        document.querySelector(".section-six") &&
          document.querySelector(".section-six").scrollIntoView({
            behavior: "smooth"
          });
      }
    });
  }
};
</script>

<style lang="less" scoped>
.header-wrap {
  height: 68px;
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background: transparent;
  transition: 0.5s;
  z-index: 1000;
  @media screen and (max-width: 1200px) {
    height: 60px;
  }
  >.wrap {
    width: 1200px;
    display: flex;
    height: 68px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center; // background: #000;
    @media screen and (max-width: 1200px) {
      display: none;
    }
    .menu-wrap {
      display: flex;
      height: 100%;
      justify-content: space-between;
      align-items: center;
      >a {
        margin-right: 70px;
        font-size: 17px;
        height: 68px;
        line-height: 68px;
        color: #eaeaea;
        &.active {
          color: #fff;
          border-bottom: 2px solid #fff;
        }
        &.go-digital {
          min-width: 60px;
        }
        &:hover {
          color: #fff;
        }
        &.white-paper {
          position: relative;
          &:hover {
            >.whit-paper-wrap {
              display: flex;
            }
          }
          >.whit-paper-wrap {
            position: absolute;
            z-index: 9999;
            width: 136px;
            height: 85px;
            top: 60px;
            left: -50px;
            display: flex;
            flex-direction: column;
            border: 1px solid rgba(255, 255, 255, 0.5);
            border-radius: 4px;
            display: none;
            >a {
              height: 40px;
              line-height: 40px;
              text-align: center;
              color: #b3b3b3;
              width: 100%;
              &:first-child {
                border-bottom: 1px solid rgba(255, 255, 255, 0.5);
              }
              &:hover {
                color: #2bfaff;
              }
            }
          }
        }
      }
      >div {
        width: 100px;
        padding: 0 10px;
        height: 25px;
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        align-items: center;
        color: #fff;
        border: 1px solid rgba(255, 255, 255, 1);
        border-radius: 3px;
        >a {
          color: #fff;
        }
      }
    }
  }
  >.mobile-wrap {
    @media screen and (max-width: 1200px) {
      display: block;
    }
    @media screen and (min-width: 1200px) {
      display: none;
    }
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    .mobile-header-wrap {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      >img {
        margin-left: 10px;
      }
      >div {
        width: 40px;
        height: 40px;
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .mobile-select-menu {
      position: absolute;
      width: 100%;
      top: 60px;
      left: 0px;
      background: #2e3297;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      height: 0px;
      transition: 0.3s;
      z-index: 99999;
      >a {
        display: flex;
        height: 50px;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
        padding-left: 20px;
        border-bottom: 1px solid #efefef;
        color: #fff;
        font-size: 14px;
      }
      >div {
        height: 50px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding-left: 20px;
        color: #fff;
        >a {
          color: #fff;
          &:nth-of-type(1) {
            margin-right: 10px;
          }
          &:nth-of-type(2) {
            margin-left: 10px;
          }
        }
      }
    }
    .mobile-select-menu-show {
      height: 320px;
    }
  }
}
</style>
