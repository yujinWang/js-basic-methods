<template>
	<div class="life_cycle">
		<h1>生命周期测试</h1>
		<button @click="changeMsg()">change</button>
		<h3>{{msg}}</h3>
	</div>
</template>

<script>
	export default {
		name: 'LifeCycle',
		data() {
			return {
				msg: 'TigerChain'
			}
		},
		methods: {
			changeMsg() {
				this.msg = 'TigerChain111'
			}
		},
		beforeCreate() {
			console.group("%c%s", "color:red", 'beforeCreate--实例创建前状态')
			console.log("%c%s", "color:blue", "el  :" + this.$el)
			console.log("%c%s", "color:blue", "data  :" + this.$data)
			console.log("%c%s", "color:blue", "message  :" + this.msg)
		},
		created() {
			console.group("%c%s", "color:red", 'created--实例创建完成状态')
			console.log("%c%s", "color:blue", "el  :" + this.$el)
			console.log("%c%s", "color:blue", "data  :" + this.$data)
			console.log("%c%s", "color:blue", "message  :" + this.msg)
		},
		beforeMount() {
			console.group("%c%s", "color:red", 'beforeMount--挂载之前的状态')
			console.log("%c%s", "color:blue", "el  :" + this.$el)
			console.log(this.$el);
			console.log("%c%s", "color:blue", "data  :" + this.$data)
			console.log("%c%s", "color:blue", "message  :" + this.msg)
		},
		mounted() {
			console.group("%c%s", "color:red", 'mounted--已经挂载的状态')
			console.log("%c%s", "color:blue", "el  :" + this.$el)
			console.log(this.$el);
			console.log("%c%s", "color:blue", "data  :" + this.$data)
			console.log("%c%s", "color:blue", "message  :" + this.msg)
		},
		beforeUpdate() {
			console.group("%c%s", "color:red", 'beforeUpdate--数据更新前的状态')
			console.log("%c%s", "color:blue", "el  :" + this.$el.innerHTML)
			console.log(this.$el);
			console.log("%c%s", "color:blue", "data  :" + this.$data)
			console.log("%c%s", "color:blue", "message  :" + this.msg)
			console.log("%c%s", "color:green", "真实的 DOM 结构:" + document.getElementById('container').innerHTML)
		},
		updated() {
			console.group("%c%s", "color:red", 'updated--数据更新完成时状态')
			console.log("%c%s", "color:blue", "el  :" + this.$el.innerHTML)
			console.log(this.$el);
			console.log("%c%s", "color:blue", "data  :" + this.$data)
			console.log("%c%s", "color:blue", "message  :" + this.msg)
			console.log("%c%s", "color:green", "真实的 DOM 结构:" + document.getElementById('container').innerHTML)
		},
		activated() {
			console.group("%c%s", "color:red", 'activated-- keep-alive 组件激活时调用')
			console.log("%c%s", "color:blue", "el  :" + this.$el)
			console.log(this.$el);
			console.log("%c%s", "color:blue", "data  :" + this.$data)
			console.log("%c%s", "color:blue", "message  :" + this.msg)
		},
		deactivated() {
			console.group("%c%s", "color:red", 'deactivated-- keep-alive 停用时调用')
			console.log("%c%s", "color:blue", "el  :" + this.$el)
			console.log(this.$el);
			console.log("%c%s", "color:blue", "data  :" + this.$data)
			console.log("%c%s", "color:blue", "message  :" + this.msg)
		},
		beforeDestroy() {
			console.group("%c%s", "color:red", 'beforeDestroy-- vue实例销毁前的状态')
			console.log("%c%s", "color:blue", "el  :" + this.$el)
			console.log(this.$el);
			console.log("%c%s", "color:blue", "data  :" + this.$data)
			console.log("%c%s", "color:blue", "message  :" + this.msg)
		},
		destroyed() {
			console.group("%c%s", "color:red", 'destroyed-- vue实例销毁完成时调用')
			console.log("%c%s", "color:blue", "el  :" + this.$el)
			console.log(this.$el);
			console.log("%c%s", "color:blue", "data  :" + this.$data)
			console.log("%c%s", "color:blue", "message  :" + this.msg)
		}
	}
</script>

<style scoped>
	.life_cycle {
		padding: 10px;
	}
	h3 {
		color: red;
		margin: 10px 0;
	}
</style>