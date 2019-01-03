<template>
  <div class="foruminfo">
    <forum-box></forum-box>
    <div id="postList" class="body neon-bar">
      <div id="pt" class="body-trail">
        <div class="z">
          <a href="javascript:;">《风暴英雄》官方论坛</a>
          <em>></em>
          <a href="javasrcpit:;">综合讨论区</a>
          <em>></em>
          <a href="javascript:;">综合讨论区</a>
        </div>
      </div>
      <div id="ct" class="wp cl">
        <div class="mn">
          <div class="forum-actions">
            <div class="forumName">综合讨论区</div>
          </div>
          <div id="pgt" class="bm bw0 pgs cl">
            <span id="fd_page_top">
              <div class="pg">
                <div class="page" v-if="pageCount !== 1">
                  <span @click="prev" v-if="currentPage !== 1">上一页</span>
                  <span @click="first" v-if="firstPage == true"
                        v-bind:class="{active : 1 == currentPage}">1</span>
                  <span class="point" v-if="pointN == true">...</span>
                  <span v-bind:class="[{active : page == currentPage},{point : page == '...'}]"
                        v-for="(page, index) in pageArr"
                        @click="goTo(page)">{{page}}</span>
                  <span class="point" v-if="pointL == true">...</span>
                  <span @click="last" v-if="lastPage == true"
                        v-bind:class="{active : pageCount == currentPage}">{{pageCount}}</span>
                  <span @click="next" v-if="currentPage !== pageCount">下一页</span>
                </div>
              </div>
            </span>
            <div id="newspecial" class="ui-button button1" @click="jump">
              <span class="button-left">
                <span class="button-right">发新帖</span>
              </span>
            </div>
          </div>
          <div id="threadlist" class="tl bm bmw">
            <div class="th">
              <table cellspacing="0" cellpadding="0">
                <tbody>
                  <tr>
                    <td class="icn">
                      <img src="/img/1_images_forums_layout_content_bg.png" width="1" height="1">
                    </td>
                    <td>
                      <div class="tf">
                        <span id="filter_special" class="showmenu xi2">标题</span>
                      </div>
                    </td>
                    <td class="frm">作者</td>
                    <td class="num">回复</td>
                    <td class="num">查看</td>
                    <td class="by">最后发表</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="bm_c">
              <table class="forum_38" cellspacing="0" cellpadding="0" id="threadlisttableid">
                <tbody id="stickthread_344">
                  <tr class="threadList" v-for="item in list" :key="item.id">
                    <td class="icn1">
                      <a href="javascript:;" class="topic-icon-wrapper" title="全局置顶主题 - 新窗口打开">
                        <span class="employee-icon-abs"></span>
                        <img src="/img/folder_common.gif">
                      </a>
                    </td>
                    <th class="common comment_title">
                      <span class="status-text">【置顶】</span>
                      <a href="javascript:;" class="s xst">{{item.content}}</a>
                      <img src="/img/common.gif" title="附件">
                    </th>
                    <td class="frm">
                      <span class="admincol">{{item.ename}}</span>
                      <span class="employee-icon"></span>
                    </td>
                    <td class="num n1">{{item.look}}</td>
                    <td class="num n1">{{item.pl}}</td>
                    <td class="by">
                      <a href="javasrcipt:;">
                        <cite>
                          <span class="user">{{item.uname}}</span>
                        </cite>
                        <em>
                          <span title="2018-12-18 11:06">{{item.ctime | datatimeFilter}}</span>
                        </em>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="forum-actions forum-actions-bottom">
            <div id="pgt" class="bm bw0 pgs cl">
                <span id="fd_page_top">
                  <div class="pg">
                    <div class="page" v-if="pageCount !== 1">
                      <span @click="prev" v-if="currentPage !== 1">上一页</span>
                      <span @click="first" v-if="firstPage == true"
                            v-bind:class="{active : 1 == currentPage}">1</span>
                      <span class="point" v-if="pointN == true">...</span>
                      <span v-bind:class="[{active : page == currentPage},{point : page == '...'}]"
                            v-for="(page, index) in pageArr"
                            @click="goTo(page)">{{page}}</span>
                      <span class="point" v-if="pointL == true">...</span>
                      <span @click="last" v-if="lastPage == true"
                            v-bind:class="{active : pageCount == currentPage}">{{pageCount}}</span>
                      <span @click="next" v-if="currentPage !== pageCount">下一页</span>
                    </div>
                  </div>
                </span>
                <div id="newspecial" class="ui-button button1">
                  <span class="button-left">
                    <span class="button-right">发新帖</span>
                  </span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import forum from '../sub/forum.vue'
  export default {
    data(){
      return {
        pageCount:10,//总页数
        currentPage:1,//当前页
        firstPage:'',//是否显示第一页
        lastPage:'',//是否显示最后一页
        pointN:'',//省略号前部
        pointL:'',//省略号后部
        pno: 1,
        pageSize: 14,
        list:[],
        nid : this.$route.params.id
      }
    },
    created(){
      this.getnews();
    },
    methods:{
      getnews(){
        var nid = this.$route.params.id;
        //console.log(nid)
         var url = "http://127.0.0.1:3000/newslist1?nid="+nid+"&pno="+this.pno+"&pageSize="+this.pageSize;
         this.axios.get(url).then(result=>{
           //console.log(result)
           var rows = result.data.data;
           this.list = rows;
           this.pageCount = result.data.pageCount
         })
      },
      first:function () {
        this.currentPage = 1;
        var pno = this.currentPage;
        //console.log(pno)
        var url = "http://127.0.0.1:3000/newslist1?nid="+this.nid+"&pno="+pno+"&pageSize="+this.pageSize;
         this.axios.get(url).then(result=>{
           //console.log(result)
           var rows = result.data.data;
           this.list = rows;
           this.pno = pno;
         })
      },
      prev:function () {
        this.currentPage = this.currentPage - 1;
        this.pno--;
        //console.log(this.pno)
        if(this.pno>=1){
          var url = "http://127.0.0.1:3000/newslist1?nid="+this.nid+"&pno="+this.pno+"&pageSize="+this.pageSize;
          this.axios.get(url).then(result=>{
            //console.log(result)
            var rows = result.data.data;
            this.list = rows;
          })
        }else{
          return;
        }
      },
      next:function () {
        this.currentPage = this.currentPage + 1;
        this.pno++;
        //console.log(this.pno)
        var url = "http://127.0.0.1:3000/newslist1?nid="+this.nid+"&pno="+this.pno+"&pageSize="+this.pageSize;
        this.axios.get(url).then(result=>{
          //console.log(result)
          var rows = result.data.data;
          this.list = rows;
        })
      },
      last:function () {
        this.currentPage = this.pageCount;
        var pno = this.pageCount;
        //console.log(pno)
        var url = "http://127.0.0.1:3000/newslist1?nid="+this.nid+"&pno="+pno+"&pageSize="+this.pageSize;
         this.axios.get(url).then(result=>{
           //console.log(result)
           var rows = result.data.data;
           this.list = rows;
           this.pno = pno;
         })
      },
      goTo:function (index) {
        this.currentPage = index;
        var pno = index;
        //console.log(pno)
        var url = "http://127.0.0.1:3000/newslist1?nid="+this.nid+"&pno="+pno+"&pageSize="+this.pageSize;
         this.axios.get(url).then(result=>{
           //console.log(result)
           var rows = result.data.data;
           this.list = rows;
           this.pno = pno;
         })
      },
      jump:function(){
        var nid = this.nid;
        this.$router.push("/postforum/"+nid)
      }
    },
    computed:{
      pageArr:function () {
        var arr = [];
        if(this.pageCount <= 9){//页数小于9全部显示
          this.firstPage = true;
          this.lastPage = true;
          this.pointN = false;
          this.pointL = false;
          for (var i = 2; i <= this.pageCount -1; i++){
              //console.log(i);
              arr.push(i);
          }
          return arr;
        } else {
            if(this.currentPage < 6){//小于6页时
              this.firstPage = true;
              this.pointL = true;
              this.pointN = false;
              this.lastPage = true;
              for(var z = 2; z <= 7; z++){
                  arr.push(z)
              }
              return arr;
            } else {//当前页大于6页
                if(this.currentPage + 2 < this.pageCount){//五条中显示前两页和后两页
                  arr = [
                    this.currentPage -2,
                    this.currentPage -1,
                    this.currentPage,
                    this.currentPage +1,
                    this.currentPage +2
                  ];
                  this.pointN = true;
                  if(this.currentPage < this.pageCount){
                      this.lastPage = true;
                  }
                  return arr
                } else {
                  this.pointN = true;
                  this.pointL = false;
                  arr = [
                    this.pageCount -6,
                    this.pageCount -5,
                    this.pageCount -4,
                    this.pageCount -3,
                    this.pageCount -2,
                    this.pageCount -1,
                  ];
                  return arr
            }
          }
        }
      },
    },
    components:{
      "forum-box":forum
    }
  }
</script>
<style>
  .page .active{
    background: linear-gradient(rgba(216,97,215,0.5),rgba(135,11,193,0.5)) repeat scroll 0 0 rgba(0,0,0,0);
    border: 1px solid #801090;
  }
  .foruminfo{
    background:#11041e  url(http://127.0.0.1:3000/forum/222.jpg) no-repeat fixed 50% 0;
    font: 12px/1.5 'Microsoft Yahei','SimSun',sans-serif;
    color: #8eb1bc;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  #postList {
    width: 1000px;
    margin: 40px auto 0;
    position: relative;
    z-index: 1;
  }
  .body {
    background: url(http://127.0.0.1:3000/forum/1_images_forums_layout_content_bg.png) repeat;
    border-bottom: 1px solid #00d8ff;
    border-top: 1px solid #3b1f4e;
    margin-top: 55px;
    padding-top: 15px;
    position: relative;
  }
  .neon-bar:before {
    content: "";
    background: url(http://127.0.0.1:3000/forum/1_images_forums_layout_pink-background.png) no-repeat;
    position: absolute;
    top: -327px;
    width: 1000px;
    height: 650px;
    z-index: -1;
  }
  #pt {
    margin: 0 auto;
    left: 0;
    position: absolute;
    top: 2px;
    line-height: auto;
    z-index: 35;
    border: none;
    background: transparent;
  }
  #pt .z {
    padding: 20px 60px 7px 40px;
    z-index: 5;
    font-size: 12px;
    float: left;
    color: #fff;
    line-height: 22px;
  }
  #pt .z a, #pt .z em {
    float: left;
    display: block;
    color: #991797;
  }
  a:hover {
    text-decoration: none;
    color: #fff;
  }
  #pt .z a:hover {
    border-bottom: 1px dotted #c920c7;
    color: #c920c7;
  }
  #pt .z em {
    width: 12px;
    height: 10px;
    line-height: 200px;
    margin: 7px 7px 0 0;
    background: url(http://127.0.0.1:3000/forum/arrows.gif) no-repeat 0 -103px;
    overflow: hidden;
  }
  em, cite, i {
    font-style: normal;
  }
  #ct {
    min-height: 300px;
  }
  .wp {
    margin: 0 auto;
    width: auto;
  }
  .cl {
    zoom: 1;
  }
  .mn {
    padding-bottom: 100px;
    position: relative;
    overflow: hidden;
  }
  .forum-actions {
    padding: 20px 0;
  }
  .forumName {
    color: #fff;
    font-size: 30px;
    text-shadow: 0 0 16px #009cff;
    padding: 43px 40px 0;
  }
  .bm, .ntc_l, .pn {
    border-radius: 5px;
  }
  .pgs {
    padding-right: 0;
  }
  .bw0 {
    background: transparent;
    border: none !important;
  }
  .bm, .bn {
    margin-bottom: 10px;
  }
  #pgt .pg, #pgt .pgb {
    margin-top: 5px;
  }
  .pg {
    float: right;
    padding-right: 20px;
  }
  .pg, .pgb {
    line-height: 26px;
  }
  .page span{
    background: #0a1a3a;
    background: -webkit-gradient(linear,50% 0%,50% 100%,color-stop(0%,rgba(8,28,52,0.5)),color-stop(50%,rgba(7,45,87,0.5)),color-stop(100%,rgba(34,54,127,0.5)));
    background: -webkit-linear-gradient(rgba(8,28,52,0.5),rgba(7,45,87,0.5) 50%,rgba(34,54,127,0.5));
    background: -moz-linear-gradient(rgba(8,28,52,0.5),rgba(7,45,87,0.5) 50%,rgba(34,54,127,0.5));
    background: -o-linear-gradient(rgba(8,28,52,0.5),rgba(7,45,87,0.5) 50%,rgba(34,54,127,0.5));
    background: linear-gradient(rgba(8,28,52,0.5),rgba(7,45,87,0.5) 50%,rgba(34,54,127,0.5));
    border: 1px solid #0f4381;
    color: #fff;
    display: block;
    float: left;
    overflow: hidden;
    text-decoration: none;
    font-size: 11px;
    height: 20px;
    line-height: 20px;
    margin: 0 2px;
    padding: 0 9px;
    text-align: center;
    transition: border 0.25s ease 0s;
  }
  .page span:hover {
    background: #081c34;
    background: rgba(8,28,52,0.75);
    background: -webkit-gradient(linear,50% 0%,50% 100%,color-stop(0%,rgba(8,28,52,0.75)),color-stop(50%,rgba(7,45,87,0.75)),color-stop(100%,rgba(34,54,127,0.75)));
    background: -webkit-linear-gradient(rgba(8,28,52,0.75),rgba(7,45,87,0.75) 50%,rgba(34,54,127,0.75));
    background: -moz-linear-gradient(rgba(8,28,52,0.75),rgba(7,45,87,0.75) 50%,rgba(34,54,127,0.75));
    background: -o-linear-gradient(rgba(8,28,52,0.75),rgba(7,45,87,0.75) 50%,rgba(34,54,127,0.75));
    background: linear-gradient(rgba(8,28,52,0.75),rgba(7,45,87,0.75) 50%,rgba(34,54,127,0.75));
  }
  .page span:hover, .pgb a:hover {
    color: #fff;
  }
  .pgs #newspecial, .pgs #newspecialtmp, .pgs #post_reply, .pgs #post_replytmp {
    float: left;
    margin-right: 5px;
  }
  .pgs #newspecial, .pgs #newspecialtmp, .pgs #post_reply, .pgs #post_replytmp {
    float: left;
    margin-right: 5px;
  }
  .ui-button, .ui-cancel {
    background: none;
    border: 0 none;
    cursor: pointer;
    display: inline-block;
    height: auto;
    margin: 0;
    outline: 0 none;
    overflow: visible;
    padding: 0;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
  }
  .button1 {
    height: 36px;
    margin-left: 38px;
    padding: 4px 10px 2px;
    line-height: 20px;
    font-size: 14px;
    min-width: 1.75em;
    text-align: center;
    transition: border 0.25s ease;
    color: #858084;
    border: 1px solid #112E62;
    background: #081c34;
    background: rgba(8,28,52,0.5);
    background: -webkit-gradient(linear,50% 0%,50% 100%,color-stop(0%,rgba(8,28,52,0.5)),color-stop(50%,rgba(7,45,87,0.5)),color-stop(100%,rgba(34,54,127,0.5)));
    background: -webkit-linear-gradient(rgba(8,28,52,0.5),rgba(7,45,87,0.5) 50%,rgba(34,54,127,0.5));
    background: -moz-linear-gradient(rgba(8,28,52,0.5),rgba(7,45,87,0.5) 50%,rgba(34,54,127,0.5));
    background: -o-linear-gradient(rgba(8,28,52,0.5),rgba(7,45,87,0.5) 50%,rgba(34,54,127,0.5));
    background: linear-gradient(rgba(8,28,52,0.5),rgba(7,45,87,0.5) 50%,rgba(34,54,127,0.5));
    -webkit-background-size: 1px 100%;
    -moz-background-size: 1px 100%;
    -o-background-size: 1px 100%;
    background-size: 1px 100%;
    background-position: 100% 0,0 0;
  }
  .button1:hover {
    color: #fff;
    border: 1px solid #112E62;
    background: #081c34;
    background: rgba(8,28,52,0.75);
    background: -webkit-gradient(linear,50% 0%,50% 100%,color-stop(0%,rgba(8,28,52,0.75)),color-stop(50%,rgba(7,45,87,0.75)),color-stop(100%,rgba(34,54,127,0.75)));
    background: -webkit-linear-gradient(rgba(8,28,52,0.75),rgba(7,45,87,0.75) 50%,rgba(34,54,127,0.75));
    background: -moz-linear-gradient(rgba(8,28,52,0.75),rgba(7,45,87,0.75) 50%,rgba(34,54,127,0.75));
    background: -o-linear-gradient(rgba(8,28,52,0.75),rgba(7,45,87,0.75) 50%,rgba(34,54,127,0.75));
    background: linear-gradient(rgba(8,28,52,0.75),rgba(7,45,87,0.75) 50%,rgba(34,54,127,0.75));
    -webkit-background-size: 1px 100%;
    -moz-background-size: 1px 100%;
    -o-background-size: 1px 100%;
    background-size: 1px 100%;
    background-position: 100% 0,0 0;
    box-shadow: 0 0 10px rgba(0,102,153,0.25);
  }
  a:hover {
    text-decoration: none;
    color: #fff;
  }
  .button1 .button-left, .button1 .button-right {
    line-height: 36px;
    height: 36px;
    padding: 0 10px;
  }
  .button1:hover .button-right {
    color: #fff;
  }
  .button1 .button-right {
    text-transform: uppercase;
    overflow: hidden;
    color: #34ffff;
    background-image: -webkit-linear-gradient(#ffffff,#34ffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
    padding: 0 10px;
  }
  #threadlist {
    margin: 0 auto;
  }
  .tl {
    border-radius: 0 0 5px 5px;
  } 
  .bm {
    border: none;
  }
  .bmw {
    width: 1000px;
    margin: 0 auto;
    border: none;
  }
  .tl .th {
    height: 25px;
    padding-top: 10px;
    line-height: 25px;
    background: none;
    margin-top: 1px;
  }
  .tl .th table {
    border: none;
  }
  .tl table {
    width: 950px;
    margin: 0 auto;
    table-layout: fixed;
    border-collapse: separate;
  }
  table {
    empty-cells: show;
    border-collapse: collapse;
  }
  #threadlist td, #threadlist th {
    border-bottom: 1px solid #172040;
  }
  .tl .icn {
    padding-left: 0;
    width: 35px;
    text-align: center;
  }
  .tl .icn1 {
    padding-left: 0;
    width: 35px;
    text-align: center;
  }
  .showmenu {
    color: #fff;
    padding-right: 16px;
    cursor: auto;
    white-space: nowrap;
    background: none;
  }
  .tl .th td.num, .tl .th td.frm, .tl .th td.by {
    color: #fff;
  }
  .tl .frm {
    width: 120px;
  }
  .tl .th td, .tl .th th {
    border: none;
  }
  .tl .num {
    width: 60px;
    color: #03345F;
    text-align: center;
    line-height: 14px;
  }
  .tl .by {
    width: 190px;
    color: #03345F;
    text-align: right;
    line-height: 14px;
    padding-right: 10px;
  }
  .tl .bm_c {
    padding: 0;
  }
  .tl .bm_c tbody tr {
    background: none;
  }
  .tl .bm_c tr:hover {
    background-color: rgba(34,49,84,0.25);
    transition: background-color 0.3s ease 0s;
  }
  .topic-icon-wrapper {
    display: block;
    line-height: 24px;
    position: relative;
    width: 40px;
  }
  a {
    color: #48ccff;
    text-decoration: none;
  }
  .tl .icn a:hover {
    text-decoration: none;
  }
  .employee-icon-abs {
    height: 16px;
    width: 14px;
    background: url(http://127.0.0.1:3000/forum/netease-logo-icon.png) 
  }
  .employee-icon-abs, .employee-icon-blizzard {
    left: 10px;
    position: absolute;
    top: 15px;
    z-index: 2;
    display: block;
    background-repeat: no-repeat; 
  }
  a img {
    border: none;
    position: relative;
    top: 7px;
    left: 7px;
  }
  caption, th {
    text-align: left;
    font-weight: 400;
  }
  .status-text {
    color: #fff;
    display: inline;
    padding-right: 2px;
  }
  .xst {
    font-family: 'Microsoft Yahei','SimSun',sans-serif;
    font-size: 12px;
  }
  .common img{
    position: relative;
    top: 4px;
  }
  .common{
    right: 0;
  }
  .tps {
    white-space: nowrap;
  }
  .tps a {
    padding: 2px 4px;
  }
  #threadlisttableid .admincol {
    color: #fff;
    max-width: 79px;
    overflow: hidden;
    text-overflow: ellipsis;
    width: auto;
    display: block;
    float: left;
    height: 45px;
    line-height: 45px;
  }
  #threadlisttableid .employee-icon {
    height: 16px;
    width: 14px;
    margin: 15px 0 0 4px;
    background-image: url(http://127.0.0.1:3000/forum/netease-logo-icon.png);
  }
  #threadlisttableid .employee-icon, #threadlisttableid .employee-icon-blz {
    float: left;
    margin: 17px 0 0 0px;
    background-repeat: no-repeat;
    display: block;
  }
  tl cite, .tl .num em {
    display: block;
    float: left;
    margin: 0 5px;
  }
  em, cite, i {
    font-style: normal;
  }
  #threadlisttableid .user {
    display: block;
    float: left;
    height: 45px;
    color: #3d6f95;
    line-height: 45px;
  }
  .tl td em, .tl td em a {
    color: #3d6f95;
    display: block;
    height: 45px;
    line-height: 45px;
  }
  .tl td em {
    font-size: 12px;
    font-family: \"微软雅黑\",Arial,Psimsun,sans-serif;
    -webkit-text-size-adjust: none;
  }
  .tl .n1{
    color:#8eb1bc;
  }
  .forum-actions-bottom {
    background: none;
  }
  .neon-bar:after {
    content: "";
    background: url(http://127.0.0.1:3000/forum/1_images_forums_layout_blue-background.png)no-repeat;
    position: absolute;
    bottom: -78px;
    width: 1000px;
    height: 316px;
    z-index: -1;
  }
</style>