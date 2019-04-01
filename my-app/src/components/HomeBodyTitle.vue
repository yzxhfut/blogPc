<template>
	<ul>
		<li>
			<a href="/">{{title}}</a>
			<span>(Oct, 2018)</span>
		</li>
	</ul>
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
	ul {
		list-style-type: none;
		padding-inline-start: 0px;
	}
	li {
		margin-bottom: .8em;
	}
</style>
