<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
	display: flex;
	justify-content: center;
	margin:0;
	padding:0;
}
</style>

<script>
	export default {
			beforeCreate () {
			document.querySelector('body').setAttribute('style', 'margin:0')
		},
	}
</script>
