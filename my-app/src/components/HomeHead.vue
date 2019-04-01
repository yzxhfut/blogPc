<template>
	<div>
		<img src="../assets/guiqie.jpg"/>
		<p >Zhengxiang Yue</p>
		<p >Software Engineer. Blogging about tech and life.</p>
		<li><a href="/">vue</a></li>
		<li><a href="/">js</a></li>
		<li><a href="/">node</a></li>
		<li><a href="/">blockchain</a></li>
		<li><a href="/">other</a></li>
	</div>
	
</template>

<script>
	export default {
		data() {
			return {
		
			}
		},
	}
</script>

<style scoped>
	div {
		text-align: center;
		margin-top: 4em;
	}
	img {
		width: 128px; 
		height: 128px; 
		background-size: cover; 
		border-radius: 50%; 
		margin: 0 auto;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		display: inline-block;
		margin: 0 10px;
	}
</style>
