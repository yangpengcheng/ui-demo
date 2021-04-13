<template>
  <h4>Events:</h4>
  <table border="0" cellspacing="0" cellpadding="" class="y-table">
    <thead>
      <tr>
        <th style="width: 100px">名称</th>
        <th style="width: 100px">说明</th>
        <th style="width: 100px">回调参数</th>
      </tr>
    </thead>
    <tbody ref="tbody">
      <tr v-for="item of data" :key="item">
        <td>{{item.name}}</td>
        <td>{{item.description}}</td>
        <td>{{item.param}}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'Slot',
  props:{
    data:{
      type:Array
    }
  }
}
</script>
<style lang="scss" scoped>
.y-table {
  text-align: center;
  width: 100%;
  font-size: 14px;
}
tr td,
tr th {
  border-bottom: 1px solid #999999;
  padding: 4px 0;
}
</style>