<template>
  <div class="table_test">
    <div class="info">
      <p>遇到的一个问题，引入element表格之后表头和下面单元格错位，但测试在火狐62版本中是正常的</p>
      <p>解决方式是在App.vue文件中添加如下样式body .el-table th.gutter{display: table-cell!important;}</p>
      <p>表头的中英文，将绑定的columnsData放在computed计算属性中，即可使用this.$t("test.name")的方式实现</p>
      <p>若要表格内容中英文展示，将绑定的dataSource从data中放到computed中即可</p>
      <h3 style="color: red;">mock数据，部分表格数据未去查询添加，原理相同，通过api.js映射返回数据</h3>
    </div>
    <Tables :dataSource="dataSource" :columns="columnsData"></Tables>
  </div>
</template>

<script>
import Tables from "../../common/table/Table";
import request from "../../http/https";
import { getDataTest } from "../../API/api";
export default {
  name: "ElementUi",
  data() {
    return {
      dataSource: []
    };
  },
  components: {
    Tables
  },
  mounted() {
    this.getMockData();
    this.getMockData1();
  },
  computed: {
    tableHead() {
      return this.$t("element");
    },
    columnsData() {
      return [
        {
          hasSort: false, //<Boolean> 是否排序
          isShow: true, //<Boolean> 是否展示
          prop: "createTime", //<String>  对应属性名
          label: this.tableHead.datas, //<String>   表头标签
          align: "center",
          width: 150 // 列宽
        },
        {
          hasSort: false, //<Boolean> 是否排序
          isShow: true, //<Boolean> 是否展示
          prop: "phone", //<String>  对应属性名
          label: this.tableHead.phoneNum, //<String>   表头标签
          align: "center",
          width: 150 // 列宽
        },
        {
          hasSort: false, //<Boolean> 是否排序
          isShow: true, //<Boolean> 是否展示
          prop: "username", //<String>  对应属性名
          label: this.tableHead.name, //<String>   表头标签
          align: "center",
          width: 150 // 列宽
        },
        {
          hasSort: false, //<Boolean> 是否排序
          isShow: true, //<Boolean> 是否展示
          prop: "deptName", //<String>  对应属性名
          label: this.tableHead.department, //<String>   表头标签
          align: "center",
          width: 150 // 列宽
        },
        {
          hasSort: false, //<Boolean> 是否排序
          isShow: true, //<Boolean> 是否展示
          prop: "status", //<String>  对应属性名
          label: this.tableHead.status, //<String>   表头标签
          align: "center",
          width: 150 // 列宽
        }
      ];
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    getMockData() {
      // request({ url: "/user", type: "get" }).then(res => {
      // console.log(res);
      // });
    },
    getMockData1() {
      request({ url: "/user" }).then(res => {
        this.dataSource = getDataTest(res.data);
      });
    }
  }
};
</script>

<style scoped>
.table_test {
  margin: 10px;
}
.info {
  margin-bottom: 20px;
}
</style>