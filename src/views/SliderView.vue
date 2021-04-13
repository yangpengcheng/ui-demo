<template>
  <y-accordion>
    <y-accordion-item title="基本使用">
      <y-slider v-model="sliderValue" color="attention" />
      <y-slider v-model="sliderValue" color="danger" />
      <y-slider v-model="sliderValue" color="info" />
      <y-slider v-model="sliderValue" color="primary" />
      <y-slider v-model="sliderValue" color="success" />
      <y-slider v-model="sliderValue" color="warning" />
      {{ sliderValue }}
    </y-accordion-item>
    <y-accordion-item title="禁用">
      <y-slider v-model="sliderValue" color="attention" disabled />
      <y-slider v-model="sliderValue" color="danger" disabled />
      <y-slider v-model="sliderValue" color="info" disabled />
      <y-slider v-model="sliderValue" color="primary" disabled />
      <y-slider v-model="sliderValue" color="success" disabled />
      <y-slider v-model="sliderValue" color="warning" disabled />
    </y-accordion-item>
    <y-accordion-item title="min step">
      <y-slider v-model="sliderValue" color="attention" min="0" step="1" />
      <y-slider v-model="sliderValue" color="danger" min="10" step="0.1" />
      <y-slider v-model="sliderValue" color="info" min="20" step="0.2" />
      <y-slider v-model="sliderValue" color="primary" min="30" step="0.3" />
      <y-slider v-model="sliderValue" color="success" min="40" step="0.4" />
      <y-slider v-model="sliderValue" color="warning" min="50" step="0.5" />
      {{ sliderValue }}
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
    const sliderValue = ref()
    return {
      sliderValue,
      data: [
        {
          param: 'v-model',
          description: 'slider绑定的值',
          type: 'Number / String',
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
          param: 'min',
          description: '最小值',
          type: 'Number / String',
          optional: '-',
          default: '-'
        },
        {
          param: 'step',
          description: '步进值',
          type: 'Number / String',
          optional: '-',
          default: '-'
        }
      ]
    }
  }
}
</script>

<style>
.app-container p {
  color: #555;
  font-size: 12px;
}
.y-slider + .y-slider {
  margin-top: 15px;
}
</style>
