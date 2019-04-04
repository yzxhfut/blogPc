<template>
	<div class="container">
		<h1 class="title">测试</h1>
		<mavon-editor class="mavon" v-html="value" :subfield="false" 
			:defaultOpen="defaultData" :toolbarsFlag="false" 
			:boxShadow="false"/>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value: `<blockquote>
								<p>你好</p>
								</blockquote>
								<p><code>java</code></p>`,
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
		text-align: left;
		padding-left: 0.67em;
		padding-right: 0.67em;
	}
	.mavon{
		padding-left: 1em;
		padding-right: 1em;
	}
</style>
