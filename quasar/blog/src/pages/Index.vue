<template>
    <q-page>
      <p class="space"></p>
      <div class="row justify-center items-start">
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

      <p class="space"></p>
      <div class="row justify-center items-start">
        <q-card bordered class="my-card" :class="width">
          <q-toolbar class="bg-white text-black">
            <div class="card-title">文章列表</div>
          </q-toolbar>
          <q-separator />
          <q-card-section>
            <q-list :style="fontsize" v-for="n in 20" :key="n">
              <q-item >
                <q-item-section class="item-row">
                    <q-item-label @click="test" class="title">批量下载QQ空间相册的若干方法</q-item-label>
                    <q-chip :dense="!pc" clickable color="bookmark" text-color="black" label="javascript" />
                    <q-chip :dense="!pc" clickable color="bookmark" text-color="black" label="vue" />
                </q-item-section>

               <q-item-section side :top="!pc">
                  <q-item-label>2019-5-26</q-item-label>
                  <!-- <q-chip :dense="!pc" icon="remove_red_eye" color="bookmark" text-color="black" label="66" /> -->
               </q-item-section>
              </q-item>
              <q-separator spaced inset />
            </q-list>
          </q-card-section>
        </q-card>
      </div>
      <p class="space"></p>
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
  computed: {
    width () {
      return this.$q.platform.is.desktop ? 'col-6' : 'col-11'
    },
    pc () {
      return this.$q.platform.is.desktop
    },
    fontsize () {
      return this.$q.platform.is.desktop ? { 'font-size': 1.2 + 'rem' } : { 'font-size': 1 + 'rem' }
    }
  },
  methods: {
    test () {
      alert(666)
    }
  }
}
</script>
