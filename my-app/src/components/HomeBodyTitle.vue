<template>
	<div>
		<router-link class="router-link" to="/">{{title}}</router-link>
		<span>(Oct, 2018)</span>
	</div>
</template>

<script>
export default {
  name: 'HomeBodyTitle',
  props: {
	title: String
  }
}
</script>

<style scoped>
	div {
		margin-bottom: .8em;
		padding-left: 2em;
		padding-right: 2em;
	}
	.router-link{
		color: black;
		text-decoration: none;
	}
</style>
