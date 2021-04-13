<template>
  <y-accordion>
    <y-accordion-item title="颜色">
      <y-alert title="注意提示的文案" color="attention" />
      <y-alert title="错误提示的文案" color="danger" />
      <y-alert title="信息提示的文案" color="info" />
      <y-alert title="主要提示的文案" color="primary" />
      <y-alert title="成功提示的文案" color="success" />
      <y-alert title="警告提示的文案" color="warning" />
    </y-accordion-item>
    <y-accordion-item title="效果">
      <y-alert title="注意提示的文案" effect="dark" color="attention" />
      <y-alert title="错误提示的文案" effect="dark" color="danger" />
      <y-alert title="信息提示的文案" effect="dark" color="info" />
      <y-alert title="主要提示的文案" effect="dark" color="primary" />
      <y-alert title="成功提示的文案" effect="dark" color="success" />
      <y-alert title="警告提示的文案" effect="dark" color="warning" />
      <y-alert title="注意提示的文案" effect="light" color="attention" />
      <y-alert title="错误提示的文案" effect="light" color="danger" />
      <y-alert title="信息提示的文案" effect="light" color="info" />
      <y-alert title="主要提示的文案" effect="light" color="primary" />
      <y-alert title="成功提示的文案" effect="light" color="success" />
      <y-alert title="警告提示的文案" effect="light" color="warning" />
      <y-alert title="注意提示的文案" effect="outline" color="attention" />
      <y-alert title="错误提示的文案" effect="outline" color="danger" />
      <y-alert title="信息提示的文案" effect="outline" color="info" />
      <y-alert title="主要提示的文案" effect="outline" color="primary" />
      <y-alert title="成功提示的文案" effect="outline" color="success" />
      <y-alert title="警告提示的文案" effect="outline" color="warning" />
    </y-accordion-item>
    <y-accordion-item title="自定义关闭选项">
      <y-alert title="注意提示的文案" color="attention" :closable="false" />
      <y-alert title="错误提示的文案" color="danger" close-text="知道了" />
      <y-alert title="信息提示的文案" color="info" />
    </y-accordion-item>
    <y-accordion-item title="图标">
      <y-alert title="注意提示的文案" color="attention" show-icon />
      <y-alert title="错误提示的文案" color="danger" show-icon />
      <y-alert title="信息提示的文案" color="info" show-icon />
      <y-alert title="主要提示的文案" color="primary" show-icon />
      <y-alert title="成功提示的文案" color="success" show-icon />
      <y-alert title="警告提示的文案" color="warning" show-icon />
    </y-accordion-item>
    <y-accordion-item title="图标文字居中">
      <y-alert title="注意提示的文案" color="attention" show-icon center />
      <y-alert title="错误提示的文案" color="danger" show-icon center />
      <y-alert title="信息提示的文案" color="info" show-icon center />
      <y-alert title="主要提示的文案" color="primary" show-icon center />
      <y-alert title="成功提示的文案" color="success" show-icon center />
      <y-alert title="警告提示的文案" color="warning" show-icon center />
    </y-accordion-item>
    <y-accordion-item title="带有辅助性文字(有图标)">
      <y-alert
        title="带辅助性文字介绍"
        color="attention"
        show-icon
        description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
      ></y-alert>
      <y-alert
        title="带辅助性文字介绍"
        color="danger"
        show-icon
        description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
      ></y-alert>
      <y-alert
        title="带辅助性文字介绍"
        color="info"
        show-icon
        description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
      ></y-alert>
      <y-alert
        title="带辅助性文字介绍"
        color="primary"
        show-icon
        description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
      ></y-alert>
      <y-alert
        title="带辅助性文字介绍"
        color="success"
        show-icon
        description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
      ></y-alert>
      <y-alert
        title="带辅助性文字介绍"
        color="warning"
        show-icon
        description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
      ></y-alert>
    </y-accordion-item>
    <y-accordion-item title="带有辅助性文字(无图标)">
      <y-alert
        title="带辅助性文字介绍"
        color="attention"
        description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
      ></y-alert>
      <y-alert
        title="带辅助性文字介绍"
        color="danger"
        description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
      ></y-alert>
      <y-alert
        title="带辅助性文字介绍"
        color="info"
        description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
      ></y-alert>
      <y-alert
        title="带辅助性文字介绍"
        color="primary"
        description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
      ></y-alert>
      <y-alert
        title="带辅助性文字介绍"
        color="success"
        description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
      ></y-alert>
      <y-alert
        title="带辅助性文字介绍"
        color="warning"
        description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
      ></y-alert>
    </y-accordion-item>
  </y-accordion>
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
    return {
      data: [
        {
          param: 'title',
          description: '标题',
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
          param: 'effect',
          description: '效果',
          type: 'String',
          optional: 'dark / light / outline',
          default: 'dark'
        },
        {
          param: 'closable',
          description: '是否显示关闭按钮',
          type: 'Boolean',
          optional: 'true / false',
          default: 'true'
        },
        {
          param: 'close-text',
          description: '关闭按钮内容',
          type: 'String',
          optional: '-',
          default: '-'
        },
        {
          param: 'show-icon',
          description: '是否显示图标',
          type: 'Boolean',
          optional: 'true / false',
          default: 'false'
        },
        {
          param: 'center',
          description: '图标文字是否居中',
          type: 'Boolean',
          optional: 'true / false',
          default: 'false'
        },
        {
          param: 'description',
          description: '描述',
          type: 'String',
          optional: '-',
          default: '-'
        }
      ],
      slots: [
        { name: 'default', description: '描述' },
        { name: 'title', description: '标题内容' }
      ],
      events: [
        {
          name: 'close',
          description: '关闭alert时触发的事件',
          param: 'evt:PointerEvent'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.y-alert {
  margin-top: 5px;
}
</style>
