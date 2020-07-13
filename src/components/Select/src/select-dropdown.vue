<template>
  <div
    class="fc-select-dropdown fc-popper"
    :class="[{ 'is-multiple': $parent.multiple }, popperClass]"
    :style="{ minWidth: minWidth }">
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  import Popper from '@/libs/utils/vue-popper';
  export default {
    name: 'FcSelectDropdown',
    componentName: 'FcSelectDropdown',
    mixins: [Popper],
    props: {
      placement: {
        default: 'bottom-start'
      },
      boundariesPadding: {
        default: 0
      },
      popperOptions: {
        default() {
          return {
            gpuAcceleration: false
          };
        }
      },
      visibleArrow: {
        default: true
      },
      appendToBody: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        minWidth: ''
      };
    },
    computed: {
      popperClass() {
        return this.$parent.popperClass;
      }
    },
    watch: {
      '$parent.inputWidth'() {
        this.minWidth = this.$parent.$fc.getBoundingClientRect().width + 'px';
      }
    },
    mounted() {
      this.referenceElm = this.$parent.$refs.reference.$fc;
      this.$parent.popperElm = this.popperElm = this.$fc;
      this.$on('updatePopper', () => {
        if (this.$parent.visible) this.updatePopper();
      });
      this.$on('destroyPopper', this.destroyPopper);
    }
  };
</script>