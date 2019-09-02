<template>
	<el-table 
		:stripe="stripe"
		:border="border" 
		:data="dataSource"
		:show-header="showHeader"
		:empty-text="emptyText"
		>
		<!--数据源-->
		<el-table-column 
			type="selection" 
			width="55">
		</el-table-column>
		<el-table-column
			v-for="(column, index) in columns" 
			v-if="column.isShow" 
			header-align="center"
			:sortable="column.hasSort" 
			:key="column.prop" 
			:prop="column.prop" 
			:label="column.label" 
			:align="column.align"
			:width="column.width">
		</el-table-column>
	</el-table>
</template>
<script>
	export default {
		name:"tables",
		data() {
			return {
				stripe: true,  // 是否显示斑马纹，直接写在el-table中也可，写表示有，不写表示无
				showHeader: true  // 是否显示表头
			}
		},
		computed: {
			// 表格中暂无数据的中英文，放在computed中切换即可实现
			emptyText() {
				return this.$t("element.noData");
			}
		},
		props:{
			dataSource: { // 表格数据源
				type: Array,
				default: ()=> []
			},
			columns: { // 表格的字段展示
				type: Array,
				default: ()=>[]
			},
			border: {
				type: Boolean,
				default: ()=> true
			}
		},
		methods: {
			clickTable(row) {
				console.log(row);
			}
		}
	}
</script>