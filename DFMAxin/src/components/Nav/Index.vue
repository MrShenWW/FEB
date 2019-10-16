<template>
  <div class="header-wrap">
    <div class="wrap">
      <img class="logo" src="../../assets/img/组 12@2x(2).png" height="40px" alt />
      <div class="menu-wrap">
        <a href="#one">品牌释义</a>
        <a href="#two" class="white-paper">特色亮点</a>
        <a href="#three">核心应用板块</a>
        <a href="#four" id="go-digital" class="go-digital">技术理念</a>
        <a href="#five">生态场景</a>
        <a class="hover">
          语言
          <div>
            <router-link to="/">
              <span>ENGLISH</span>
            </router-link>
            <router-link to="/cn">
              <span>中文</span>
            </router-link>
          </div>
        </a>
      </div>
    </div>
    <div class="mobile-wrap">
      <div class="mobile-header-wrap">
        <img class="logo" src="../../assets/img/组 12@2x(2).png" height="40px" alt />
        <div @click="mobileNavShowFn">
          <img v-if="!mobileNavShow" src="../../assets/menu.png" alt height="40px" />
          <img v-else src="../../assets/close.png" alt height="25px" />
        </div>
      </div>
      <div
        :class="{
         'mobile-select-menu': true,
        'mobile-select-menu-show': mobileNavShow
          }"
      >
        <a href="#one">品牌释义</a>
        <a href="#two" >特色亮点</a>
        <a href="#three">核心应用板块</a>
        <a href="#four" >技术理念</a>
        <a href="#five">生态场景</a>
        <div>
          <router-link to="/">中文</router-link>|
          <router-link to="/indexMobileEn">EN</router-link>
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
    }
  },
  mounted() {
    window.onscroll = function() {
      var scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (scrollTop > 3) {
        document.querySelector(".header-wrap").style.background = "#1A1200";
      } else {
        document.querySelector(".header-wrap").style.background = "#1A1200";
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
  height: 80px;
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background: #1a1200;
  transition: 0.5s;
  z-index: 1000;
  background: rgba(26, 18, 0, 1);

  > .wrap {
    width: 100%;
    display: flex;
    height: 80px;
    line-height: 80px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    padding: 17px 150px;
    box-sizing: border-box;
    > .menu-wrap {
      height: 80px;
      display: flex;
      line-height: 80px;
      a {
        margin-right: 43px;
        height: 80px;
        font-size: 17px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 80px;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    height: 60px;
    .wrap {
      display: none;
      background-color: #1a1200;
    }
  }
  > .mobile-wrap {
    @media screen and (max-width: 1200px) {
      display: block;
      height: 60px;
      background-color: #1a1200;
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
      > img {
        margin-left: 10px;
      }
      > div {
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
      background: #1a1200;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      height: 0px;
      transition: 0.3s;
      z-index: 99999;
      > a {
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
      > div {
        height: 50px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding-left: 20px;
        color: #fff;
        > a {
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

.hover {
  position: relative;
  div {
    display: none;
  }
  &:hover {
    > div {
      width: 200px;
      position: absolute;
      height: 200px;
      top: 50px;
      background: #000;
      display: flex;
      flex-direction: column;
      span {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
