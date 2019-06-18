<template>
    <q-page style="padding: 0.5rem;" :style-fn="getHeight">
      <div class="row justify-center items-start margin-bottom" ref="t" >
        <q-card bordered class="my-card" :class="width">
          <q-toolbar class="bg-white text-black">
            <div class="card-title">文章分类</div>
          </q-toolbar>
          <q-separator />
          <q-card-section>
            <q-chip v-for="(tag, index) in tagList" clickable color="primary" text-color="white" :label="tag.tagName" :key="index"/>
          </q-card-section>
        </q-card>
      </div>

      <div class="row justify-center" :style="minHeight">
        <q-card bordered class="my-card" :class="width">
          <q-toolbar class="bg-white text-black">
            <div class="card-title">文章列表</div>
          </q-toolbar>
          <q-separator />
          <q-card-section>
            <q-list :class="fontsize" v-for="(article, index) in currentArticles" :key="index">
              <q-item>
                <div @click="test(article.objectId)" class="title">{{article.title}}</div>
              </q-item>
              <q-item class="row justify-between items-center no-padding-top no-padding-bottom no-min-height">
                <div>
                  <q-chip :dense="!pc" clickable color="bookmark" text-color="black" label="javascript" />
                  <q-chip :dense="!pc" clickable color="bookmark" text-color="black" label="vue" />
                </div>
                <div>2019-5-26</div>
              </q-item>
              <q-separator spaced inset />
            </q-list>
          </q-card-section>
          <q-pagination
            v-if="articles.length > pageSize"
            class="flex-center margin-bottom"
            size="1rem"
            v-model="currentPage"
            :max="maxPage"
            :max-pages="pageSize"
            @input="pageChange"
            >
          </q-pagination>
        </q-card>
      </div>
    </q-page>
</template>

<style lang="stylus">
  .item-row
    flex-direction row
    align-items center
    justify-content flex-start
  .title
    margin-right 1rem
  .title:hover
    text-decoration underline
    color #027BE3
    cursor pointer
</style>

<script>
import { dom } from 'quasar'
const { height } = dom
export default {
  name: 'PageIndex',
  data () {
    return {
      height: 0,
      tagheight: 0,
      tagList: null,
      currentPage: 1,
      pageSize: 10,
      articles: [],
      currentArticles: []
    }
  },
  computed: {
    minHeight () {
      return { 'min-height': this.height }
    },
    width () {
      return this.$q.platform.is.desktop ? 'col-6' : 'col-12'
    },
    pc () {
      return this.$q.platform.is.desktop
    },
    fontsize () {
      return this.$q.platform.is.desktop ? 'pc-font-size' : 'no-pc-font-size'
    },
    maxPage () {
      return Math.ceil(this.articles.length / this.pageSize)
    }
  },
  mounted () {
    this.tagheight = this.$refs.t.offsetHeight
    console.log(this.tagheight)
  },
  methods: {
    getHeight (offset) {
      this.height = `calc(100vh - 1.5rem - 2.5rem - ${offset}px - ${this.tagheight}px)`
    },
    test (id) {
      this.$router.push('/article/' + id)
    },
    pageChange (page) {
      this.currentArticles = []
      for (let i = (this.currentPage - 1) * this.pageSize; i < this.currentPage * this.pageSize; i++) {
        if (i < this.articles.length) {
          this.currentArticles.push(this.articles[i])
        }
      }
      document.documentElement.scrollTop = 0
    }
  },
  created () {
    var that = this
    getTag(this).then(function (res) {
      that.tagList = res
    })
    getArticle(this).then(function (res) {
      that.articles = res
      for (let i = (that.currentPage - 1) * that.pageSize; i < that.currentPage * that.pageSize; i++) {
        if (i < that.articles.length) {
          that.currentArticles.push(that.articles[i])
        }
      }
    })
  }
}
async function getTag (context) {
  const query = context.Bmob.Query('tag')
  var res = await query.find()
  return res
}
async function getArticle (context) {
  const query = context.Bmob.Query('article')
  var res = await query.find()
  return res
}
</script>
