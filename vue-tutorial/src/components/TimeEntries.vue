

<!--计划列表-->
<template>
  <div>
    <!--`$route.path`是当前路由对象的路径，会被解析为绝对路径当-->
    <!--`$route.path !== '/time-entries/log-time'`为`true`是显示，`false`，为不显示。-->
    <!--to 路由跳转地址-->

    <!--出现点击跳转按钮-创建-->
    <router-link
      class="btn btn-primary"
      v-if="$route.path !== '/time-entries/log-time'"
      to="/time-entries/log-time">
      创建
    </router-link>

    <!--出现不能点击跳转-创建-->
    <div v-else>
      <h3>创建</h3>
    </div>

    <hr>

    <!--LogTime子组件，在TimeEntries显示-->
    <router-view></router-view>

    <div class="time-entries">
      <p v-if="!plans.length">
        <strong>还没有任何计划</strong>
      </p>

      <div class="list-group">

        <!--v-for循环，注意参数顺序为(item, index) in items-->
        <a class="list-group-item" v-for="(plan, index) in plans">
          <div class="row">
            <!--计划创建人及头像-->
            <div class="col-sm-2 user-details">
              <!--
              `:src`属性，这个是vue的属性绑定简写`v-bind`可以缩写为`:`
              比如a标签的`href`可以写为`:href`
              并且在vue的指令里就一定不要写插值表达式了(`:src={{xx}}`)，vue自己会去解析
              -->
              <img :src="plan.avatar" class="avatar img-circle img-responsive" />
              <p class="text-center">
                <strong>
                  {{ plan.name }}
                </strong>
              </p>
            </div>
            <!--计划时间及日期-->
            <div class="col-sm-2 text-center time-block">
              <h3 class="list-group-item-text total-time">
                <i class="glyphicon glyphicon-time"></i>
                {{ plan.totalTime }}
              </h3>
              <p class="label label-primary text-center">
                <i class="glyphicon glyphicon-calendar"></i>
                {{ plan.date }}
              </p>
            </div>
            <!--计划的备注-->
            <div class="col-sm-7 comment-section">
              <p>{{ plan.comment }}</p>
            </div>
            <!--删除计划按钮-->
            <div class="col-sm-1">
              <button
                class="btn btn-xs btn-danger delete-button"
                @click="deletePlan(index)">
                X
              </button>
            </div>

          </div>
        </a>

      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name : 'TimeEntries',
    computed : {
      plans () {
        // 从store中取出数据list
        return this.$store.state.list
      }
    },
    methods : {
      deletePlan(index) {
        // 减去总时间
        this.$store.dispatch('decTotalTime', this.plans[index].totalTime)
        // 删除该计划
        this.$store.dispatch('deletePlan', index)
      }
    }
  }
</script>

<style>
  .avatar {
    height: 75px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .user-details {
    background-color: #f5f5f5;
    border-right: 1px solid #ddd;
    margin: -10px 0;
  }
  .time-block {
    padding: 10px;
  }
  .comment-section {
    padding: 20px;
  }
</style>
