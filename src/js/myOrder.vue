<template>
  <div>
    <table class="table table-bordered table-striped table-hover">
      <tbody>
        <tr>
          <th>Order No.</th>
          <th>Part No.</th>
          <th>Analysis Type</th>
          <th>Customer</th>
          <th>PSP No.</th>
          <th>Orderer</th>
        </tr>
        <tr v-for="item in lines" :key="item.id">
          <td>{{ item.OrderNo }}</td>
          <td>{{ item.PartNo }}</td>
          <td>{{ item.AnalysisType }}</td>
          <td>{{ item.Customer }}</td>
          <td>{{ item.PSPNo }}</td>
          <td>{{ item.Orderer }}</td>
        </tr>
      </tbody>
    </table>
    <div>
      <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
    </div>
  </div>
</template>

<script>
// import TodoList from './components/TodoList.vue'

export default {
  // components: {
  // 	TodoList
  // },
  data: function () {
    return {
      lines: [
        {
          OrderNo: "000001",
          PartNo: "377000012001",
          AnalysisType: "stiffness",
          Customer: "BMW",
          PSPNo: "61000",
          Orderer: "Xuan",
        },
        {
          OrderNo: "000002",
          PartNo: "377000012002",
          AnalysisType: "stress",
          Customer: "Daimler",
          PSPNo: "61001",
          Orderer: "Xuan",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* @import "../../node_modules/bootstrap/dist/css/bootstrap.css"; */
.main {
  padding-top: 50px;
}
</style>