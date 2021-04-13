<template>
  <y-accordion>
    <y-accordion-item title="基本使用">
      <y-switch label="1" v-model="switchVal" color="attention" />
      <y-switch label="2" v-model="switchVal" color="danger" />
      <y-switch label="3" v-model="switchVal" color="info" />
      <y-switch label="4" v-model="switchVal" color="primary" />
      <y-switch label="5" v-model="switchVal" color="success" />
      <y-switch label="6" v-model="switchVal" color="warning" />
      {{ switchVal }}
    </y-accordion-item>
    <y-accordion-item title="禁用">
      <y-switch label="1" v-model="switchVal" color="attention" disabled />
      <y-switch label="2" v-model="switchVal" color="danger" disabled />
      <y-switch label="3" v-model="switchVal" color="info" disabled />
      <y-switch label="4" v-model="switchVal" color="primary" disabled />
      <y-switch label="5" v-model="switchVal" color="success" disabled />
      <y-switch label="6" v-model="switchVal" color="warning" disabled />
    </y-accordion-item>
    <y-accordion-item title="尺寸">
      <y-switch label="1" v-model="switchVal" color="attention" size="large" />
      <y-switch label="2" v-model="switchVal" color="danger" size="default" />
      <y-switch label="3" v-model="switchVal" color="info" size="small" />
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
    const switchVal = ref()
    const radioVal2 = ref()
    return {
      switchVal,
      radioVal2,
      data: [
        {
          param: 'v-model',
          description: 'switch绑定的value',
          type: 'Boolean',
          optional: 'true / false',
          default: 'false'
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
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.switch-container + .switch-container {
  margin-left: 10px;
}
</style>