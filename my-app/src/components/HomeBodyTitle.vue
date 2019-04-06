<template>
	<div>
		<router-link class="router-link" :to="url">{{title}}</router-link>
		<span> ({{dateNew}})</span>
	</div>
</template>

<script>
export default {
  name: 'HomeBodyTitle',
  props: {
	title: String,
	date: String,
	id:String
  },
  computed: {
	dateNew() {
		return this.date.split(' ')[0]
	},
	url(){
		//window.sessionStorage.setItem('title',this.title)
		//window.sessionStorage.setItem('title',6)
		//console.log(this.title)
		return '/info/'+this.id+'/'+this.title
	},
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
