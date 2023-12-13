<template>
  <el-card>
    <el-row type="flex" justify="center">
      <el-col :span="2">
        <el-menu 
          router
          background-color="#545c64" 
          text-color="#ffffff"
          :default-active="$route.path"
          style="height: 750px;"
        >
          <el-menu-item index="/">
            首页/生成器
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="22">
        <router-view></router-view>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
</script>

<style scoped>
#kefu .el-icon {
  width: 40px;
  height: 40px;
  color: #E65A65;
  border: 1px gray dashed;
  border-radius: 50%;
  margin: 0.3rem 0;
  cursor: pointer;
}

#kefu {
  position: fixed;
  right: 10px;
  bottom: 50%;
  z-index: 999;
  width: 60px;
  height: 60px;
}
</style>