<template>
  <y-accordion>
    <y-accordion-item title="颜色">
      <y-checkbox
        v-model="checkVal"
        :value="1"
        label="注意"
        color="attention"
        size="default"
      />
      <y-checkbox
        v-model="checkVal"
        :value="2"
        label="危险"
        color="danger"
        size="default"
      />
      <y-checkbox
        v-model="checkVal"
        :value="3"
        label="信息"
        color="info"
        size="default"
      />
      <y-checkbox
        v-model="checkVal"
        :value="4"
        label="主要"
        color="primary"
        size="default"
      />
      <y-checkbox
        v-model="checkVal"
        :value="5"
        label="成功"
        color="success"
        size="default"
      />
      <y-checkbox
        v-model="checkVal"
        :value="6"
        label="警告"
        color="warning"
        size="default"
      />
      <br />
      {{ checkVal.toString() }}
    </y-accordion-item>
    <y-accordion-item title="禁用">
      <y-checkbox
        label="注意"
        disabled
        color="attention"
        :value="1"
        v-model="checkVal"
      />
      <y-checkbox
        label="危险"
        disabled
        color="danger"
        :value="2"
        v-model="checkVal"
      />
      <y-checkbox
        label="信息"
        disabled
        color="info"
        :value="3"
        v-model="checkVal"
      />
      <y-checkbox
        label="主要"
        disabled
        color="primary"
        :value="4"
        v-model="checkVal"
      />
      <y-checkbox
        label="成功"
        disabled
        color="success"
        :value="5"
        v-model="checkVal"
      />
      <y-checkbox
        label="警告"
        disabled
        color="warning"
        :value="6"
        v-model="checkVal"
      />
    </y-accordion-item>
    <y-accordion-item title="尺寸">
      <y-checkbox
        label="注意"
        size="large"
        color="attention"
        :value="1"
        disabled
        v-model="checkVal"
      />
      <y-checkbox
        label="危险"
        size="default"
        color="danger"
        :value="2"
        disabled
        v-model="checkVal"
      />
      <y-checkbox
        label="信息"
        size="small"
        color="info"
        :value="3"
        disabled
        v-model="checkVal"
      />
    </y-accordion-item>
    <y-accordion-item title="checkbox 组">
      <y-checkbox-group
        :checkData="checkData"
        v-model="checkArray"
      />
      <br />
      {{ checkArray.toString() }}
    </y-accordion-item>
    <y-accordion-item title="不确定状态">
      <h6 style="margin-top: 5px">使用checkbox组</h6>
      <y-checkbox
        label="全选"
        :value="['大杯', '中杯', '小杯']"
        v-model="checkArray1"
      />
      <y-checkbox-group
        :checkData="checkData"
        v-model="checkArray1"
      />
      <br />
      {{ checkArray1 }}
      <h6 style="margin-top: 5px">使用checkbox</h6>
      <y-checkbox
        label="全选"
        :value="['大杯', '中杯', '小杯']"
        v-model="checkArray2"
      />
      <y-checkbox label="大杯" value="大杯" v-model="checkArray2" />
      <y-checkbox label="中杯" value="中杯" v-model="checkArray2" />
      <y-checkbox label="小杯" value="小杯" v-model="checkArray2" />
      <br />
      {{ checkArray2 }}
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
    const checkArray = ref(['大杯'])
    const checkArray1 = ref(['大杯', '中杯'])
    const checkArray2 = ref(['中杯'])
    const checkVal = ref([1])
    return {
      checkData: [
        { label: '大杯', value: '大杯', disabled: false },
        { label: '中杯', value: '中杯', disabled: false },
        { label: '小杯', value: '小杯', disabled: false },
        { label: '不可选择', value: 'biger than biger', disabled: true }
      ],
      checkArray,
      checkArray1,
      checkArray2,
      checkVal,
      data: [
        {
          param: 'v-model',
          description: 'checkbox结果值',
          type: 'String / Number / Array',
          optional: '-',
          default: '-'
        },
        {
          param: 'value',
          description: 'checkbox绑定值',
          type: 'String / Number / Array',
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
          param: 'label',
          description: '标签',
          type: 'String',
          optional: '-',
          default: '-'
        },
        {
          param: 'checkData',
          description: 'checkbox 属性值',
          type: 'Array',
          optional: '-',
          default: '-'
        }
      ]
    }
  }
}
</script>
<style scss>
.checkbox-container + .checkbox-container {
  margin-left: 10px;
}
</style>
