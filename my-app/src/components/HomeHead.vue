<template>
	<div>
		<img src="../assets/guiqie.jpg"/>
		<p >Zhengxiang Yue</p>
		<p >Software Engineer. Blogging about tech and life. <router-link class="router-link" to="/login">login</router-link></p>
		<ul>
			<li><router-link class="router-link" to="/article">vue</router-link></li>
			<li><router-link class="router-link" to="/">js</router-link></li>
			<li><router-link class="router-link" to="/blockchain">blockchain</router-link></li>
			<li><router-link class="router-link" to="/other">other</router-link></li>
		</ul>
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
		padding-left: 2em;
		padding-right: 2em;
	}
	li {
		display: inline-block;
		margin: 0 10px;
	}
	p {
		padding-left: 2em;
		padding-right: 2em;
	}
	.router-link {color: blue;}
	.router-link-active {color:red;}
</style>
