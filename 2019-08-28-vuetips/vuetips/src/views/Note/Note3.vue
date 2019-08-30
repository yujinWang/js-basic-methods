<template>
	<div class="note3">
		<h2>vue-i18n的使用</h2>
		<p>国际化的使用，首先需要安装执行npm i vue-i18n --save</p>
		<p>之后在main.js中进行引用，import VueI18n from "vue-i18n";</p>
		<p>const i18n = new VueI18n({
				locale: "en",
				messages: {
					zh: {
						message: {
							hello: "你好"
						}
					},
					en: {
						message: {
							hello: "hello"
						}
						}
					}
				})
		</p>
		<p>如上是定义中英文，然后在new Vue中添加i18n</p>
		<p>之后是进行Vue.use(VueI18n);这异步如果不添加会报如下错误</p>
		<p>Cannot read property 'config' of undefined</p>
		<p>除了上面的那种配置方法之外，还可以使用window.Vue=Vue来实现此报错的解决</p>
	</div>
</template>

<script>
	export default {
		name: 'Note3'
	}
</script>

<style scoped>
	.note3 {
		padding: 10px;
	}
</style>