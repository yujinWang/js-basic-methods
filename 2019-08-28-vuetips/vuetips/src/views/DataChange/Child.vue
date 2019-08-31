<template>
	<div>
		<h1>我是子组件，通过props的方式接受到父组件中的内容，看下面</h1>
		<h2 style="color: red;">{{msg}}</h2>
		<button @click="sendMsg">传递数据到父组件</button>
	</div>
</template>

<script>
	export default {
		name: 'Child',
		data() {
			return {
				childMsg: "我是子组件中的数据，传递到了父组件中"
			}
		},
		props: {
			msg: {
				type: String,
				default() {
					return "";
				}
			}
		},
		methods: {
			sendMsg() {
				this.$emit("emitInfo",this.childMsg);
			}
		}
	}
</script>

<style scoped>
	button {
		margin-top: 20px;
		margin-bottom: 20px;
	}
</style>