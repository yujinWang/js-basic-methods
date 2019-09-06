<template>
	<div>
		<el-table
			:stripe="stripe"
			:border="border" 
			:data="dataSource"
			:show-header="showHeader"
			:empty-text="emptyText"
			@selection-change="handleSelectionChange"
			>
			<!--数据源-->
			<el-table-column 
				type="selection" 
				width="45">
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
				:width="column.width"
			>
			</el-table-column>
			<el-table-column 
				:label="labels" 
				header-align="center"
				width="260"
			>
				<template slot-scope="scope">
					<div class="btns">
						<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">{{$t("element.indexBtn")}}</el-button>
						<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">{{$t("element.deleteBtn")}}</el-button>
						<el-button size="mini" type="success" @click="handleAdd(scope.$index, scope.row)">{{$t("element.addBtn")}}</el-button>
					</div>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>
<script>
	export default {
		name:"tables",
		data() {
			return {
				stripe: true,  // 是否显示斑马纹，直接写在el-table中也可，写表示有，不写表示无
				showHeader: true, // 是否显示表头
				multipleSelection: []
			}
		},
		computed: {
			// 表格中暂无数据的中英文，放在computed中切换即可实现
			emptyText() {
				return this.$t("element.noData");
			},
			labels() {
				return this.$t("element.operator");
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
			handleEdit(index,row) {
				alert(index);
				console.log(index,row);
			},
			handleDelete(index,row) {
				// console.log(this.$parent.dataSource);
				this.$parent.dataSource.splice(index,1);
				// this.$parent.getMockData1();  // 刷新表格数据，此处为mock数据，调用的效果就是删除后重新加载表格数据生成8条
				// console.log(this.$parent.dataSource);
			},
			handleSelectionChange(val) {
				// val是选中项的集合，累计的过程
				console.log(val);
				this.multipleSelection = val;
				console.log(this.multipleSelection);
			},
			handleAdd(index) {
				let newValue = {
					username: "张三",
					createTime: "2000-00-00",
					deptName: "普林斯顿"
				}
				this.$parent.dataSource.push(newValue);
			}
		}
	}
</script>
<style scoped>
	.btns {
		text-align: center;
	}
</style>