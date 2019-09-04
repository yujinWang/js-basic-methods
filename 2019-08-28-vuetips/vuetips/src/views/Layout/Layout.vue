<template>
	<div class="app">
		<!-- 为了让头部固定，先将它放在app.vue中 -->
		<!-- <NavBar /> -->
		<div class="main">
			<!-- <router-link to="/DataChange">DataChange</router-link>
			<router-link to="/ElementUi">ElementUi</router-link>
			<router-link to="/Vuexs">Vuexs</router-link> -->
			<!-- 左侧导航菜单 -->
			<div class="menu">
				<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
					:collapse="isCollapse">
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span slot="title">{{$t("menus.element")}}</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="1-1" @click="goto('/ElementUi')">表格测试</el-menu-item>
							<el-menu-item index="1-2">选项2</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group>
							<el-menu-item index="1-3">选项3</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-menu-item index="2" @click="goto('/DataChange')">
						<i class="el-icon-menu"></i>
						<span slot="title">{{$t("menus.componentValue")}}</span>
					</el-menu-item>
					<el-menu-item index="4" @click="goto('/Vuexs')">
						<i class="el-icon-setting"></i>
						<span slot="title">{{$t("menus.vuexs")}}</span>
					</el-menu-item>
					<el-submenu index="6">
						<template slot="title">
							<i class="el-icon-edit"></i>
							<span slot="title">{{$t("menus.noteRecord")}}</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="6-1" @click="goto('/Notes1')">页面设计</el-menu-item>
							<el-menu-item index="6-2" @click="goto('/Notes2')">VueRouter</el-menu-item>
						</el-menu-item-group>
							<el-menu-item index="6-3" @click="goto('/Notes3')">vue-i18n</el-menu-item>
						<el-menu-item-group>
							<el-menu-item index="7-1" @click="goto('/VuexTest')">Vuex步骤</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-menu-item index="2" @click="goto('/Slots')">
						<i class="el-icon-menu"></i>
						<span slot="title">{{$t("menus.slotTest")}}</span>
					</el-menu-item>
				</el-menu>
			</div>
			<!-- 右侧页面内容 -->
			<div class="section">
				<router-view />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'layout',
		data(){
			return {
				isCollapse: false
			}
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