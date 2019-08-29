<template>
	<div class="app">
		<!-- 为了让头部固定，先将它放在app.vue中 -->
		<!-- <NavBar /> -->
		<div class="main">
			<!-- <router-link to="/DataChange">DataChange</router-link>
			<router-link to="/ElementUi">ElementUi</router-link>
			<router-link to="/Vuexs">Vuexs</router-link> -->
			<div class="menu">
				<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
					:collapse="isCollapse">
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span slot="title">ElementUi相关</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="1-1" @click="goto('/ElementUi')">选项1</el-menu-item>
							<el-menu-item index="1-2">选项2</el-menu-item>
						</el-menu-item-group>
							<el-menu-item index="1-3">选项3</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="1-4">
							<span slot="title">选项4</span>
							<el-menu-item index="1-4-1">选项1</el-menu-item>
						</el-submenu>
					</el-submenu>
					<el-menu-item index="2" @click="goto('/DataChange')">
						<i class="el-icon-menu"></i>
						<span slot="title">组件传值</span>
					</el-menu-item>
					<el-menu-item index="4" @click="goto('Vuexs')">
						<i class="el-icon-setting"></i>
						<span slot="title">vuex相关</span>
					</el-menu-item>
				</el-menu>
			</div>
			<div class="section">
				<router-view />
			</div>
		</div>
	</div>
</template>

<script>
	import NavBar from "../NavBar/NavBar";
	import DataChange from "../DataChange/DataChange";
	import ElementUi from "../ElementUi/ElementUi";
	import Vuexs from "../Vuex/Vuex";
	export default {
		name: 'layout',
		data(){
			return {
				isCollapse: false
			}
		},
		components: {
			NavBar, DataChange, ElementUi, Vuexs
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			goto(path) {
				this.$router.replace(path);
			}
		}
	}
</script>

<style scoped>
	.app,.main {
		height: 100%;
	}
	.main {
		display: flex;
	}
	.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
		height: 100%;
    min-height: 400px;
  }
	/* .menu {
		float: left;
	}
	.section {
		float: right;
	} */
</style>