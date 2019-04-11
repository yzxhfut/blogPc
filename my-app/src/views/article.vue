<template>
  <div>
		<HomeHead ref='headheight'></HomeHead>
		<ArticleBody :title="title" :content="content" :style="{minHeight: bodyheight+'px'}"></ArticleBody>
		<HomeFooter></HomeFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHead from '@/components/HomeHead.vue'
import ArticleBody from '@/components/ArticleBody.vue'
import HomeFooter from '@/components/HomeFooter.vue'


export default {
  name: 'info',
	data() {
		return {
			content:'',
			title:'',
			bodyheight:0
		}
	},
	created() {
		this.content = window.sessionStorage.getItem(this.$route.params.id)
		this.title = this.$route.params.title
	},
	mounted() {
		this.bodyheight = document.body.clientHeight-
			this.$refs.headheight.$el.clientHeight-32-16
	},
  components: {
    HomeHead,ArticleBody,HomeFooter
  }
}
</script>

<style scoped>
	div{
		width: 100%;
	}
</style>
