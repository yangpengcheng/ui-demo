<template>
  <y-accordion>
    <y-accordion-item title="基本使用">
      <y-input v-model="input" placeholder="请输入" />
    </y-accordion-item>
    <y-accordion-item title="禁用状态">
      <y-input v-model="input" placeholder="请输入" disabled />
    </y-accordion-item>
    <y-accordion-item title="可清空">
      <y-input v-model="input" placeholder="请输入" clearable/>
    </y-accordion-item>
    <y-accordion-item title="密码框">
      <y-input v-model="input" placeholder="请输入" show-password />
    </y-accordion-item>
    <y-accordion-item title="带图标">
      <y-input v-model="input" @input="handleInput" placeholder="请输入">
        <template v-slot:prefix>
          <i class="bi bi-bootstrap"/>
        </template>
      </y-input>
      <y-input v-model="input" @input="handleInput" placeholder="请输入">
        <template v-slot:suffix>
          <i class="bi bi-chat-dots"/>
        </template>
      </y-input>
    </y-accordion-item>
    <y-accordion-item title="尺寸">
      <y-input
        v-model="input"
        @input="handleInput"
        placeholder="请输入"
        size="large"
        clearable
      />
      <y-input
        v-model="input"
        @input="handleInput"
        placeholder="请输入"
        size="default"
        clearable
      />
      <y-input
        v-model="input"
        @input="handleInput"
        placeholder="请输入"
        size="small"
        clearable
      />
    </y-accordion-item>
    <y-accordion-item title="输入长度限制">
      <y-input
        v-model="input"
        placeholder="请输入"
        show-word-limit
        maxlength="10"
      />
    </y-accordion-item>
    <y-accordion-item title="输入验证">
      <y-input
        v-model="input"
        placeholder="请输入"
        :validateFunc="validateInput"
        opportunity="change"
      />
    </y-accordion-item>
    <y-accordion-item title="自定义样式">
      <y-input v-model="input" placeholder="请输入" class="customer" />
    </y-accordion-item>
    <y-accordion-item title="带标签">
      <y-input v-model="input" label="Username" size="large">
        <template v-slot:prefix>
          <i class="bi bi-bootstrap"></i>
        </template>
      </y-input>
      <y-input v-model="input" label="Username" size="default">
        <template v-slot:prefix>
          <i class="bi bi-bootstrap"></i>
        </template>
      </y-input>
      <y-input v-model="input" label="Username" size="small">
        <template v-slot:prefix>
          <i class="bi bi-bootstrap"></i>
        </template>
      </y-input>
    </y-accordion-item>
    <y-accordion-item title="只有底边框">
      <y-input v-model="input" line />
    </y-accordion-item>
    <y-accordion-item title="边框过渡效果">
      <y-input
        v-model="input"
        transitionName="border_bottom_left_right"
        placeholder="border_bottom_left_right"
      />
      <y-input
        v-model="input"
        transitionName="border_bottom_middle_edge"
        placeholder="border_bottom_middle_edge"
      />
      <y-input
        v-model="input"
        transitionName="border_bottom_edge_middle"
        placeholder="border_bottom_edge_middle"
      />
      <y-input
        v-model="input"
        transitionName="border_bottom_top"
        placeholder="border_bottom_top"
      />
      <y-input
        v-model="input"
        transitionName="border_left_right"
        placeholder="border_left_right"
      />
      <y-input
        v-model="input"
        transitionName="border_right_left"
        placeholder="border_right_left"
      />
    </y-accordion-item>
    <y-accordion-item title="带标签过渡效果">
      <y-input
        v-model="input"
        label="First Name"
        transitionName="border_bottom_left_right"
      />
      <y-input
        v-model="input"
        label="First Name"
        transitionName="border_bottom_middle_edge"
      />
      <y-input
        v-model="input"
        label="First Name"
        transitionName="border_bottom_edge_middle"
      />
      <y-input
        v-model="input"
        label="First Name"
        transitionName="border_bottom_top"
      />
      <y-input
        v-model="input"
        label="First Name"
        transitionName="border_left_right"
      />
      <y-input
        v-model="input"
        label="First Name"
        transitionName="border_right_left"
      />
    </y-accordion-item>
  </y-accordion>
  <property-table :data="data" />
  <slot-table :data="slots" />
  <event-table :data="events" />
</template>

<script>
import { ref } from 'vue'
import PropertyTable from '../components/Property.vue'
import SlotTable from '../components/Slot.vue'
import EventTable from '../components/Event.vue'
export default {
  components: { PropertyTable, SlotTable, EventTable },
  setup() {
    const input = ref('')
    const handleInput = (val) => {
      console.log('input', val)
    }
    const validateInput = (evt) => {
      if (/e/.test(evt.target.value)) {
        return Promise.resolve('correct')
      } else {
        return Promise.reject(new Error('incorrect'))
      }
    }
    return {
      input,
      handleInput,
      validateInput,
      data: [
        {
          param: 'v-model',
          description: 'input绑定的value',
          type: 'String / Number',
          optional: '',
          default: ''
        },
        {
          param: 'placeholder',
          description: '占位符',
          type: 'String',
          optional: '',
          default: ''
        },
        {
          param: 'disabled',
          description: '是否禁用输入框',
          type: 'Boolean',
          optional: 'true / false',
          default: 'false'
        },
        {
          param: 'clearable',
          description: '是否显示清空按钮',
          type: 'Boolean',
          optional: 'true / false',
          default: 'false'
        },
        {
          param: 'show-password',
          description: '是否为密码输入框',
          type: 'Boolean',
          optional: 'true / false',
          default: 'false'
        },
        {
          param: 'size',
          description: '尺寸',
          type: 'String',
          optional: 'large / default /small',
          default: 'default'
        },
        {
          param: 'show-word-limit',
          description: '是否限制输入长度',
          type: 'Boolean',
          optional: 'true / false',
          default: 'false'
        },
        {
          param: 'maxlength',
          description: '最大输入长度',
          type: 'Number',
          optional: '-',
          default: '-'
        },
        {
          param: 'opportunity',
          description: '输入验证触发时机',
          type: 'String',
          optional: 'change / blur',
          default: 'change'
        },
        {
          param: 'validateFunc',
          description: '输入验证方法',
          type: 'Function',
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
          param: 'line',
          description: '是否只显示底边框',
          type: 'Boolean',
          optional: 'true / false',
          default: 'true'
        },
        {
          param: 'transitionName',
          description: '过渡效果类名',
          type: 'String',
          optional: '-',
          default: '-'
        }
      ],
      slots: [
        { name: 'prefix', description: '前置内容' },
        { name: 'suffix', description: '后置内容' }
      ],
      events: [
        {
          name: 'input',
          description: 'input输入内容时触发',
          param: 'val'
        },
        {
          name: 'change',
          description: 'input输入内容发生变化时触发',
          param: 'val'
        },
        {
          name: 'focus',
          description: 'input获得焦点时触发',
          param: 'evt:FocusEvent'
        },
        {
          name: 'blur',
          description: 'input失去焦点时触发',
          param: 'evt:FocusEvent'
        },
        {
          name: 'clear',
          description: 'input清空内容时触发',
          param: '-'
        },
        {
          name: 'mouseenter',
          description: '鼠标进入input时触发',
          param: 'evt:MouseEvent'
        },
        {
          name: 'mouseleave',
          description: '鼠标离开input时触发',
          param: 'evt:MouseEvent'
        },
        {
          name: 'keydown',
          description: 'input按键按下时触发',
          param: 'evt:KeyboardEvent'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.app-container p {
  color: #555;
  font-size: 12px;
}
.y-input {
  margin-top: 5px;
}
.customer {
  border-color: #ffd53c;
  padding-left: 5px;
  border-radius: 6px;
  height: 40px;
  color: #29cc47;
}
</style>
