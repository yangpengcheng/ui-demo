<template>
  <h4>Attributes:</h4>
  <table border="0" cellspacing="0" cellpadding="" class="y-table">
    <thead>
      <tr>
        <th style="width: 100px">参数</th>
        <th style="width: 100px">说明</th>
        <th style="width: 100px">类型</th>
        <th style="width: 100px">可选值</th>
        <th style="width: 100px">默认值</th>
      </tr>
    </thead>
    <tbody ref="tbody">
      <tr v-for="item of data" :key="item">
        <td>{{item.param}}</td>
        <td>{{item.description}}</td>
        <td>{{item.type}}</td>
        <td>{{item.optional}}</td>
        <td>{{item.default}}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'Property',
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