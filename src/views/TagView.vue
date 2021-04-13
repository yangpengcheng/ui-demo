<template>
  <y-accordion>
    <y-accordion-item title="基本使用">
      <y-tag color="attention">注意标签</y-tag>
      <y-tag color="danger">危险标签</y-tag>
      <y-tag color="info">信息标签</y-tag>
      <y-tag color="primary">主要标签</y-tag>
      <y-tag color="success">成功标签</y-tag>
      <y-tag color="warning">警告标签</y-tag>
    </y-accordion-item>
    <y-accordion-item title="可移除标签">
      <y-tag color="attention" closable>注意标签</y-tag>
      <y-tag color="danger" closable>危险标签</y-tag>
      <y-tag color="info" closable>信息标签</y-tag>
      <y-tag color="primary" closable>主要标签</y-tag>
      <y-tag color="success" closable>成功标签</y-tag>
      <y-tag color="warning" closable>警告标签</y-tag>
    </y-accordion-item>
    <y-accordion-item title="动态可编辑标签">
      <y-tag
        v-for="tag in tags"
        :key="tag.name"
        closable
        :disable-transitions="false"
        :color="tag.type"
        @close="handleClose(tag)"
      >
        {{ tag.name }}
        <template #icon>
          <i class="fa fa-times" aria-hidden="true"></i>
        </template>
      </y-tag>
      <y-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        @keyup.enter="handleInputConfirm"
        @blur="handleInputConfirm"
      ></y-input>
      <y-button v-else class="button-new-tag" @click="showInput">
        <p style="color: #fff">+ new tag</p>
      </y-button>
    </y-accordion-item>
    <y-accordion-item title="尺寸">
      <y-tag size="large">大号标签</y-tag>
      <y-tag size="default">中等标签</y-tag>
      <y-tag size="small">小型标签</y-tag>
    </y-accordion-item>
    <y-accordion-item title="主题">
      <y-tag color="attention" effect="light">注意标签</y-tag>
      <y-tag color="danger" effect="light">危险标签</y-tag>
      <y-tag color="info" effect="light">信息标签</y-tag>
      <y-tag color="primary" effect="light">主要标签</y-tag>
      <y-tag color="success" effect="light">成功标签</y-tag>
      <y-tag color="warning" effect="light">警告标签</y-tag><br>
      <y-tag color="attention" effect="dark">注意标签</y-tag>
      <y-tag color="danger" effect="dark">危险标签</y-tag>
      <y-tag color="info" effect="dark">信息标签</y-tag>
      <y-tag color="primary" effect="dark">主要标签</y-tag>
      <y-tag color="success" effect="dark">成功标签</y-tag>
      <y-tag color="warning" effect="dark">警告标签</y-tag><br>
      <y-tag color="attention" effect="outline">注意标签</y-tag>
      <y-tag color="danger" effect="outline">危险标签</y-tag>
      <y-tag color="info" effect="outline">信息标签</y-tag>
      <y-tag color="primary" effect="outline">主要标签</y-tag>
      <y-tag color="success" effect="outline">成功标签</y-tag>
      <y-tag color="warning" effect="outline">警告标签</y-tag>
    </y-accordion-item>
  </y-accordion>
  <property-table :data="data" />
  <event-table :data="events" />
</template>

<script>
import { ref, nextTick } from 'vue'
import PropertyTable from '../components/Property.vue'
import EventTable from '../components/Event.vue'
export default {
  components: { PropertyTable,EventTable },
  setup() {
    var tags = ref([
      { name: '默认标签', type: 'primary' },
      { name: '成功标签', type: 'success' },
      { name: '信息标签', type: 'info' },
      { name: '警告标签', type: 'warning' },
      { name: '危险标签', type: 'danger' }
    ])
    const saveTagInput = ref(null)
    const inputVisible = ref(false)
    const inputValue = ref('')
    const handleClose = (tag) => {
      tags.value.splice(tags.value.indexOf(tag), 1)
    }
    const showInput = () => {
      inputVisible.value = true
      nextTick(() => {
        saveTagInput.value.$refs.input.focus()
      })
    }
    const handleInputConfirm = () => {
      const value = inputValue.value
      if (value) {
        tags.value.push({ name: value, type: 'success' })
      }
      inputVisible.value = false
      inputValue.value = ''
    }
    return {
      tags,
      saveTagInput,
      handleClose,
      inputVisible,
      inputValue,
      showInput,
      handleInputConfirm,
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
          param: 'closable',
          description: 'tag是否可以被移除(隐藏)',
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
          param: 'effect',
          description: '效果',
          type: 'String',
          optional: 'dark / light / outline',
          default: 'dark'
        }
      ],
      events: [
        {
          name: 'close',
          description: '关闭标签触发事件',
          param: '-'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.y-tag + .y-tag {
  margin-left: 10px;
  margin-bottom: 5px;
}
.button-new-tag {
  margin-left: 10px;
  line-height: 24px;
  padding-top: 0;
  padding: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
}
</style>
