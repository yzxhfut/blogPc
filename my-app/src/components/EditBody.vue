<template>
	<div class="container">
		<p></p>
		<el-form class='form' label-width="50px">
			<el-form-item label="标题" prop="checktitle">
				<el-input required v-model="title" placeholder="请输入标题"></el-input>
			</el-form-item>
			<el-form-item label="标签" prop="checktag">
				<el-select required v-model="tag" placeholder="请选择标签">
					<el-option v-for="(item,index) in tags" :key='index' :label="item" :value="item"></el-option>
				</el-select>
			</el-form-item>
		</el-form>
		<mavon-editor class="mavon" codeStyle='vs2015' :toolbars="toolbars" v-model="value" @change="getHtml"/>
		<button class="btn" @click="submit">提交</button>
	</div>
</template>

<script>
//import Bmob from "hydrogen-js-sdk";
	export default {
		data() {
			return {
				value:'',
				title:'',
				tags:[],
				tag:'',
				content:'',
				defaultData: "preview",
				toolbars: {
					bold: true, // 粗体
					italic: true, // 斜体
					header: true, // 标题
					underline: true, // 下划线
					superscript: true, // 上角标
					subscript: true, // 下角标
					quote: true, // 引用
					ol: true, // 有序列表
					ul: true, // 无序列表
					link: true, // 链接
					imagelink: true, // 图片链接
					code: true, // code
					fullscreen: true, // 全屏编辑
					htmlcode: true,
					help: true, // 帮助
					undo: true, // 上一步
					redo: true, // 下一步
					trash: true, // 清空
					save: true, // 保存（触发events中的save事件）
					alignleft: true, // 左对齐
					aligncenter: true, // 居中
					alignright: true, // 右对齐
					subfield: true, // 单双栏模式
					preview: true, // 预览
				},
				
			};
		},
		methods: {
			getHtml(value, render) {
				this.content = render
				this.value = value
			},
			submit(){
				let id = window.sessionStorage.getItem('edit')
				if(this.title!='' && this.tag!=''){
					if(id){
						this.$http.post('http://114.115.143.235:1080/edit',
							{id:id,title: this.title,tag:this.tag,content:this.content,value:this.value}).then(function(res){
							if(res.body){
								this.$alert('修改成功', '提示', {
									confirmButtonText: '确定',
									showClose:false,
								});
							}
						},function(){
							this.$alert('请求处理失败', '提示', {
								confirmButtonText: '确定',
								showClose:false,
							});
						});
					}else{
						this.$http.post('http://114.115.143.235:1080/article',
							{title: this.title,tag:this.tag,content:this.content,value:this.value}).then(function(res){
							if(res.body){
								this.$alert('添加成功', '提示', {
									confirmButtonText: '确定',
									showClose:false,
								});
							}
						},function(){
							this.$alert('请求处理失败', '提示', {
								confirmButtonText: '确定',
								showClose:false,
							});
						});
					}
				}else{
					this.$alert('标题或标签不能为空', '提示', {
						confirmButtonText: '确定',
						showClose:false,
					});
				}
				
			}
		},
		created() {
			let id = window.sessionStorage.getItem('edit')
			if(id){
				this.$http.get('http://114.115.143.235:1080/edit',{params: {id: id}}).then(function(res){
					//console.log(res.body)
					if(res.body){
						this.title = res.body.title
						this.value = res.body.value
						this.tag = res.body.tag
					}
				},function(){
					this.$message({
						type: 'fail',
						message: '连接失败!'
					});
				});
			}
			this.$http.get('http://114.115.143.235:1080/head').then(function(res){
				if(res.body.length > 0){
					for (let s of res.body) {
						this.tags.push(s.tagName)
					}
				}
			},function(){
				this.$alert('请求处理失败', '提示', {
					confirmButtonText: '确定',
					showClose:false,
				});
			});
		},
		destroyed() {
			window.sessionStorage.removeItem('edit')
		}
	};
</script>

<style>
	.container {
		width: 960px;
		margin: auto;
	}
	@media only screen and (max-width: 600px){
		.container {
			width: 100%;
		}
		.form{
			width: 80% !important;
		}
		.el-button--primary{
			width: 80% !important;
		}
		.el-message-box{
			width: 80% !important;
		}
		.btn{
			width: 80% !important;
		}
	}
	.mavon{
		min-height: 330px;
		margin: 2em;
	}
	.form{
		width: 50%;
		margin: auto;
	}
	.el-select{
		width: 100%;
	}
	.el-select-dropdown__item{
		display: list-item;
	}
	.btn{
		color: #FFF;
		background-color: #409EFF;
		border-color: #409EFF;
		width: 50% ;
		height: 3em;
		margin: 1em 0;
		font-size: 16px;
		border-radius: 4px;
		line-height: 1;
	}
	.el-message-box{
		width: 50%;
	}
	.el-message-box__btns{
		width: 40%;
		margin: auto;
		display: flex;
		justify-content: center;
	}
	p{
		padding: 0;
	}
</style>
