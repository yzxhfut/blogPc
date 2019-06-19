<template>
    <q-page style="padding: 0.5rem;" :style-fn="minHeight">
      <div class="row justify-center items-center" ref='tt'>
        <q-card bordered class="my-card" :class="width"  :style="articleHeight">
          <q-card-section class="text-center">
            <div :class="titleSize" style="padding: 1rem 0;">{{title}}</div>
            <div>
              <q-chip dense color="bookmark" icon="today" text-color="black" label="2019-5-28" :style="iconFontSize"/>
              <q-chip dense color="bookmark" icon="visibility" text-color="black" label="66" :style="iconFontSize"/>
            </div>
          </q-card-section>
          <q-card-section :class="fontsize">
            <mavon-editor v-html="content" :subfield="false" :defaultOpen="defaultData" :toolbarsFlag="false" codeStyle="dark"/>
          </q-card-section>
        </q-card>
      </div>
      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="offset" style="position: absolute;z-index: 9999;">
        <q-btn fab icon="keyboard_arrow_up" color="primary"/>
      </q-page-scroller>
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
      pageHeight: null,
      pageWidth: null,
      content: null,
      title: null,
      defaultData: 'preview'
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
      return this.$q.platform.is.desktop ? 'text-h5' : 'text-h5'
    },
    iconFontSize () {
      return this.$q.platform.is.desktop ? { 'font-size': 1 + 'rem' } : { 'font-size': 0.8 + 'rem' }
    },
    articleHeight () {
      return { 'min-height': this.pageHeight }
    },
    offset () {
      return this.$q.platform.is.desktop ? [this.pageWidth / 5, 18] : [18, 18]
    }
  },
  methods: {
    minHeight (offset) {
      this.pageHeight = `calc(100vh - 1rem - ${offset}px)`
    }
  },
  mounted () {
    this.pageWidth = this.$refs.tt.offsetWidth
  },
  created () {
    var that = this
    // getArticle(this).then(function (res) {
    //   that.value = res[0]
    // })
    that.content = window.sessionStorage.getItem('content')
    that.title = window.sessionStorage.getItem('title')
  }
}
async function getArticle (context) {
  const query = context.Bmob.Query('article')
  query.equalTo('objectId', '==', context.$route.params.id)
  var res = await query.find()
  return res
}
</script>
