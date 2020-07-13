<template>
  <ul class="fc-select-group__wrap" v-show="visible">
    <li class="fc-select-group__title">{{ label }}</li>
    <li>
      <ul class="fc-select-group">
        <slot></slot>
      </ul>
    </li>
  </ul>
</template>

<script type="text/babel">
  import Emitter from '@/libs/mixins/emitter';
  export default {
    mixins: [Emitter],
    name: 'FcOptionGroup',
    componentName: 'FcOptionGroup',
    props: {
      label: String,
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        visible: true
      };
    },
    watch: {
      disabled(val) {
        this.broadcast('FcOption', 'handleGroupDisabled', val);
      }
    },
    methods: {
      queryChange() {
        this.visible = this.$children &&
          Array.isArray(this.$children) &&
          this.$children.some(option => option.visible === true);
      }
    },
    created() {
      this.$on('queryChange', this.queryChange);
    },
    mounted() {
      if (this.disabled) {
        this.broadcast('FcOption', 'handleGroupDisabled', this.disabled);
      }
    }
  };
</script>