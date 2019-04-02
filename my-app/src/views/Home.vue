<template>
  <div>
    <HomeHead></HomeHead>
		<HomeBody></HomeBody>
		<HomeFooter></HomeFooter>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHead from '@/components/HomeHead.vue'
import HomeBody from '@/components/HomeBody.vue'
import HomeFooter from '@/components/HomeFooter.vue'

export default {
  name: 'home',
  components: {
    HomeHead,HomeBody,HomeFooter
  }
}
</script>

<style scoped>
	div{
		width: 100%;
	}
</style>
