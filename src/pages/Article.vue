<template>
    <q-page style="padding: 0.5rem;" :style-fn="myTweak">
      <div class="row justify-center items-center">
        <q-card bordered class="my-card" :class="width"  :style="articleHeight">
          <q-card-section class="text-center">
            <div :class="titleSize">Our Changing Planet Our Changing Planet</div>
            <div class="margin-top" >
              <q-chip dense color="bookmark" icon="today" text-color="black" label="2019-5-28" :style="iconFontSize"/>
              <q-chip dense color="bookmark" icon="visibility" text-color="black" label="66" :style="iconFontSize"/>
            </div>
          </q-card-section>
          <q-card-section :class="fontsize">
            Hello 陌生人，欢迎访问 yzx Blog !<br/>该博客托管于 GitHub Page，
            国内默认解析到腾讯云，以保证国内外的访问速度。留言页面使用的是 Bmob 云的免费套餐，
            另外使用的腾讯的 MTA 分析工具统计访问量主题使自己写的，见yzx-blog，欢迎 Star
            和 Fork。另喜欢本博客的欢迎添加友链，在留言板留言即可，我会第一时间处理，就是这样。
          </q-card-section>
        </q-card>
      </div>
    </q-page>
</template>

<style lang="stylus">
  .ul-padding
    margin 0
    -webkit-padding-start 20px
  .article-title
   font-size 2rem
  .icon-font-size
   font-size 1rem
</style>

<script>
export default {
  name: 'Article',
  data () {
    return {
      height: null
    }
  },
  computed: {
    width () {
      return this.$q.platform.is.desktop ? 'col-6' : 'col-12'
    },
    fontsize () {
      return this.$q.platform.is.desktop ? 'pc-font-size' : 'no-pc-font-size'
    },
    titleSize () {
      return this.$q.platform.is.desktop ? 'text-h4' : 'text-h5'
    },
    iconFontSize () {
      return this.$q.platform.is.desktop ? { 'font-size': 1 + 'rem' } : { 'font-size': 0.8 + 'rem' }
    },
    articleHeight () {
      return { 'min-height': this.height }
    }
  },
  methods: {
    myTweak (offset) {
      // return { minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh' },
      this.height = `calc(100vh - 1rem - ${offset}px)`
    }
  }
}
</script>
