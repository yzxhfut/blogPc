<template>
  <div>
    <HomeHead></HomeHead>
	<HomeBody :articles="articleList"></HomeBody>
	<HomeFooter></HomeFooter>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHead from '@/components/HomeHead.vue'
import HomeBody from '@/components/HomeBody.vue'
import HomeFooter from '@/components/HomeFooter.vue'
import Bmob from "hydrogen-js-sdk";

export default {
  name: 'home',
	data() {
		return {
			articleList:[]
		}
	},
	components: {
		HomeHead,HomeBody,HomeFooter
	},
	computed: {
		tag() {
			return this.$route.query.tag
		},
	},
	watch: {
		'$route' (newValue, oldValue) {
			this.articleList = []
			console.log(newValue.params.tag)
			const query = Bmob.Query("article");
			if(newValue.params.tag != undefined){
				query.equalTo("tag","==", newValue.params.tag);
			}
			query.find().then(res => {
				console.log(res)
				if(res.length > 0){
					for (let s of res) {
						this.articleList.push(s)
					}
				}
			});
		}
	},
	created() {
		const query = Bmob.Query("article");
		query.find().then(res => {
			if(res.length > 0){
				for (let s of res) {
					this.articleList.push(s)
				}
			}
		});
	},
}
</script>

<style scoped>
	div{
		width: 100%;
	}
</style>
