<template>
  <div class="adaptiveContainer">
    <div v-if="$slots.header" class="box-header" ref="header">
      <slot name="header"></slot>
    </div>

    <div v-if="$slots.body" class="box-body" ref="body">
      <happy-scroll resize hide-vertical hide-horizontal>
        <slot name="body"></slot>
      </happy-scroll>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdaptiveContainer",
  mounted() {
    let heightStyle = this.$refs.header.offsetHeight;
    debugger;
  }
};
</script>
<style lang="scss">
.adaptiveContainer {
  .happy-scroll-container {
    display: inline-block;
    width: 100%;
    // max-width: 1000px;
    max-height: calc(100vh - 210px);
  }
  .happy-scroll-content {
    display: inline-block;
    width: 100%;
    max-width: 1000px;
    max-height: calc(100vh - 210px);
    padding-bottom: 40px;
  }
  background-color: $color-background;
  overflow: hidden;
  .box-header {
    max-width: 1010px;
    background-color: #fff;
    overflow: hidden;
    margin-bottom: 10px;
    padding: 10px 20px;
  }
  .box-body {
    max-width: 1000px;
    background-color: #fff;
    padding: 0px 20px;
    height: calc(100vh - 200px);
    max-height: calc(100vh - 200px);
  }
}
</style>
