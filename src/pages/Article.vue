<template>
    <q-page style="padding: 0.5rem;" :style-fn="minHeight">
      <div class="row justify-center items-center" ref='tt'>
        <q-card bordered class="my-card" :class="width"  :style="articleHeight">
          <q-card-section class="text-center">
            <div :class="titleSize" style="padding: 1rem 0;">{{title}}</div>
            <div>
              <q-chip dense color="bookmark" icon="mdi-calendar" text-color="black" :label="date" :style="iconFontSize"/>
              <q-chip dense color="bookmark" icon="mdi-eye" text-color="black" label="66" :style="iconFontSize"/>
            </div>
          </q-card-section>
          <q-card-section :class="fontsize">
            <mavon-editor v-html="content" :subfield="false" :defaultOpen="defaultData" :toolbarsFlag="false" codeStyle="dark"/>
          </q-card-section>
        </q-card>
      </div>
      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="offset" style="position: absolute;z-index: 9999;">
        <q-btn fab icon="mdi-rocket" color="primary" style="transform:rotate(-45deg);"/>
      </q-page-scroller>
    </q-page>
</template>

<style lang="stylus" scoped>
  .ul-padding
    margin 0
    -webkit-padding-start 20px
  .article-title
   font-size 2rem
  .icon-font-size
   font-size 1rem
</style>

<style lang="stylus">
  .markdown-body pre
    background-color #BFE0FB !important
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
      date: null,
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
    this.content = window.sessionStorage.getItem('content')
    this.title = window.sessionStorage.getItem('title')
    this.date = window.sessionStorage.getItem('date').split(' ')[0]
  }
}
</script>
