<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#409EFF" text-color="#fff" active-text-color="#ffd04b">
    <el-menu-item index="0" :style="fontStyle">XXX</el-menu-item>
    <el-menu-item index="1" :style="fontStyle">首页</el-menu-item>
    <!--<el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>-->
    <el-menu-item index="3" :style="fontStyle">关于我</el-menu-item>
    <!--<el-menu-item index="4">
        <a href="#" target="_self">订单管理</a>
      </el-menu-item>-->
  </el-menu>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      fontStyle: {
        fontSize: '20px'
      }
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>

</style>
