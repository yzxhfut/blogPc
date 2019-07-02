<template>
    <q-page style="padding: 0.5rem;">
      <div class="row justify-center items-start margin-bottom">
        <q-card bordered class="my-card" :class="width">
          <q-toolbar class="bg-white text-black">
            <div class="card-title">博客推荐</div>
          </q-toolbar>
          <q-separator />
          <q-card-section :class="fontsize">
            <q-list v-for="(blog, index) in blogs" :key="index">
              <q-item clickable v-ripple @click="jump(blog.domain)">
                <q-item-section avatar>
                  <q-avatar square>
                    <img :src="blog.img">
                  </q-avatar>
                </q-item-section>
                <q-item-section>{{blog.name}}</q-item-section>
              </q-item>

              <q-separator />
            </q-list>
          </q-card-section>
        </q-card>
      </div>

      <div class="row justify-center items-start">
        <q-card bordered class="my-card" :class="width">
          <q-toolbar class="bg-white text-black">
            <div class="card-title">社区推荐</div>
          </q-toolbar>
          <q-separator />
          <q-card-section :class="fontsize">
            <q-list v-for="(web, index) in webs" :key="index">
              <q-item clickable v-ripple @click="jump(web.domain)">
                <q-item-section avatar>
                  <q-avatar square>
                    <img :src="web.img">
                  </q-avatar>
                </q-item-section>
                <q-item-section>{{web.name}}</q-item-section>
              </q-item>
              <q-separator />
            </q-list>
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
import { openURL } from 'quasar'
export default {
  name: 'PageAbout',
  data () {
    return {
      blogs: [],
      webs: []
    }
  },
  computed: {
    width () {
      return this.$q.platform.is.desktop ? 'col-6' : 'col-12'
    },
    fontsize () {
      return this.$q.platform.is.desktop ? 'pc-font-size' : 'no-pc-font-size'
    }
  },
  methods: {
    jump (url) {
      openURL(url)
    }
  },
  created () {
    var that = this
    getLink(this).then(res => {
      for (var i = 0; i < res.length; i++) {
        if (res[i].type === 'blog') {
          that.blogs.push(res[i])
        } else {
          that.webs.push(res[i])
        }
      }
      that.$q.loading.hide()
    })
  }
}
async function getLink (context) {
  context.$q.loading.show()
  const query = context.Bmob.Query('link')
  query.order('-createdAt')
  var res = await query.find()
  return res
}
</script>
