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
		'$route' (newValue) {
			this.articleList = []
			const query = Bmob.Query("article");
			if(newValue.params.tag != undefined){
				query.equalTo("tag","==", newValue.params.tag);
			}
			query.order("-updatedAt");
			query.find().then(res => {
				//console.log(res)
				if(res.length > 0){
					for (let s of res) {
						//console.log(s)
						this.articleList.push(s)
					}
				}
			});
		}
	},
	created() {
		const query = Bmob.Query("article");
		if(this.$route.params.tag != undefined){
			query.equalTo("tag","==", this.$route.params.tag);
		}
		query.order("-updatedAt");
		query.find().then(res => {
			if(res.length > 0){
				for (let s of res) {
					this.articleList.push(s)
					window.sessionStorage.setItem(s.objectId,s.content)
				}
			}
		});
	}
}
</script>

<style scoped>
	div{
		width: 100%;
	}
</style>
