<template>
  <div>
    <y-accordion>
      <y-accordion-item title="颜色">
        <y-button color="attention">注意按钮</y-button>
        <y-button color="danger">危险按钮</y-button>
        <y-button color="info">信息按钮</y-button>
        <y-button color="primary">主要按钮</y-button>
        <y-button color="success">成功按钮</y-button>
        <y-button color="warning">警告按钮</y-button>
      </y-accordion-item>
      <y-accordion-item title="效果">
        <y-button color="attention">注意按钮</y-button>
        <y-button color="danger">危险按钮</y-button>
        <y-button color="info">信息按钮</y-button>
        <y-button color="primary">主要按钮</y-button>
        <y-button color="success">成功按钮</y-button>
        <y-button color="warning">警告按钮</y-button>
        <br />
        <y-button effect="light" color="attention">注意按钮</y-button>
        <y-button effect="light" color="danger">危险按钮</y-button>
        <y-button effect="light" color="info">信息按钮</y-button>
        <y-button effect="light" color="primary">主要按钮</y-button>
        <y-button effect="light" color="success">成功按钮</y-button>
        <y-button effect="light" color="warning">警告按钮</y-button>
        <br />
        <y-button effect="outline" color="attention">注意按钮</y-button>
        <y-button effect="outline" color="danger">危险按钮</y-button>
        <y-button effect="outline" color="info">信息按钮</y-button>
        <y-button effect="outline" color="primary">主要按钮</y-button>
        <y-button effect="outline" color="success">成功按钮</y-button>
        <y-button effect="outline" color="warning">警告按钮</y-button>
      </y-accordion-item>
      <y-accordion-item title="圆形按钮">
        <y-button circle color="attention" iconClass="bi-alarm"></y-button>
        <y-button circle color="danger" iconClass="bi-alarm"></y-button>
        <y-button circle color="info" iconClass="bi-alarm"></y-button>
        <y-button circle color="primary" iconClass="bi-alarm"></y-button>
        <y-button circle color="success" iconClass="bi-alarm"></y-button>
        <y-button circle color="warning" iconClass="bi-alarm"></y-button>
      </y-accordion-item>
      <y-accordion-item title="禁用状态">
        <y-button disabled color="attention">注意按钮</y-button>
        <y-button disabled color="danger">危险按钮</y-button>
        <y-button disabled color="info">信息按钮</y-button>
        <y-button disabled color="primary">主要按钮</y-button>
        <y-button disabled color="success">成功按钮</y-button>
        <y-button disabled color="warning">警告按钮</y-button>
        <br />
        <y-button disabled effect="light" color="attention">注意按钮</y-button>
        <y-button disabled effect="light" color="danger">危险按钮</y-button>
        <y-button disabled effect="light" color="info">信息按钮</y-button>
        <y-button disabled effect="light" color="primary">主要按钮</y-button>
        <y-button disabled effect="light" color="success">成功按钮</y-button>
        <y-button disabled effect="light" color="warning">警告按钮</y-button>
        <br />
        <y-button disabled effect="outline" color="attention">
          注意按钮
        </y-button>
        <y-button disabled effect="outline" color="danger">危险按钮</y-button>
        <y-button disabled effect="outline" color="info">信息按钮</y-button>
        <y-button disabled effect="outline" color="primary">主要按钮</y-button>
        <y-button disabled effect="outline" color="success">成功按钮</y-button>
        <y-button disabled effect="outline" color="warning">警告按钮</y-button>
      </y-accordion-item>
      <y-accordion-item title="尺寸">
        <y-button size="large" color="danger">危险按钮</y-button>
        <y-button size="large" round color="danger">危险按钮</y-button>
        <y-button
          size="large"
          circle
          color="danger"
          iconClass="bi-alarm"
        ></y-button>
        <y-button size="default" color="info">信息按钮</y-button>
        <y-button size="default" round color="info">信息按钮</y-button>
        <y-button
          size="default"
          circle
          color="info"
          iconClass="bi-alarm"
        ></y-button>
        <y-button size="small" color="primary">主要按钮</y-button>
        <y-button size="small" round color="primary">主要按钮</y-button>
        <y-button size="small" circle color="primary" iconClass="bi-alarm" />
      </y-accordion-item>
      <y-accordion-item title="图标(图标类名)">
        <y-button size="large" color="attention" iconClass="bi-alarm">
          闹钟
        </y-button>
        <y-button size="large" circle color="attention" iconClass="bi-alarm" />
        <y-button size="default" color="danger" iconClass="bi-alarm">
          闹钟
        </y-button>
        <y-button size="default" circle color="danger" iconClass="bi-alarm" />
        <y-button size="small" color="info" iconClass="bi-alarm">闹钟</y-button>
        <y-button size="small" circle color="info" iconClass="bi-alarm" />
      </y-accordion-item>
      <y-accordion-item title="图标(默认插槽)">
        <y-button size="large" color="attention">
          <i class="bi bi-alarm large y-button__icon" />
          <span>闹钟</span>
        </y-button>
        <y-button size="large" circle color="attention">
          <i class="bi bi-alarm large y-button__icon" />
        </y-button>
        <y-button size="default" color="danger">
          <i class="bi bi-alarm default y-button__icon" />
          <span>闹钟</span>
        </y-button>
        <y-button size="default" circle color="danger">
          <i class="bi bi-alarm default y-button__icon" />
        </y-button>
        <y-button size="small" color="info">
          <i class="bi bi-alarm small y-button__icon" />
          <span>闹钟</span>
        </y-button>
        <y-button size="small" circle color="info">
          <i class="bi bi-alarm small y-button__icon" />
        </y-button>
      </y-accordion-item>
      <y-accordion-item title="加载中">
        <y-button loading>主要按钮</y-button>
      </y-accordion-item>
      <y-accordion-item title="防抖节流">
        <p>防抖:[wait=0], [options=],</p>
        <p>[wait=0] (number): 需要延迟的毫秒数</p>
        <p>[options.leading=false] (boolean): 指定在延迟开始前调用</p>
        <p>[options.maxWait] (number): 设置 func 允许被延迟的最大值</p>
        <p>[options.trailing=true] (boolean): 指定在延迟结束后调用</p>
        <y-button :debounce="debounce" @click="click">注意按钮</y-button>
        <p>节流:[wait=0], [options=],</p>
        <p>[wait=0] (number): 需要节流的毫秒</p>
        <p>[options.leading=true] (boolean): 指定调用在节流开始前</p>
        <p>[options.trailing=true] (boolean): 指定调用在节流结束后。</p>
        <y-button :throttle="throttle" @click="click">注意按钮</y-button>
      </y-accordion-item>
      <y-accordion-item title="自定义样式">
        <y-button color="customer">自定义按钮</y-button>
      </y-accordion-item>
    </y-accordion>
  </div>
  <property-table :data="data" />
  <slot-table :data="slots" />
  <event-table :data="events" />
</template>

<script>
import PropertyTable from '../components/Property.vue'
import SlotTable from '../components/Slot.vue'
import EventTable from '../components/Event.vue'
export default {
  components: { PropertyTable, SlotTable, EventTable },
  setup() {
    const Doptions = { leading: true, maxWait: 3000, trailing: false }
    const Toptions = { leading: true, trailing: false }
    const debounce = { wait: 2000, options: Doptions }
    const throttle = { wait: 2000, options: Toptions }
    const click = (evt) => {
      console.log(Object.prototype.toString.call(evt))
      console.log('click', evt.target)
    }
    return {
      debounce,
      throttle,
      click,
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
          param: 'effect',
          description: '效果',
          type: 'String',
          optional: 'dark / light / outline',
          default: 'dark'
        },
        {
          param: 'circle',
          description: '是否圆形按钮',
          type: 'Boolean',
          optional: 'true / false',
          default: 'false'
        },
        {
          param: 'iconClass',
          description: '图标类名',
          type: 'String',
          optional: '-',
          default: '-'
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
          param: 'loading',
          description: '是否加载中',
          type: 'Boolean',
          optional: 'true / false',
          default: 'false'
        },
        {
          param: 'debounce',
          description: '防抖参数',
          type: 'Object',
          optional: '-',
          default: '-'
        },
        {
          param: 'throttle',
          description: '节流参数',
          type: 'Object',
          optional: '-',
          default: '-'
        }
      ],
      slots: [{ name: 'default', description: '按钮内部内容' }],
      events: [
        {
          name: 'change',
          description: '点击button时触发的事件',
          param: 'evt:PointerEvent'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.y_accordion p {
  color: #555;
  font-size: 12px;
  margin-bottom: 5px;
}
.y-button + .y-button {
  margin-top: 5px;
  margin-left: 5px;
}
.customer {
  color: #c862cf;
  background-color: white;
  border: 1px solid #c862cf;
  padding: 10px 20px;
  border-radius: 6px;
}
</style>
