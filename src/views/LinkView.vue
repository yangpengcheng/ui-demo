<template>
  <y-accordion>
    <y-accordion-item title="颜色">
      <y-link color="attention">注意链接</y-link>
      <y-link color="danger">危险链接</y-link>
      <y-link color="info">信息链接</y-link>
      <y-link color="primary">主要链接</y-link>
      <y-link color="success">成功链接</y-link>
      <y-link color="warning">警告链接</y-link>
    </y-accordion-item>
    <y-accordion-item title="禁用状态">
      <y-link color="attention" disabled>注意链接</y-link>
      <y-link color="danger" disabled>危险链接</y-link>
      <y-link color="info" disabled>信息链接</y-link>
      <y-link color="primary" disabled>主要链接</y-link>
      <y-link color="success" disabled>成功链接</y-link>
      <y-link color="warning" disabled>警告链接</y-link>
    </y-accordion-item>
    <y-accordion-item title="不带下划线">
      <y-link color="attention" :underline="false">注意链接</y-link>
      <y-link color="danger" :underline="false">危险链接</y-link>
      <y-link color="info" :underline="false">信息链接</y-link>
      <y-link color="primary" :underline="false">主要链接</y-link>
      <y-link color="success" :underline="false">成功链接</y-link>
      <y-link color="warning" :underline="false">警告链接</y-link>
    </y-accordion-item>
    <y-accordion-item title="带图标">
      <y-link color="info" iconClass="bi-pencil-square">编辑</y-link>
    </y-accordion-item>
  </y-accordion>
  <property-table :data="data" />
  <slot-table :data="slots" />
</template>
<script>
import PropertyTable from '../components/Property.vue'
import SlotTable from '../components/Slot.vue'
export default {
  components: { PropertyTable, SlotTable },
  setup() {
    return {
      data: [
        {
          param: 'color',
          description: '颜色',
          type: 'String',
          optional:
            'attention / primary / success / warning / danger / info / 自定义值',
          default: 'info'
        },
        {
          param: 'disable',
          description: '是否禁用',
          type: 'Boolean',
          optional: 'true / false',
          default: 'false'
        },
        {
          param: 'underline',
          description: '是否显示下划线',
          type: 'Boolean',
          optional: 'true / false',
          default: 'true'
        },
        {
          param: 'iconClass',
          description: '图标类名',
          type: 'String',
          optional: '-',
          default: '-'
        }
      ],
      slots: [
        { name: 'default', description: 'link中内容' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.y-link + .y-link {
  margin-left: 10px;
}
.app-container p {
  color: #555;
  font-size: 12px;
}
</style>
