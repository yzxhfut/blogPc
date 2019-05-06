<template>
	<div>
		<HomeHead></HomeHead>
		<EditBody></EditBody>
	</div>
</template>

<script>
import HomeHead from '@/components/pc/HomeHead.vue'
import EditBody from '@/components/pc/EditBody.vue'

export default {
	name: 'edit',
	data() {
		return {
			
		}
	},
	components: {
		HomeHead,EditBody
	}
}
</script>

<style scoped>
	div{
		width: 100%;
	}
</style>
