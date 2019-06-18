<template>
    <q-page style="padding: 0.5rem;" :style-fn="minHeight">
      <div class="row justify-center items-center">
        <q-card bordered class="my-card" :class="width"  :style="articleHeight">
          <q-card-section class="text-center">
            <div :class="titleSize" style="padding: 1rem 0;">{{value.title}}</div>
            <div>
              <q-chip dense color="bookmark" icon="today" text-color="black" label="2019-5-28" :style="iconFontSize"/>
              <q-chip dense color="bookmark" icon="visibility" text-color="black" label="66" :style="iconFontSize"/>
            </div>
          </q-card-section>
          <q-card-section :class="fontsize">
            <mavon-editor v-html="value.content" :subfield="false" :defaultOpen="defaultData" :toolbarsFlag="false" codeStyle="dark"/>
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
      height: null,
      value: '',
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
      return { 'min-height': this.height }
    }
  },
  methods: {
    minHeight (offset) {
      this.height = `calc(100vh - 1rem - ${offset}px)`
    }
  },
  created () {
    var that = this
    getArticle(this).then(function (res) {
      that.value = res[0]
    })
  }
}
async function getArticle (context) {
  const query = context.Bmob.Query('article')
  query.equalTo('objectId', '==', context.$route.params.id)
  var res = await query.find()
  return res
}
</script>
