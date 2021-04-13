<template>
  <y-accordion>
    <y-accordion-item title="基本使用">
      <y-card
        iconClass="bi bi-twitter"
        value="100"
        title="twitter"
        percent="+5.00%"
        description="较上周"
        class="twitter"
      />
    </y-accordion-item>
  </y-accordion>
  <property-table :data="data" />
</template>
<script>
import PropertyTable from '../components/Property.vue'
export default {
  components: { PropertyTable },
  setup() {
    return {
      data: [
        {
          param: 'iconClass',
          description: '图标类名',
          type: 'String',
          optional: '-',
          default: '-'
        },
        {
          param: 'value',
          description: '值',
          type: 'String / Number',
          optional: '-',
          default: '-'
        },
        {
          param: 'title',
          description: '标题',
          type: 'String',
          optional: '-',
          default: '-'
        },
        {
          param: 'percent',
          description: '百分比',
          type: 'String',
          optional: '-',
          default: '-'
        },
        {
          param: 'description',
          description: '描述',
          type: 'String',
          optional: '-',
          default: '-'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.twitter {
  background-color: #eee;
  width: 300px;
}
.twitter {
  color: rgb(65, 171, 225);
}
</style>