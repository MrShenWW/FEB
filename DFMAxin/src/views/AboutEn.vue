<template>
  <div class="about">
    <Nav active="about"> </Nav>

    <div class="about-banner">
      <div class="about-btn">About Us</div>
    </div>
    <div class="team-int">
      <div class="team-box">
        <div class="team-title">Team</div>
        <div class="team-line"></div>
        <div class="team-content">
          ACC is mainly composed of entrepreneurs, highly sophisticated technicians and top venture capital teams from South Korea, India, China, the United States, Singapore and Southeast Asian countries. It is committed to building with the support of 42 governments in Asia Pacific and Africa. Financing information platform to create an innovative financial service platform that is safe, honest, open and notarized.
        </div>
        <div class="team-person">
          <div class="e1">
            <div class="up-c">
              <div>ChenXin</div>
              <div></div>
            </div>
            <span>ChenXin</span>
          </div>
          <div class="e2">
            <div class="up-c">
              <div>LvXueCheng</div>
              <div></div>
            </div>
            <span>LvXueCheng</span>
          </div>
          <div class="e3">
            <div class="up-c">
              <div>Shim Gayong</div>
              <div></div>
            </div>
            <span>Shim Gayong</span>
          </div>
          <div class="e4">
            <div class="up-c">
              <div>Amb.Monday Semaya.k.kumb</div>
              <div></div>
            </div>
            <span>Amb.Monday Semaya.k.kumb</span>
          </div>
          <div class="e5">
            <div class="up-c">
              <div>Paul Chikawa</div>
              <div></div>
            </div>
            <span>Paul Chikawa</span>
          </div>
        </div>
      </div>
    </div>
    <div class="project-int">
      <div class="project-box">
        <div class="p-b">
          <div class="project-i">
            <img src="../assets/p3.png" alt="" />
            <div class="name">Alphacoin</div>
            <div class="txt">
              Alphacoin Fund is a venture capital fund focused on investing in blockchain technology and tokens. Since 2017, Alphacoin has invested in more than 50 leading blockchain technology projects at home and abroad with a total investment of more than $60 million.
            </div>
          </div>
          <div class="project-i">
            <img src="../assets/p2.png" alt="" />
            <div class="name">Tetras Capital</div>
            <div class="txt">
              Tetras Capital is a New York-based blockchain fund company that specializes in diversified crypto asset investments, investing in promising cryptocurrency and blockchain technology companies worldwide and providing strategies for its portfolio companies Venture capital investment partners.
            </div>
          </div>
          <div class="project-i">
            <img src="../assets/p1.png" alt="" />
            <div class="name">EMURGO</div>
            <div class="txt">
              Founded in 2017, EMURGO is a registered company in Japan. Focus on developing, supporting and incubating blockchain quality projects and helping to integrate these businesses into Cardano's decentralized blockchain ecosystem. EMURGO's mission is to help these economies through blockchain technology.
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Nav from "../components/Nav/IndexEn";
import Footer from "../components/Footer/indexEn";
export default {
  name: "AboutEN",
  components: {
    Nav,
    Footer
  },
  mounted() {
  }
};
</script>

<style scoped lang="less">
.about-banner {
  height: 600px;
  background: url("../assets/aboutBanner.png") no-repeat center center/cover;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1200px) {
    height: 400px;
    width: 100%;
  }
  .about-btn {
    width: 360px;
    height: 90px;
    text-align: center;
    line-height: 90px;
    font-size: 36px;
    color: white;
    border: 1px solid white;
    margin-top: 380px;
    @media screen and (max-width: 1200px) {
      margin-top: 200px;
      width: 180px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      font-size: 22px;
    }
  }
}

.team-int {
  width: 100%;
  background: #f5f5f5;
  .team-box {
    width: 1200px;
    margin: 0 auto;
    @media screen and (max-width: 1200px) {
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
    }
    .team-title {
      color: #1c1e22;
      text-align: center;
      font-size: 36px;
      padding-top: 84px;
      @media screen and (max-width: 1200px) {
        font-size: 26px;
        padding-top: 40px;
      }
    }
    .team-line {
      height: 2px;
      width: 36px;
      margin: 50px auto 0;
      background: #1c1e22;
      @media screen and (max-width: 1200px) {
        margin: 30px auto 0;
      }
    }
    .team-content {
      padding-top: 52px;
      text-align: justify;
      text-indent: 2em;
      width: 1200px;
      color: #4d4d4d;
      font-size: 18px;
      line-height: 36px;

      @media screen and (max-width: 1200px) {
        width: 100%;
        font-size: 14px;
        padding-top: 40px;
        text-align: left;
      }
    }
    .team-person {
      padding-top: 74px;
      padding-bottom: 74px;
      display: flex;
      justify-content: space-between;
      @media screen and (max-width: 1200px) {
        padding: 40px 0;
        box-sizing: border-box;
        flex-wrap: wrap;
      }
      >div {
        width: 208px;
        height: 208px;
        border-radius: 50%;
        position: relative;
        @media screen and (max-width: 1200px) {
          width: 150px;
          height: 150px;
          margin-bottom: 40px;
        }
        >span {
          display: block;
          margin-top: 20px;
          width: 100%;
          text-align: center;
          color: #333;
          @media screen and (max-width: 1200px) {
            margin-top: 20px;
            margin-bottom: 20px;
          }
        }
        .up-c {
          opacity: 0;
          width: 208px;
          height: 208px;
          border-radius: 50%;
          position: relative;
          left: 0px;
          top: 0px;
          background: rgba(0, 34, 138, 0.5);
          text-align: center;
          @media screen and (max-width: 1200px) {
            width: 135px;
            height: 135px;
            left: 7px;
            top: 7px;
          }
          div:first-child {
            font-size: 24px;
            color: white;
            padding-top: 74px;
            @media screen and (max-width: 1200px) {
              font-size: 16px;
              padding-top: 30px;
            }
          }
          div:last-child {
            height: 2px;
            background: white;
            width: 60px;
            margin: 36px auto 0;
          }
        }
        &:hover {
          .up-c {
            opacity: 1;
            transition: 0.5s;
          }
        }
      }
      .e1 {
        background: url("../assets/图片1.png") no-repeat center center/cover;
      }
      .e2 {
        background: url("../assets/图片2.png") no-repeat center center/cover;
      }
      .e3 {
        background: url("../assets/图片3.png") no-repeat center center/cover;
      }
      .e4 {
        background: url("../assets/图片4.png") no-repeat center center/cover;
      }
      .e5 {
        background: url("../assets/图片5.png") no-repeat center center/cover;
      }
      @media screen and (max-width: 1200px) {
        .e1,
        .e2,
        .e3,
        .e4,
        .e5 {
          background-size: 100% 100%;
        }
      }
    }
  }
}

.project-int {
  background: #e9ebef;
  padding: 84px 0;
  .project-box {
    width: 100%;
    background: white;
    margin: 0 auto;
    padding: 60px 0;
    box-sizing: border-box;
    @media screen and (max-width: 1200px) {
      width: 90%;
    }
    .p-b {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      @media screen and (max-width: 1200px) {
        width: 100%;
        display: block;
        padding: 0 20px;
        box-sizing: border-box;
      }
      .project-i {
        width: 330px;
        >img {
          max-width: 100%;
        }
        @media screen and (max-width: 1200px) {
          width: 100%;
          margin-top: 20px;
        }
        .name {
          color: #1c1e22;
          padding: 24px 0;
          font-size: 22px;
          font-weight: bold;
          @media screen and (max-width: 1200px) {
            padding: 14px 0;
            font-size: 18px;
          }
        }
        .txt {
          color: #2e3139;
          line-height: 20px;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
