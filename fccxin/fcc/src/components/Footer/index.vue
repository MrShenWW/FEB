<template>
  <div class="footer">
    <div class="content">
      <div class="first-wrap">
        <img src="../../assets/logo_footer.png" height="65px" alt="" />
        <div class="iconfont-wrap">
          <a href="javascript:;">
            <i class="iconfont icon-weixin"></i>
            <img src="../../assets/wechat.jpeg" width="132px" alt="" />
          </a>
          <a href="https://t.me/acctoken998" target="_blank">
            <i class="iconfont icon-telegram"></i>
          </a>
          <a href="https://weibo.com/ACCTokem?is_hot=1" target="_blank">
            <i class="iconfont icon-weibo-copy"></i>
          </a>
        </div>
      </div>
      <p class="desc">
        以区块链技术为基础，传递亚洲、非洲商业与金融价值，
        专注于“一带一路”相关区块链项目，
        连续各行各业生态上的关键点，整合行业资源，
        建立多边互利国际性平台，推进亚非经济健康发展。
      </p>
      <div class="source">
        <p>开发者资源</p>
        <a href="/ACC_CN_V1.0.1.pdf" target="_blank">ACC白皮书下载</a>
        <a href="https://cw.pub/acctoken" target="_blank"
          >ACC数字矿机钱包下载</a
        >
        <a
          href="https://acctoken.zendesk.com/hc/zh-cn/categories/360001764332-"
          target="_blank"
          >FAQ</a
        >
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.footer {
  width: 100%;
  height: 300px;
  background: #fff;
  // background: url("../../assets/footer.png") no-repeat center center / cover;
  @media screen and (max-width: 1200px) {
    height: auto !important;
    padding: 20px 0px;
    background: #fff;
  }
  .content {
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    padding-top: 80px;
    width: 1200px;
    margin: 0 auto;
    @media screen and (max-width: 1200px) {
      width: 95%;
      flex-direction: column;
      align-items: center;
      padding-top: 0px;
    }
    > .first-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      > img {
        @media screen and (max-width: 1200px) {
          height: 30px;
          margin-bottom: 20px;
        }
      }
      > .iconfont-wrap {
        display: flex;
        justify-content: space-around;
        width: 100%;
        margin-top: 10px;
        align-items: center;
        @media screen and (max-width: 1200px) {
          width: 100px;
          justify-content: space-between;
        }
        > a {
          color: #020a1e;
          transition: 0.3s;
          position: relative;
          &:hover {
            color: #56aada;
          }
          > i {
            font-size: 30px;
            @media screen and (max-width: 1200px) {
              font-size: 20px;
            }
          }
          &:nth-of-type(1) {
            > i {
              font-size: 40px;
              @media screen and (max-width: 1200px) {
                font-size: 30px;
              }
            }
            &:hover {
              > img {
                display: block;
              }
            }
            > img {
              position: absolute;
              top: -46px;
              left: 40px;
              z-index: 999;
              display: none;
            }
          }
        }
      }
    }
    .desc {
      font-size: 14px;
      color: #3d3d3d;
      line-height: 30px;
      width: 350px;
      @media screen and (max-width: 1200px) {
        margin-bottom: 20px;
        width: 95%;
      }
    }
    .source {
      display: flex;
      flex-direction: column;
      @media screen and (max-width: 1200px) {
        align-self: flex-start;
        width: 95%;
        margin: 0px auto 0px;
      }
      > p {
        font-size: 16px;
        color: #3d3d3d;
      }
      > a {
        color: #3d3d3d;
        font-size: 14px;
        margin-top: 20px;
        box-sizing: border-box;
        padding-left: 20px;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          width: 10px;
          height: 10px;
          left: 0px;
          top: 2px;
          background: url("../../assets/sjwechat.png") no-repeat center
            center/contain;
        }
      }
    }
  }
}
</style>
