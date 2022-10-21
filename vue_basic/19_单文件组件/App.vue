<template>
  <div>  <!-- 模板里面必须有个根元素 -->
    <School></School>  <!-- 在脚手架里面可以直接写自闭合 -->
    <Student></Student>
  </div>
</template>

<script>
    //引入组件
import School from './School.vue'
import Student from './Student.vue'

export default {
    name:'App',
    components:{
        School,
        Student
    }

}
</script>
