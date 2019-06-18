<template>
    <q-page style="padding: 0.5rem;">
      <div class="row justify-center items-start margin-bottom">
        <q-card bordered class="my-card" :class="width">
          <q-toolbar class="bg-white text-black">
            <div class="card-title">博客推荐</div>
          </q-toolbar>
          <q-separator />
          <q-card-section :class="fontsize">
            <q-list>
              <q-item clickable v-ripple @click="jump('http://blog.tmaize.net')">
                <q-item-section avatar>
                  <q-avatar square>
                    <img src="http://blog.tmaize.net/static/img/logo.jpg">
                  </q-avatar>
                </q-item-section>
                <q-item-section>TMaize Blog</q-item-section>
              </q-item>

              <q-separator />
              <q-item clickable v-ripple @click="jump('https://achuan.io/')">
                <q-item-section avatar>
                  <q-avatar square>
                    <img src="https://achuan.io/assets/article/index/head.png">
                  </q-avatar>
                </q-item-section>
                <q-item-section>阿川的博客</q-item-section>
              </q-item>

              <q-separator />
              <q-item clickable v-ripple @click="jump('https://lutaonan.com/')">
                <q-item-section avatar>
                  <q-avatar square>
                    <img src="https://bstatic.djyde.com/assets/006tKfTcgy1fkuuijv4pwj30ku0na3zq.jpg">
                  </q-avatar>
                </q-item-section>
                <q-item-section>Randy's blog</q-item-section>
              </q-item>

              <q-separator />
              <q-item clickable v-ripple @click="jump('https://www.geek-era.com/')">
                <q-item-section avatar>
                  <q-avatar square>
                    <img src="https://secure.gravatar.com/avatar/50eaa79b7803203f7152dd26113d9a97?s=100&d=identicon&r=g&fd=">
                  </q-avatar>
                </q-item-section>
                <q-item-section>春风十里的博客</q-item-section>
              </q-item>

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
            <q-list>
              <q-item clickable v-ripple @click="jump('https://www.52pojie.cn/')">
                <q-item-section avatar>
                  <q-avatar square>
                    <img src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=433379261,1983014663&fm=58&s=03D1CB20DBC3B882669AD510030050DB&bpow=121&bpoh=75">
                  </q-avatar>
                </q-item-section>
                <q-item-section>吾爱破解</q-item-section>
              </q-item>

              <q-separator />
              <q-item clickable v-ripple @click="jump('https://segmentfault.com/')">
                <q-item-section avatar>
                  <q-avatar square>
                    <img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3717357451,2588732571&fm=58&s=AB8A7A22C4A0EF0119C0B55E030010B1&bpow=121&bpoh=75">
                  </q-avatar>
                </q-item-section>
                <q-item-section>思否论坛</q-item-section>
              </q-item>

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
  }
}
</script>
