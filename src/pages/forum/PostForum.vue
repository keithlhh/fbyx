<template>
  <div class="postforum">
    <forum-box></forum-box>
    <div class="pforum">
      <div class="card">
        <div class="card-item">
          <textarea placeholder="最多150个字" maxlength="150" v-model="msg"></textarea>
          <el-row class="btn1">
              <el-button class="btn2" :plain="true" @click="postforum">发表评论</el-button>
          </el-row>
        </div>
      </div>
    </div> 
  </div>  
</template>
<script>
  import forum from '../sub/forum.vue';
  export default {
    data(){
      return {
        msg:"",
        ename:"匿名",
        uname:"匿名",
        look:0,
        pl:0
      }
    },
    methods: {
      postforum(){
        var nid = this.$route.params.nid;
        var ename = this.ename;
        var uname = this.uname;
        var content = this.msg;
        var look = this.look;
        var pl = this.pl;
        var msg = this.msg;
        var size = msg.trim().length;
        if(size==0){
          alert("评论不能为空")
          return;
        }
        var url = "http://127.0.0.1:3000/addforum";
        var param = `nid=${nid}&ename=${ename}&uname=${uname}&content=${content}&look=${look}&pl=${pl}`;
        this.axios.post(url,param).then(result=>{
          //console.log(result)
          if(result.data.code==1){
            alert("发表成功");
            this.$router.push("/foruminfo/"+nid);
          }
        })
      }
    },
    components:{
      "forum-box":forum
    }
  }
</script>
<style>
 .postforum{
    background:#11041e  url(http://127.0.0.1:3000/forum/222.jpg) no-repeat fixed 50% 0;
    font: 12px/1.5 'Microsoft Yahei','SimSun',sans-serif;
    color: #8eb1bc;
    overflow: hidden;
    margin: 0;
    padding: 0;
 }
 .pforum{
    position: relative;
    display: flex;
    justify-content: center;
 }
 .card{
    width: 750px;
    height: 400px;
    padding: 100px;
    display: flex;
    justify-content: center;
    position: relative;
 }
 .card .card-item{
    width: 750px;
    height: 350px;
 }
 .card .card-item textarea{
    display: block;
    width: 750px;
    height: 350px;
    font-size: 24px;
    font-weight: bold;
    border-radius: 8px;
    opacity: 0.5;
    color: #8e19c6;
 }
 .btn1{
  opacity: 0.5;
  left: 647px;
  margin-top:10px;
 }
 .btn2{
   font-size: 17px !important;
 }
</style>