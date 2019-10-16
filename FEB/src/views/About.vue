<template>
  <div>
    <Nav active="about"></Nav>
    <div class="about">
      <div class="about-banner">
        <div class="about-btn">关于我们</div>
      </div>
      <div class="team-int">
        <div class="team-box">
          <div class="team-title">团队介绍</div>
          <div class="team-line"></div>
          <div class="team-content">
            ACC亚非资本链主要由韩国、印度、中国、美国、新加坡及东南亚国家的企业家、高精尖技术人士、顶级风投团队等构成， 在亚太地区和非洲共42个国家政府的大力支持下，致力于构建融资信息平台，打造一个安全、诚信、公开、公证的创新型金融服务平台。
          </div>
          <div class="team-person">
            <div class="e1">
              <div class="up-c">
                <div>陈欣</div>
                <div></div>
              </div>
              <span>陈欣</span>
            </div>
            <div class="e2">
              <div class="up-c">
                <div>吕学成</div>
                <div></div>
              </div>
              <span>吕学成</span>
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
              <img src="../assets/p3.png" height="120px" alt="" />
              <div class="name">Alphacoin</div>
              <div class="txt">
                Alphacoin基金是一家专注于投资区块链技术和代币的风险投资基金。 自2017年以来，Alphacoin在海内外投资了50多个领先的区块链技术项目，总投资额超过6000万美元。
              </div>
            </div>
            <div class="project-i">
              <img src="../assets/p2.png" height="120px" alt="" />
              <div class="name">Tetras Capital</div>
              <div class="txt">
                Tetras Capital是一家总部位于纽约的区块链基金公司，专注于多元化的加密资产投资， 致力于在全球范围内投资有前途的加密货币和区块链技术公司， 并为其投资组合公司提供战略风险资本投资合作伙伴。
              </div>
            </div>
            <div class="project-i">
              <img src="../assets/p1.png" height="120px" alt="" />
              <div class="name">EMURGO</div>
              <div class="txt">
                EMURGO成立于2017年，是日本的注册公司。专注于开发，支持和孵化区块链优质项目， 并帮助将这些业务整合到Cardano的分散式区块链生态系统中。EMURGO的使命是通过区块链技术帮助这些经济体。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer> </Footer>
  </div>
</template>
<script>
import Nav from "../components/Nav/Index";
import Footer from "../components/Footer/index";
export default {
  name: "About",
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
      width: 1200px;
      color: #4d4d4d;
      font-size: 18px;
      line-height: 36px;
      text-align: justify;
      text-indent: 2em;
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
          margin-top: 15px;
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
          line-height: 24px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
