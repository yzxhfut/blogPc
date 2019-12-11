<template>
    <q-page style="padding: 0.5rem;" :style-fn="minHeight">
      <div class="row justify-center items-center" ref='tt'>
        <q-card bordered class="my-card col-8" :style="articleHeight">
          <q-card-section class="text-center">
            <div style="padding: 1rem 0;font-size: 1.3rem;">{{title}}</div>
            <div>{{date}}</div>
          </q-card-section>
          <q-card-section>
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
    articleHeight () {
      return { 'min-height': this.pageHeight }
    },
    offset () {
      return [this.pageWidth / 10, 18]
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
