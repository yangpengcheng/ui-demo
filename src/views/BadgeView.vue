<template>
  <y-accordion>
    <y-accordion-item title="颜色">
      <y-badge :value="3" color="attention">
        <y-button>点赞</y-button>
      </y-badge>
      <y-badge :value="3" color="danger">
        <y-button>点赞</y-button>
      </y-badge>
      <y-badge :value="3" color="info">
        <y-button>点赞</y-button>
      </y-badge>
      <y-badge :value="3" color="primary">
        <y-button>点赞</y-button>
      </y-badge>
      <y-badge :value="3" color="success">
        <y-button>点赞</y-button>
      </y-badge>
      <y-badge :value="3" color="warning">
        <y-button>点赞</y-button>
      </y-badge>
    </y-accordion-item>
    <y-accordion-item title="自定义最大值">
      <y-badge :value="0" color="attention" :max="99">
        <y-button>点赞</y-button>
      </y-badge>
      <y-badge :value="98" color="danger" :max="99">
        <y-button>点赞</y-button>
      </y-badge>
      <y-badge :value="99" color="info" :max="99">
        <y-button>点赞</y-button>
      </y-badge>
      <y-badge :value="100" color="primary" :max="99">
        <y-button>点赞</y-button>
      </y-badge>
      <y-badge :value="101" color="success" :max="99">
        <y-button>点赞</y-button>
      </y-badge>
      <y-badge :value="102" color="warning" :max="99">
        <y-button>点赞</y-button>
      </y-badge>
    </y-accordion-item>
    <y-accordion-item title="自定义内容">
      <y-badge value="max" color="attention">
        <y-button>点赞</y-button>
      </y-badge>
      <y-badge value="max" color="danger">
        <y-button>点赞</y-button>
      </y-badge>
      <y-badge value="max" color="info">
        <y-button>点赞</y-button>
      </y-badge>
      <y-badge value="max" color="primary">
        <y-button>点赞</y-button>
      </y-badge>
      <y-badge value="max" color="success">
        <y-button>点赞</y-button>
      </y-badge>
      <y-badge value="max" color="warning">
        <y-button>点赞</y-button>
      </y-badge>
    </y-accordion-item>
    <y-accordion-item title="小红点">
      <y-badge is-dot>消息</y-badge>
      <y-badge is-dot>
        <y-button>点赞</y-button>
      </y-badge>
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
            'attention / danger / info / primary / success / warning / 自定义值',
          default: 'primary'
        },
        {
          param: 'max',
          description: '自定义最大值',
          type: 'Number',
          optional: '-',
          default: '-'
        },
        {
          param: 'value',
          description: '自定义内容',
          type: 'String / Number ',
          optional: '-',
          default: '-'
        },
        {
          param: 'is-dot',
          description: '是否显示小红点',
          type: 'Boolean',
          optional: 'true / false',
          default: 'false'
        },
        {
          param: 'hidden',
          description: '隐藏标记',
          type: 'Boolean',
          optional: 'true / false',
          default: 'false'
        }
      ],
      slots: [{ name: 'default', description: '标记主体' }]
    }
  }
}
</script>
<style>
.y-badge + .y-badge {
  margin-left: 40px;
}
.y-badge {
  margin-top: 10px;
}
</style>
