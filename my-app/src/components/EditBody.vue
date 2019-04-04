<template>
	<div class="container">
		<mavon-editor class="mavon" :toolbars="toolbars" v-model="value" />
	</div>
</template>

<script>
	
	export default {
		data() {
			return {
				value: '',
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
				}
			};
		},
	};
</script>

<style scoped>
	.container {
		width: 960px;
		margin: 0 auto;
	}
	@media only screen and (max-width: 600px){
		.container {
			width: 100%;
		}
	}
	.mavon{
		min-height: 330px
	}
</style>
