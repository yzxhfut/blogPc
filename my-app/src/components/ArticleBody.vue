<template>
	<div class="container">
		<h1>{{title}}</h1>
		<mavon-editor class="mavon" v-html="content" :subfield="false" 
			:defaultOpen="defaultData" :toolbarsFlag="false" 
			:boxShadow="false"/>
	</div>
</template>

<script>
	export default {
		props: {
			content: String,
			title:String
		},
		data() {
			return {
				defaultData:"preview"
			}
		},
	}
</script>

<style scoped>
	.container {
		width: 960px;
		margin: 0 auto;
	}
	@media only screen and (max-width: 600px){
		.container {
			width: 100%;
		}
	}
	
	h1 {
		font-size: 1.5em;
		font-weight: bold;
		margin: 0.6em 0;
		text-align: center;
		padding-left: 0.67em;
		padding-right: 0.67em;
	}
	.mavon{
		padding-left: 1em;
		padding-right: 1em;
		min-height: 200px;
		margin-top: 1em;
		background-color: #FAFAFA;
	}
	.markdown-body p{
		padding: 0 !important;
	}
</style>
