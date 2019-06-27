<template>
    <q-page style="padding: 0.5rem;">
      <div class="row justify-center items-start margin-bottom">
        <q-card bordered class="my-card" :class="width">
          <q-toolbar class="bg-white text-black">
            <div class="card-title">关于我</div>
          </q-toolbar>
          <q-separator />
          <q-card-section :class="fontsize">
            Hello 陌生人，欢迎访问 yzx'Blog !<br/>
            该博客托目前管于 GitHub Pages，后端使用的是 Bmob 云。另外访问量统计使用的腾讯的 MTA 分析工具。主题是自己写的，项目代码托管在github，欢迎 Star和 Fork。另喜欢本博客的欢迎添加友链，在留言板留言即可，我会第一时间处理，就是这样。
          </q-card-section>
        </q-card>
      </div>

      <div class="row justify-center items-start margin-bottom">
        <q-card bordered class="my-card" :class="width">
          <q-toolbar class="bg-white text-black">
            <div class="card-title">技术栈</div>
          </q-toolbar>
          <q-separator />
          <q-card-section :class="fontsize">
            <ul class="ul-padding">
              <li>熟悉 JavaScript 语言，熟练使用 Vue 全家桶</li>
              <li>熟练使用 quasar 脚手架</li>
              <li>了解 Java，NodeJs,Php 等后端语言</li>
              <li>数据库方面能简单使用 MySQL,MongoDB</li>
              <li>Linux 的简单使用，各种服务的搭建</li>
              <li>能够熟练使用 Git</li>
              <li>做过基于区块链的Dapp</li>
            </ul>
          </q-card-section>
        </q-card>
      </div>

      <div class="row justify-center items-start">
        <q-card bordered class="my-card" :class="width">
          <q-toolbar class="bg-white text-black">
            <div class="card-title">联系我</div>
          </q-toolbar>
          <q-separator />
          <q-card-section :class="fontsize">
            QQ : 1099926157<br />
            Email : yzxhfut@qq.com<br />
            GitHub : https://github.com/yzxhfut
          </q-card-section>
        </q-card>
      </div>
    </q-page>
</template>

<style lang="stylus">
  .ul-padding
    margin 0
    -webkit-padding-start 20px
</style>

<script>
export default {
  name: 'PageAbout',
  computed: {
    width () {
      return this.$q.platform.is.desktop ? 'col-6' : 'col-12'
    },
    fontsize () {
      return this.$q.platform.is.desktop ? 'pc-font-size' : 'no-pc-font-size'
    }
  }
}
</script>
