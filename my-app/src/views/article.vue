<template>
  <div>
    <HomeHead></HomeHead>
		<ArticleBody :title="title" :content="content"></ArticleBody>
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
			title:''
		}
	},
	created() {
		//console.log(this.$route.params.title)
		this.content = window.sessionStorage.getItem(this.$route.params.id)
		this.title = this.$route.params.title
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
