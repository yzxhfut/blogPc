<template>
	<q-layout view="lHh lpr fff"  >
		<q-header elevated>
			<q-toolbar class="bg-primary text-white ">
        <div v-if="pc" class="col-3"></div>
        <q-avatar>
          <img src="statics/icons/favicon-32x32.png">
        </q-avatar>
        <q-toolbar-title shrink>yzxBlog</q-toolbar-title>
        <div v-if="pc" class="col-3"/>
        <q-btn flat :label="tags[0]" icon="home" size="lg" to="/"/>
        <q-btn flat :label="tags[1]" icon="comment" size="lg" to="/comment" />
        <q-btn flat :label="tags[2]" icon="near_me" size="lg" to="/about"/>
			</q-toolbar>
		</q-header>

		<q-page-container>
			<router-view />
		</q-page-container>

    <q-footer elevated>
        <q-toolbar class="bg-primary text-white justify-center">
          <q-toolbar-title shrink :style="fontsize">Copyright © 2019 皖ICP备19005672号</q-toolbar-title>
        </q-toolbar>
    </q-footer>
	</q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      pc: this.$q.platform.is.desktop
    }
  },
  computed: {
    tags () {
      return this.$q.platform.is.desktop ? ['主页', '留言', '关于'] : ['', '', '']
    },
    fontsize () {
      return this.$q.platform.is.desktop ? { 'font-size': 1.2 + 'rem' } : { 'font-size': 1 + 'rem' }
    }
  },
  methods: {
    openURL
  }
}
</script>

<style lang="stylus">
</style>
