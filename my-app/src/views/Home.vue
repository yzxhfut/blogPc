<template>
  <div>
		<HomeHead ref='headheight'></HomeHead>
		<HomeBody :articles="articleList" :style="{minHeight: bodyheight+'px'}"></HomeBody>
		<HomeFooter></HomeFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHead from '@/components/HomeHead.vue'
import HomeBody from '@/components/HomeBody.vue'
import HomeFooter from '@/components/HomeFooter.vue'


export default {
  name: 'home',
	data() {
		return {
			articleList:[],
			bodyheight:0,
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
			this.bodyheight = document.body.clientHeight-
				this.$refs.headheight.$el.clientHeight-32-0.8*16-32
			this.articleList = []
			this.$http.get('http://114.115.143.235:1080/home',{params: 
				{tag: newValue.params.tag}}).then(function(res){
				if(res.body.length > 0){
					for (let s of res.body) {
						this.articleList.push(s)
					}
				}
			},function(){
				this.$message({
					type: 'fail',
					message: '连接失败!'
				});
			});
		}
	},
	created() {
		this.$http.get('http://114.115.143.235:1080/home',{params: {tag: this.$route.params.tag}}).then(function(res){
            if(res.body.length > 0){
				for (let s of res.body) {
				this.articleList.push(s)
				window.sessionStorage.setItem(s.objectId,s.content)
				}
            }
		},function(){
			this.$message({
				type: 'fail',
				message: '连接失败!'
			});
		});
	},
	mounted() {
		this.bodyheight = document.body.clientHeight-
			this.$refs.headheight.$el.clientHeight-32-32-0.8*16
	}
}
</script>

<style scoped>
	div{
		width: 100%;
	}
</style>
