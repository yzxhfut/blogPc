<template>
  <q-layout view="lHh lpr fff" style="font-size: 1.1rem;" >
    <q-header elevated>
      <q-toolbar class="bg-primary text-white">
        <div class="col-2"></div>
        <q-toolbar-title>yzxBlog</q-toolbar-title>
        <q-btn flat :label="tags[0]" class="icon-padding" icon="mdi-home" size="lg" to="/"/>
        <q-btn flat :label="tags[1]" class="icon-padding" icon="mdi-chat-processing" size="lg" to="/comment" />
        <q-btn flat :label="tags[2]" class="icon-padding" icon="mdi-fire" size="lg" to="/about"/>
        <q-btn flat :label="tags[3]" class="icon-padding" icon="mdi-near-me" size="lg" to="/link" />
        <div class="col-2"/>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated>
        <q-toolbar class="bg-primary text-white justify-center">
          <q-toolbar-title shrink>Copyright © 2019 皖ICP备19005672号</q-toolbar-title>
        </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      tags: ['主页', '留言', '关于', '友链']
    }
  }
}
</script>

<style>
  .icon-padding{
    padding: 4px 8px;
  }
</style>
