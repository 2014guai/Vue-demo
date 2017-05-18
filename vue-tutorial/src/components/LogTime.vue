<!--src/components/LogTime.vue-->

<!--创建计划-->
<template>
  <!--表单-->
  <div class="form-horizontal">
    <!--每行都是form-group-->
    <div class="form-group">
      <div class="col-sm-6">
        <label>日期</label>
        <input  type="date" class="form-control" placeholder="请输入日期"
          v-model="date"/>
      </div>
      <div class="col-sm-6">
        <label>时间</label>
        <input type="number" class="form-control" placeholder="请输入时间"
          v-model="totalTime"/>
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-12">
        <label>备注</label>
        <input type="text" class="form-control" placeholder="备注"
          v-model="comment"/>
      </div>
    </div>
    <button class="btn btn-primary" @click="save()">保存</button>
    <!--取消后，跳转至time-entries页面-->
    <router-link to="/time-entries" class="btn btn-danger">取消</router-link>
    <hr>
  </div>
</template>

<script>
  export default {
    name : 'LogTime',
    data() {
      return {
        date : '',
        totalTime : '',
        comment : ''
      }
    },
    methods:{
    	// 保存
      save() {
      	// 定义静态的姓名及图片
        const plan = {
          name : '二哲',
          image : 'https://sfault-avatar.b0.upaiyun.com/888/223/888223038-5646dbc28d530_huge256',
          date : this.date,
          totalTime : this.totalTime,
          comment : this.comment
        }
        // actions savePlan
        this.$store.dispatch('savePlan', plan)
        // actions addTotalTime
        this.$store.dispatch('addTotalTime', this.totalTime)
        // 返回上一个记录的路由，即保存完成后，回到列表页
        this.$router.go(-1)
      }
    }
  }
</script>
