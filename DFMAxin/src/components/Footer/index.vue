<template>
  <div class="footer">
    <div class="content">
      <div>
        <img src="../../assets/img/组 12(2).png" alt="">
      </div>
      <ul>
        <li @click='beng()'>常用工具</li>
        <li @click='beng()'>功能链接</li>
        <li @click='beng()'>用户支持</li>
        <li @click='beng()'>联系我们</li>
      </ul>
    </div>

  </div>
</template>
<script>
export default {
  methods: {
    beng() {
      window.location.href = 'https://www.baidu.com/'
    }
  }
}
</script>

<style lang="less" scoped>
.footer {
  width: 100%;
  height: 131px;
  background: rgba(8, 7, 14, 1); // background: url("../../assets/footer.png") no-repeat center center / cover;
  padding: 0 170px;
  .content {
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ul {
      display: flex;
      li {
        font-size: 15px;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        line-height: 14px;
        margin-right: 70px;
      }
    }
  }
}
</style>
