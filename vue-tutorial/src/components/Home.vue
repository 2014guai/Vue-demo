<!--src/components/Home.vue-->

<!--首页-->
<template>
  <div class="jumbotron">
    <h1>任务追踪</h1>
    <p>
      <strong>
        <!--以前我们可以直接通过写a标签 然后写v-link属性进行路由跳转，
        在vue2中改为了写<router-link>标签再写对应属性（to）进行跳转-->
        <router-link to="/time-entries">创建一个任务</router-link>
      </strong>
    </p>
  </div>
</template>


