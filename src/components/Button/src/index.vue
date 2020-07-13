<template>
  <button
    class="fc-button"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'fc-button--' + type : '',
      buttonSize ? 'fc-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
      },
    ]"
  >
    <i class="fc-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: "FcButton",
  inject: {
    FcForm: {
      default: "",
    },
    FcFormItem: {
      default: "",
    },
  },
  props: {
    type: {
      type: String,
      default: "default",
    },
    size: String,
    icon: {
      type: String,
      default: "",
    },
    nativeType: {
      type: String,
      default: "button",
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
  },
  computed: {
    _fcFormItemSize() {
      return (this.fcFormItem || {}).fcFormItemSize;
    },
    buttonSize() {
      return this.size || this._fcFormItemSize || (this.$fcEMENT || {}).size;
    },
    buttonDisabled() {
      return this.disabled || (this.fcForm || {}).disabled;
    },
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../styles/button.scss";
</style>
