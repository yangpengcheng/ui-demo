<template>
  <y-accordion>
    <y-accordion-item title="基本使用">
      <y-radio v-model="radioVal" value="1" label="1" color="attention" />
      <y-radio v-model="radioVal" value="2" label="2" color="danger" />
      <y-radio v-model="radioVal" value="3" label="3" color="info" />
      <y-radio v-model="radioVal" value="4" label="4" color="primary" />
      <y-radio v-model="radioVal" value="5" label="5" color="success" />
      <y-radio v-model="radioVal" value="6" label="6" color="warning" />
      {{ radioVal }}
    </y-accordion-item>
    <y-accordion-item title="禁用">
      <y-radio v-model="radioVal" value="big" label="big" disabled />
      <y-radio v-model="radioVal" value="default" label="medium" disabled />
    </y-accordion-item>
    <y-accordion-item title="尺寸">
      <y-radio v-model="radioVal2" value="1" label="1" size="large" />
      <y-radio v-model="radioVal2" value="4" label="4" size="default" />
      <y-radio v-model="radioVal2" value="3" label="3" size="small" />
      {{ radioVal2 }}
    </y-accordion-item>
    <y-accordion-item title="radio 组">
      <y-radiogroup :radioData="radioData" v-model="radioVal2" />
      {{ radioVal2 }}
    </y-accordion-item>
  </y-accordion>
  <property-table :data="data" />
</template>
<script>
import { ref } from 'vue'
import PropertyTable from '../components/Property.vue'
export default {
  components: { PropertyTable },
  setup() {
    const radioVal = ref()
    const radioVal2 = ref()
    return {
      radioVal,
      radioVal2,
      radioData: [
        { label: '大杯', value: 'big' },
        { label: '中杯', value: 'medium' },
        { label: '小杯', value: 'small' }
      ],
      data: [
        {
          param: 'v-model',
          description: 'radio结果值',
          type: 'String / Number',
          optional: '-',
          default: '-'
        },
        {
          param: 'value',
          description: 'radio绑定的value',
          type: 'String / Number',
          optional: '-',
          default: '-'
        },
        {
          param: 'label',
          description: '标签',
          type: 'String',
          optional: '-',
          default: '-'
        },
        {
          param: 'color',
          description: '颜色',
          type: 'String',
          optional:
            'attention / danger / info / primary / success / warning / 自定义值',
          default: 'primary'
        },
        {
          param: 'disabled',
          description: '是否禁用',
          type: 'Boolean',
          optional: 'true / false',
          default: 'false'
        },
        {
          param: 'size',
          description: '尺寸',
          type: 'String',
          optional: 'large / default / small',
          default: 'default'
        },
        {
          param: 'radioData',
          description: 'radio 组属性值',
          type: 'Array',
          optional: '-',
          default: '-'
        }
      ]
    }
  }
}
</script>
<style scoped>
.radio-container + .radio-container {
  margin-left: 10px;
}
</style>