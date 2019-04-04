<template>
	<div>
		<router-link class="router-link" to="/info">{{title}}</router-link>
		<span> ({{dateNew}})</span>
	</div>
</template>

<script>
export default {
  name: 'HomeBodyTitle',
  props: {
	title: String,
	date: String
  },
  computed: {
  	dateNew() {
  		return this.date.split(' ')[0]
  	}
  },
}
</script>

<style scoped>
	div {
		margin-bottom: .8em;
		padding-left: 2em;
		padding-right: 2em;
		text-align: left;
	}
	.router-link{
		color: black;
		text-decoration: none;
	}
</style>
