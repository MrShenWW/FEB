<template>
  <div>
    <Nav></Nav>
    <div class="new-banner">
      <div class="new-content-box">
        <div class="new-title">新闻资讯</div>
        <div class="new-txt">
          ACC将为全球各地消费者提供可以存储和共享价值服务，并且以一种可靠的方式进行无货币支付，让世界任何商业领域或者组织机构都可以降低成本、
          改善用户体验以及减少欺诈和降低风险，引入“智能合同”概念，在金融、保险、法律和企业等领域带来影响。
        </div>
      </div>
    </div>
    <div class="new-con">
      <div class="con-box">
        <div class="con-banner">
          <div class="banner-txt-box">
            <p class="new-t">最新新闻</p>
            <div class="new-b">
              <p>什么是ACC</p>
              <p>---></p>
            </div>
            <p class="new-t">ACC英文全称：Asian-African Capital Chain</p>
            <p class="new-t">ACC中文全称：亚非资本链</p>
            <p class="new-t">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;主要由中国、美国、新加坡、韩国及东南亚国家的企业家、高精尖技术人士、顶级风投团队等构成....
            </p>
          </div>
        </div>
        <div class="con-content">
          <div class="content-line">
            <div class="line-box">
              <div class="time">
                <p>04</p>
                <div></div>
                <p>2019.7</p>
              </div>
              <div class="content">
                ACC Token
                Wallet是一款专门为ACC生态打造的移动去中心化轻钱包APP......
              </div>
            </div>
            <div class="line-box">
              <div class="time">
                <p>30</p>
                <div></div>
                <p>2019.6</p>
              </div>
              <div class="content">
                ACC Token
                Wallet是一款专门为ACC生态打造的移动去中心化轻钱包APP......
              </div>
            </div>
          </div>
          <div class="content-line">
            <div class="line-box">
              <div class="time">
                <p>29</p>
                <div></div>
                <p>2019.6</p>
              </div>
              <div class="content">
                ACC Token
                Wallet是一款专门为ACC生态打造的移动去中心化轻钱包APP......
              </div>
            </div>
            <div class="line-box">
              <div class="time">
                <p>26</p>
                <div></div>
                <p>2019.6</p>
              </div>
              <div class="content">
                ACC Token
                Wallet是一款专门为ACC生态打造的移动去中心化轻钱包APP......
              </div>
            </div>
          </div>
          <div class="content-line">
            <div class="line-box">
              <div class="time">
                <p>19</p>
                <div></div>
                <p>2019.6</p>
              </div>
              <div class="content">
                ACC Token
                Wallet是一款专门为ACC生态打造的移动去中心化轻钱包APP......
              </div>
            </div>
            <div class="line-box">
              <div class="time">
                <p>05</p>
                <div></div>
                <p>2019.6</p>
              </div>
              <div class="content">
                ACC Token
                Wallet是一款专门为ACC生态打造的移动去中心化轻钱包APP......
              </div>
            </div>
          </div>
          <div class="get-more">加载更多</div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from "../components/Nav/Index";
import Footer from "../components/Footer/index";
export default {
  name: "New",
  components: {
    Nav,
    Footer
  }
};
</script>

<style scoped lang="less">
.new-banner {
  width: 100%;
  height: 600px;
  background: url("../assets/newBanner.png");
  @media screen and (max-width: 1000px) {
    height: 450px;
  }
  .new-content-box {
    padding-top: 240px;
    text-align: center;
    color: #f5f5f5;
    @media screen and (max-width: 1000px) {
      padding-top: 140px;
    }
    .new-title {
      font-size: 36px;
      font-weight: bold;
      @media screen and (max-width: 1000px) {
        font-size: 26px;
      }
    }
    .new-txt {
      padding-top: 60px;
      width: 1000px;
      line-height: 30px;
      margin: 0 auto;
      @media screen and (max-width: 1000px) {
        padding: 30px 20px 0;
        width: 100%;
        font-size: 14px;
        line-height: 24px;
        box-sizing: border-box;
      }
    }
  }
}
.new-con {
  padding-top: 100px;
  background: #f5f5f5;
  @media screen and (max-width: 1200px) {
    padding: 50px 0 0;
    box-sizing: border-box;
  }
  .con-box {
    width: 1200px;
    margin: 0 auto;
    @media screen and (max-width: 1200px) {
      width: 100%;
    }
    .con-banner {
      height: 560px;
      width: 100%;
      background: url("../assets/connew.png");
      position: relative;
      @media screen and (max-width: 1200px) {
        height: 350px;
      }
      .banner-txt-box {
        width: 540px;
        height: 280px;
        background: white;
        padding: 24px;
        box-sizing: border-box;
        position: absolute;
        bottom: 20px;
        right: 20px;
        @media screen and (max-width: 1200px) {
          width: 250px;
          height: 220px;
        }
        .new-t {
          font-size: 14px;
          color: #4d4d4d;
          line-height: 28px;
          @media screen and (max-width: 1200px) {
            font-size: 12px;
            line-height: 20px;
          }
        }
        .new-b {
          display: flex;
          padding: 34px 0 28px;
          justify-content: space-between;
          @media screen and (max-width: 1200px) {
            padding: 10px 0;
          }
          p:first-child {
            color: #31342b;
            font-size: 24px;
            font-weight: bold;
            @media screen and (max-width: 1200px) {
              font-size: 18px;
            }
          }
          p:last-child {
            width: 76px;
            height: 26px;
            text-align: center;
            line-height: 26px;
            color: white;
            background: #00228a;
            @media screen and (max-width: 1200px) {
              width: 50px;
              height: 20px;
              line-height: 20px;
            }
          }
        }
      }
    }
    .con-content {
      width: 100%;
      @media screen and (max-width: 1200px) {
        padding: 0 20px;
        box-sizing: border-box;
      }
      .content-line {
        display: flex;
        justify-content: space-between;
        margin-top: 60px;
        @media screen and (max-width: 1200px) {
          margin-top: 20px;
          display: block;
        }
        .line-box {
          width: 560px;
          height: 160px;
          position: relative;
          cursor: pointer;
          @media screen and (max-width: 1200px) {
            width: 100%;
            height: 120px;
          }
          .time {
            position: absolute;
            left: 0;
            top: 0;
            background: #00228a;
            color: white;
            width: 100px;
            height: 120px;
            padding: 30px;
            box-sizing: border-box;
            text-align: center;
            z-index: 10;
            @media screen and (max-width: 1200px) {
              width: 50px;
              height: 60px;
              padding: 5px;
            }
            p:first-child {
              font-size: 36px;
              @media screen and (max-width: 1200px) {
                font-size: 18px;
              }
            }
            div {
              height: 1px;
              background: white;
              margin: 10px auto;
            }
            p:last-child {
              font-size: 14px;
              @media screen and (max-width: 1200px) {
                font-size: 12px;
              }
            }
          }
          .content {
            width: 540px;
            height: 140px;
            padding: 40px 30px 0 110px;
            box-sizing: border-box;
            color: #333333;
            position: absolute;
            right: 0;
            bottom: 0;
            font-size: 14px;
            line-height: 26px;
            background: white;
            @media screen and (max-width: 1200px) {
              width: 90%;
              padding: 20px 20px 0 40px;
              font-size: 14px;
              height: 100px;
            }
          }
          &:hover {
            .time {
              transition: all 0.5s;
              background: #2c83f1;
            }
            .content {
              transition: all 0.5s;
              color: #2c83f1;
              box-shadow: 0px 0px 5px 0px rgba(49, 53, 150, 0.2);
            }
          }
        }
        .line-box:last-child {
          @media screen and (max-width: 1200px) {
            margin-top: 20px;
          }
        }
      }
      .get-more {
        width: 100%;
        height: 50px;
        text-align: center;
        line-height: 50px;
        font-size: 16px;
        color: #999999;
        background: #ebebeb;
        margin-top: 60px;
        margin-bottom: 15px;
        @media screen and (max-width: 1200px) {
          margin-top: 30px;
          height: 30px;
          line-height: 30px;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
