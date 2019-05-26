<template>
    <q-page>
      <p class="space"></p>
      <div class="row justify-center items-start">
        <q-card bordered class="my-card" :class="width">
          <q-toolbar class="bg-white text-black">
            <div class="card-title">关于我</div>
          </q-toolbar>
          <q-separator />
          <q-card-section :style="fontsize">
            Hello 陌生人，欢迎访问 yzx Blog !<br/>该博客托管于 GitHub Page，
            国内默认解析到腾讯云，以保证国内外的访问速度。留言页面使用的是 Bmob 云的免费套餐，
            另外使用的腾讯的 MTA 分析工具统计访问量主题使自己写的，见yzx-blog，欢迎 Star
            和 Fork。另喜欢本博客的欢迎添加友链，在留言板留言即可，我会第一时间处理，就是这样。
          </q-card-section>
        </q-card>
      </div>

      <p class="space"></p>
      <div class="row justify-center items-start">
        <q-card bordered class="my-card" :class="width">
          <q-toolbar class="bg-white text-black">
            <div class="card-title">技术栈</div>
          </q-toolbar>
          <q-separator />
          <q-card-section :style="fontsize">
            <ul class="ul-padding">
              <li>熟悉 JavaScript 语言， 熟练使用 Vue 全家桶,jQuery 等前端框架</li>
              <li>熟悉 Java，NodeJs,Go 等后端语言</li>
              <li>数据库方面能熟练使用 MySQL,Oracle，MongoDB</li>
              <li>Linux 的简单使用，各种服务的搭建</li>
              <li>能够使用 Git/SVN 对代码版本进行控制</li>
            </ul>
          </q-card-section>
        </q-card>
      </div>

      <p class="space"></p>
      <div class="row justify-center items-start">
        <q-card bordered class="my-card" :class="width">
          <q-toolbar class="bg-white text-black">
            <div class="card-title">联系我</div>
          </q-toolbar>
          <q-separator />
          <q-card-section :style="fontsize">
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
      return this.$q.platform.is.desktop ? 'col-6' : 'col-11'
    },
    fontsize () {
      return this.$q.platform.is.desktop ? { 'font-size': 1.25 + 'rem' } : { 'font-size': 1 + 'rem' }
    }
  }
}
</script>
