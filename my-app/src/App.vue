<template>
  <div id="app">
    <router-view v-if="isRouterAlive"/>
  </div>
</template>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		text-align: center;
		color: #2c3e50;
		display: flex;
		justify-content: center;
		height: 100%;
	}
	
</style>

<script>
	export default {
		provide () {
			return {
				reload: this.reload
			}
		},
		data () {
			return {
				isRouterAlive: true
			}
		},
		methods: {
			reload () {
				this.isRouterAlive = false
				this.$nextTick(function () {
				this.isRouterAlive = true
				})
			}
		}
	}
</script>
