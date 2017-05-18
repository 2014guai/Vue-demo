<!--src/components/Sidebar.vue-->

<!--左边栏
通过store去获取总时间-->
<template>
  <div class="panel paner-default">
    <div class="panel-heading">
      <h1 class="text-center">已有时长</h1>
    </div>
    <div class="panel-body">
      <!--通过计算显示时间-->
      <h1 class="text-center">{{ time }}小时</h1>
    </div>
  </div>
</template>

<script type="text/javascript">
    export default{
    	name: 'Sidebar',
    	computed:{
    		// 计算总共时间
    		time(){
          /*在组件中引用全局数据，this.$store,
          获取全局state某个状态，但是不能直接修改*/
    			return this.$store.state.totalTime
        }
      }
    }
</script>
