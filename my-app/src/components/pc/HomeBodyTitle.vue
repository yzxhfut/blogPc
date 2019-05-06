<template>
	<div>
		<router-link class="router-link" :to="url">{{title}}</router-link>
		<span class="date"> ({{dateNew}})</span>
		<template v-if="login">
			<i class="el-icon-edit" @click="edit"></i>
			<i class="el-icon-delete" @click="del"></i>	
		</template>
	</div>
</template>

<script>
export default {
	name: 'HomeBodyTitle',
	props: {
		title: String,
		date: String,
		id:String
	},
	data() {
		return {
			login: false
		}
	},
	inject:['reload'],
	computed: {
		dateNew() {
			return this.date.split(' ')[0]
		},
		url(){
			return '/info/'+this.id+'/'+this.title
		},
	},
	methods:{
		edit(){
			window.sessionStorage.setItem('edit',this.id)
			this.$router.push('/edit')
		},
		del(){
			this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				center:true,
				type: 'warning'
			}).then(() => {
				this.$http.get('https://yzxhfut.top:1088/delete',{params: 
					{id: this.id}}).then(function(res){
						if(res.body == 'success'){
							this.reload()
							this.$message({
								type: 'success',
								message: '删除成功'
							});
						}else{
							this.$message({
								type: 'fail',
								message: '删除失败'
							});
						}
				},function(){
					this.$message({
						type: 'fail',
						message: '连接失败!'
					});
				});
			}).catch(() => {});
		}
	},
	created() {
		this.login = window.sessionStorage.getItem("user") === "true" ? true : false
	}
}
</script>

<style scoped>
	div {
		margin-bottom: .8em;
		padding-left: 2em;
		padding-right: 2em;
		text-align: left;
	}
	.router-link{
		color: black;
		text-decoration: underline;
	}
	.date{
		margin-right: 10px;
	}
	.el-icon-edit{
		margin-right: 10px;
	}
</style>
