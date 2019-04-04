<template>
  <div>
    <HomeHead></HomeHead>
		<ArticleBody></ArticleBody>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHead from '@/components/HomeHead.vue'
import ArticleBody from '@/components/ArticleBody.vue'


export default {
  name: 'info',
	data() {
		return {
			
		}
	},
	created() {

	},
  components: {
    HomeHead,ArticleBody
  }
}
</script>

<style scoped>
	div{
		width: 100%;
	}
</style>
