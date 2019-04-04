<template>
	<div class="container">
		<h2 class="hr">
			<span>Content</span>
		</h2>
		<HomeBodyTitle v-for="(article,index) in articles" 
			v-bind:key="index"
			v-bind:title="article.title"
		></HomeBodyTitle>
		<el-pagination
			:current-page="page"
			:page-size="pagesize"
			layout="prev, pager, next"
			:total="total"
			@current-change="handlePageChange"
			>
		</el-pagination>
	</div>
	
</template>

<script>
import HomeBodyTitle from '@/components/HomeBodyTitle.vue'


export default {
  name: 'homebody',
  props: {
  	articles: Array
  },
  data() {
	return {
		posts:[],
		page:1,
		pagesize:20,
	}
  },
  computed: {
		lists() {
			let lists =[];
			for(let i = (this.page -1) * this.pagesize ; i < this.page * this.pagesize ; i ++){
				if(i < this.articles.length){
					lists.push(this.articles[i])
				}
			}
			return lists 
		},
		total(){
			return this.articles.length
		}
  },
  methods: {
	handlePageChange(val) {
		this.page = val
	}
  },
  created() {
// 		for(let i = 1 ;i < 100 ; i++){
// 			this.posts.push({id:i,title:"随机测试"+i})
// 		}
  },
  components: {
	HomeBodyTitle
  }
}
</script>

<style scoped>
	.container {
		width: 640px;
		margin: 0 auto;
	}
	@media only screen and (max-width: 600px){
		.container {
			width: 100%;
		}
	}
	
	.hr {
		height: 0;
		font-size: 1em;
		line-height: 0;
		text-transform: uppercase;
		text-align: center;
		border-bottom: 1px solid #A7ADBA;
		margin-top: 2em;
		margin-bottom: 1.2em;
	}
	h2 {
		font-size: 1.5em;
		font-weight: bold;
	}
	.hr span {
		background-color: #fff;
		padding-left: .5em;
		padding-right: .5em;
		color: #A7ADBA;
	}
</style>
