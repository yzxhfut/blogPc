<template>
  <q-layout view="lHh lpr fff"  >
    <q-header elevated>
      <q-toolbar class="bg-primary text-white ">
        <div v-if="pc" class="col-3"></div>
        <q-avatar>
          <img src="statics/icons/favicon-32x32.png">
        </q-avatar>
        <q-toolbar-title>yzxBlog</q-toolbar-title>

        <q-btn flat :label="tags[0]" class="icon-padding" icon="home" :size="iconSize" to="/"/>
        <q-btn flat :label="tags[1]" class="icon-padding" icon="notes" :size="iconSize" to="/comment" />
        <q-btn flat :label="tags[2]" class="icon-padding" icon="whatshot" :size="iconSize" to="/about"/>
        <q-btn flat :label="tags[3]" class="icon-padding" icon="near_me" :size="iconSize" to="/link" />
        <div v-if="pc" class="col-3"/>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated>
        <q-toolbar class="bg-primary text-white justify-center">
          <q-toolbar-title shrink :class="fontsize">Copyright © 2019 皖ICP备19005672号</q-toolbar-title>
        </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      pc: this.$q.platform.is.desktop
    }
  },
  computed: {
    tags () {
      return this.$q.platform.is.desktop ? ['主页', '留言', '关于', '友链'] : ['', '', '', '']
    },
    fontsize () {
      return this.$q.platform.is.desktop ? 'pc-font-size' : 'no-pc-font-size'
    },
    iconSize () {
      return this.$q.platform.is.desktop ? 'lg' : 'md'
    }
  },
  methods: {
  }
}
</script>

<style>
  .icon-padding{
    padding: 4px 8px;
  }
</style>
