<template>
  <div>
    <HomeHead></HomeHead>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHead from '@/components/HomeHead.vue'

export default {
  name: 'article',
  components: {
    HomeHead
  }
}
</script>

<style scoped>
	div{
		width: 100%;
	}
</style>
