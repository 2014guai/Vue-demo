<!--src/App.vue-->

<template>
  <div id="wrapper">
    <!--顶部导航navbar-->
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="glyphicon glyphicon-time"></i>
          计划板
        </a>
        <ul class="nav navbar-nav">
          <li><router-link to="/home">首页</router-link></li>
          <li><router-link to="/time-entries">计划列表</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-3">
        <!--左边栏：统计任务总共时间-->
        <sidebar></sidebar>
      </div>
      <div class="col-sm-9">
        <!--路由切换-->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
//  引入Sidebar.vue组件
  import Sidebar from './components/Sidebar.vue'
  export default{
  	name: 'App',
  	components: {'sidebar': Sidebar}
  }
</script>
