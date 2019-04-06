<template>
	<div>
		<img src="../assets/guiqie.jpg"/>
		<p class="p">Zhengxiang Yue</p>
		<p class="p">Software Engineer. Blogging about tech and life. 
			<router-link v-if="login" class="router-link" to="/edit">add</router-link>
			<el-button v-else type="text" @click="dialogFormVisible = true">login</el-button>
					
			<el-dialog title="登录" :visible.sync="dialogFormVisible" width="50%" style="padding: 0 10px;">
				<el-form>
					<el-form-item label="账号" :label-width="formLabelWidth">
						<el-input v-model="username" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="密码" :label-width="formLabelWidth">
						<el-input type="password" v-model="password" autocomplete="off"></el-input>
					</el-form-item>
				</el-form>
				<div slot="footer">
					<el-button type="primary" @click="submit">登 录</el-button>
					<p>{{tip}}</p>
				</div>
			</el-dialog>
		</p>
		<el-button type="text" @click="chooseTag('home')">home</el-button>
		<el-button v-for="(item,index) in tagList" :key="index" type="text" @click="chooseTag(item)">{{item}}</el-button>
	</div>
	
</template>

<script>
import Bmob from "hydrogen-js-sdk";
	export default {
		props: {
			
		},
		data() {
			return {
				dialogFormVisible: false,
				username:'',
				password:'',
				formLabelWidth: '50px',
				login:false,
				tagList:[],
				tip:''
			}
		},
		methods: {
			submit() {
				var that = this
				Bmob.User.login(that.username,that.password).then(res => {
					//console.log(res)
					if(res){
						that.dialogFormVisible = false
						window.sessionStorage.setItem("user","true")	
						that.$router.push('/edit')
						that.$router.back(-1)
					}
					}).catch(err => {
						//console.log(err)
						if(err.code === 101)
							that.tip = '用户名或密码错误'
				});
			},
			chooseTag(item){
				if(item!='home'){
					this.$router.push('/home/'+item)
				}else{
					this.$router.push('/')
				}
				//console.log(item)
			}
		},
		created() {
			this.login = window.sessionStorage.getItem("user") === "true" ? true : false
			const query = Bmob.Query("tag");
			query.find().then(res => {
				for (let s of res) {
					this.tagList.push(s.tagName)
				}
				//console.log(this.tagList)
			});
		}
	}
</script>

<style >
	div {
		text-align: center;
	}
	img {
		width: 128px; 
		height: 128px; 
		background-size: cover; 
		border-radius: 50%; 
		margin: 0 auto;
		margin-top: 2em;
	}
	ul {
		list-style-type: none;
		padding-left: 2em;
		padding-right: 2em;
	}
	li {
		display: inline-block;
		margin: 0 10px;
	}
	.p {
		padding-left: 2em;
		padding-right: 2em;
	}
	@media only screen and (max-width: 600px){
		.el-dialog {
			width: 90%!important;
		}
	}
	.el-dialog{
		margin-top: 30vh!important;
		border-radius: 5%;
	}
	.el-button--text{
		font-size: 1em;
		text-decoration: underline;
		padding: 0;
		color: blue;
		margin-left: 10px;
	}
	.el-dialog__body {
		padding: 0 20px;
		color: #606266;
		font-size: 14px;
	}

	.el-button--primary{
		width: 90%;
	}
	.router-link {color: blue;}
	.router-link-active {color:red;}
	.home{
		color:blue;
	}
</style>
