<template>
	<div class="article">
		<h1>{{title}}</h1>
		<mavon-editor codeStyle='vs' class="mavon" v-html="content" :subfield="false" 
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

<style>
	
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
	.markdown-body .highlight pre, .markdown-body pre{
		background-color: blanchedalmond !important;
	}
</style>
