<template>
	<div class="header">
		<h2>{{$t("navbar.navbar")}}</h2>
		<div class="language">
			<template>
				<el-select v-model="value" placeholder="请选择" @change="changeLanguage()">
					<el-option @change="changeLanguage" v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</template>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'NavBar',
		data() {
			return {
				options: [{
					value: '中文',
					label: '中文'
				}, {
					value: '英文',
					label: '英文'
				}],
				value: ''
			}
		},
		methods: {
			changeLanguage(){
				console.log("当前切换到的语言是：",this.value);
				let locale = this.$i18n.locale;
				locale == "en" ? this.$i18n.locale = "zh" : this.$i18n.locale = "en";
				console.log(locale);
			}
		}
	}
</script>

<style scoped>
	.header {
		width: 100%;
		height: 50px;
		line-height: 50px;
		background: pink;
	}
	h2 {
		height: 50px;
		line-height: 50px;
		margin-left: 20px;
		float: left;
	}
	.language {
		float: right;
		margin-right: 40px;
	}
</style>