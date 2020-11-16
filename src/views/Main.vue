<template>
  <el-container>
    <el-header><al-header/></el-header>
    <el-main><al-content/></el-main>
    <el-footer height='100px'><al-footer/></el-footer>
  </el-container>
</template>


<script>
import {default as AlHeader} from '../components/Header.vue'
import {default as AlContent} from '../components/Content.vue'
import {default as AlFooter} from '../components/Footer.vue'


export default {
  name: 'Main',
  components: {
    AlHeader,
    AlContent,
    AlFooter,
  }
}
</script>

<style>
.el-container{
    height: 100%;
}
</style>