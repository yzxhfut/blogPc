<template>
    <q-page class="padding-bottom padding-top">
      <div class="row justify-center items-start margin-bottom">
        <q-card bordered class="my-card" :class="width">
          <q-toolbar class="bg-white text-black">
            <div class="card-title">文章分类</div>
          </q-toolbar>
          <q-separator />
          <q-card-section>
            <q-chip clickable color="primary" text-color="white" label="javascript" />
            <q-chip clickable color="teal" text-color="white" label="vue"/>
            <q-chip clickable color="orange" text-color="white" label="fabric"/>
            <q-chip clickable color="red" text-color="white" label="nodejs" />
            <q-chip clickable color="deep-orange" text-color="white" label="linux"/>
            <q-chip clickable color="teal" text-color="white" label="数据库"/>
          </q-card-section>
        </q-card>
      </div>

      <div class="row justify-center ">
        <q-card bordered class="my-card" :class="width">
          <q-toolbar class="bg-white text-black">
            <div class="card-title">文章列表</div>
          </q-toolbar>
          <q-separator />
          <q-card-section>
            <q-list :class="fontsize" v-for="article in currentArticles" :key="article.id">
              <q-item >
                <q-item-section class="item-row">
                    <q-item-label @click="test(article.id)" class="title">{{article.content}}{{article.id}}</q-item-label>
                    <q-chip :dense="!pc" clickable color="bookmark" text-color="black" label="javascript" />
                    <q-chip :dense="!pc" clickable color="bookmark" text-color="black" label="vue" />
                </q-item-section>

               <q-item-section side :top="!pc" class="no-padding-left">
                  <q-item-label>2019-5-26</q-item-label>
               </q-item-section>
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
export default {
  name: 'PageIndex',
  data () {
    return {
      currentPage: 1,
      pageSize: 20,
      articles: [
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 1 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 2 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 3 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 4 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 5 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 6 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 7 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 8 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 9 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 10 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 11 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 12 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 13 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 14 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 15 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 16 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 17 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 18 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 19 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 20 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 21 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 22 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 23 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 24 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 25 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 26 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 27 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 28 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 29 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 30 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 31 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 32 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 33 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 34 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 35 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 36 }
      ],
      currentArticles: []
    }
  },
  computed: {
    width () {
      return this.$q.platform.is.desktop ? 'col-6' : 'col-11'
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
  methods: {
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
    }
  },
  created () {
    for (let i = (this.currentPage - 1) * this.pageSize; i < this.currentPage * this.pageSize; i++) {
      this.currentArticles.push(this.articles[i])
    }
  }
}
</script>
