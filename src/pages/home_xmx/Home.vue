<template>
<div class="app-home">
   <!-- <header-box></header-box>   -->
  <!-- 这里是轮播 -->
   <div class="slide" @mouseover="stop()" @mouseout="move()">
      <div class="slideshow">       
        <ul>
          <li v-for="(img, index) in imgArray" :class="{'active':index===mark }" :key="index">
            <a href="#">
              <img :src='img'>
            </a>
          </li>
        </ul>
      </div>
      <div class="bullet">
        <span v-for="(img1, index) in imgArray1" :class="{ 'active':index===mark }"
        @click="change(index)" :key="index">
           <img :src="img1" alt="">
      </span>
      </div>
  </div>
  <!-- 这里是头部视频 -->
  <div class="kv_video_box" :style="s2">
    <video id="home_top_video" muted="muted" autoplay="autoplay" loop="loop" poster="http://127.0.0.1:3000/blizzard/HeroesHomeKV.jpg"  preload="auto">
    <source type="video/webm" src="http://127.0.0.1:3000/video/Toys_Loop.webm">
    <source type="video/mp4" src="http://127.0.0.1:3000/video/Toys_Loop.mp4">
    </video>
    <div class="btn_skip" id="kv_video_skip" @click="hideVideo">跳过</div>
    <div class="kv_video_shadow"></div>
  </div>
  <a href="javascript:;" class="kv_video_replay icon" id="kv_video_replay"  @click="showVideo"></a>
  <!-- 这里是身体部分 -->
  <div class="container">
    <div id="main" class="clearFix">
      <!-- 左边数据后台获取 -->
      <div class="mainCon">
        <!-- 左边三个图片 -->
        <div class="mainConWrap">
          <div class="main_smalleye clearFix">
           <a class="smalleye_box" href="" target="_blank" v-for="(img, index) in imgArray2" :key="index" @mouseover="light(index)" @mouseout="unlight(index)">
               <div class="smalleye_cont">
                   <img :src="img">
                   <span class="smalleye_cover" :class="{'span1':index===t }"></span>
                   <span class="smalleye_li" :class="{'span2':index===t }"></span>
               </div>
               <div class="smalleye_txt" :class="{'txt':index===t }">{{msg[index]}}</div>
           </a>
          </div>
        </div>
        <!-- 左边新闻详情 -->
         <div class="mainNews" v-for="item in list" :key="item.id" @mouseover="light1(item.id)" @mouseout="unlight1(item.id)" >
          <div class="mainNewsList">
            <div class="news clearFix" :class="{'new1':item.id===m }"><!--改变border-->
                <a class="homeNewsItem" href="" target="_blank">
                    <img :src="item.img_url" :alt="item.title" width="200" height="100">
                    <h4 :class="{'h41':item.id===m }">{{item.title}}</h4><!--改变颜色为白色-->
                    <span class="sprite sprite_news_box" :class="{'sprite1':item.id===m }"></span><!--改变背景图片位置-->
                    <span class="sprite sprite_news_border" :class="{'sprite2':item.id===m }"></span><!--改变with宽度和颜色-->
                    <p class="homeNewsIntro">{{item.content}}}</p>
                </a>
                <p class="homeNewsComment">
                    <span class="comments">
                      <a href="javascript:;" target="_blank" class="news_commentNum2">
                          <span class="icon icon-ommentNum-middle" :class="{'icon1':item.id===m }"></span><!--改变背景图-->
                          <span>{{item.msg_count}}</span>
                      </a>
                    </span>
                    <span class="time">{{item.ctime | datatimeFilter}}</span>
                </p>
            </div>
          </div>
         </div>
         <!-- 加载更多 -->
         <p class="homeNewsMore" @click="getMore">
            <a class="ui-more-style" href="javascript:;">
                <span class="ui-ml"></span>
                <span class="ui-mr"></span>
                <span class="ui-mm">更多新闻</span>
            </a>
         </p>
      </div>
      <!-- 右边轮播等 -->
      <div class="mainSider">
          <div class="module_media">
            <div style="display:none;">
                <img src="http://127.0.0.1:3000/blizzard/letter3.png">
            </div>
            <div class="regArea">
                <a class="sprite btn_yellow_big" href="javascript:;" target="_blank">客户端快速下载</a>
                <div class="module_media_btn">
                    <a class="sprite btn_blue" id="btn_reg" href="javascript:;" target="_blank">注册账号</a>
                    <a class="sprite btn_blue" id="btn_features" href="javascript:; " target="_blank">游戏特色</a>
                </div>
            </div>
            <div class="c-module_style" style="width:325px;margin-left: 7px;">
                <div class="module_style_img">
                    <a class="m-entrance_appsite" href="javascript:;" target="_blank"></a>
                </div>
            </div>
            <div class="module_style  module_media_new padT20 borderB_3px" rel="guide" style="display: block;">
                    <h4 class="ui-home_h4">进阶指南</h4>
                    <ul class="ui-home_list clearFix">
                        <li><a target="_blank" href="javascript:;" title="来自Frankle的奥菲娅嘉年华现场试玩感想">来自Frankle的奥菲娅嘉年华现场试玩感想<i></i></a></li>
                        <li><a target="_blank" href="javascript:;" title="来自Zugrug的玛尔加尼斯攻略">来自Zugrug的玛尔加尼斯攻略<i></i></a></li>
                        <li><a target="_blank" href="javascript:;" title="SmX和Bl3kitny评论新版光明之翼和凯瑞甘">SmX和Bl3kitny评论新版光明之翼和凯瑞甘<i></i></a></li>
                        <li><a target="_blank" href="javascript:;" title="Tetcher为你导航新版恐魔园">Tetcher为你导航新版恐魔园<i></i></a></li>
                    </ul>
                    <h4 class="ui-home_h4 ui-more"><a href="javascript:;" target="_blank">查看更多</a></h4>
            </div>
            <div class="module_style module_forum padT20 borderB_3px" rel="media" style="display: block;">
                    <h4 class="ui-home_h4">社区推荐</h4>
                    <ul class="ui-home_list clearFix">
                        <li class="blz_blue">
                            <a target="_blank" href="javascript:;" >【社区推荐】社区原创音乐"What's up, my healer"<i> </i>
                            </a>
                        </li>
                        <li class="blz_blue">
                            <a target="_blank" href="javascript:;" title="【社区推荐】“超萌风暴”">【社区推荐】“超萌风暴”<i> </i>
                            </a>
                        </li>
                        <li class="blz_blue">
                            <a target="_blank" href="javascript:;" title="【社区推荐】奥菲娅社区优秀作品分享">【社区推荐】奥菲娅社区优秀作品分享<i> </i>
                            </a>
                        </li>
                    </ul>
                    <h4 class="ui-home_h4 ui-more"><a href="javascript:;" target="_blank">查看更多</a></h4>
            </div>
            <div class="module_hero padT20">
                    <h4 class="ui-home_h4">全新内容</h4>
                    <div class="module_hero_video">
                        <a href="javascript:; " target="_blank">
                            <div class="video_box">
                                <img src="http://127.0.0.1:3000/blizzard/H40_right.jpg">
                                <div class="video_show">
                                    <video loop="true" autoplay="autoplay" muted="muted">
                                       <source src="http://127.0.0.1:3000/video/H40_right.webm" type="video/webm">
                                       <source src="http://127.0.0.1:3000/video/H40_right.mp4" type="video/mp4">
                                    </video>
                                </div>
                            </div>
                            <h5 class="ui-home_h5">奥菲娅<span>刺杀型</span></h5>
                        </a>
                    </div>
                    <ul class="ui-home_list clearFix">
                        <li>
                            <a target="_blank" href="http://127.0.0.1:3000/blizzard/6923">《风暴英雄》核心概念<span></span>
                            <i></i>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="http://heroes.blizzard.cn/media/#m-comics">《风暴英雄》官方漫画<span></span><i></i>
                            </a>
                        </li>
                        <li><a target="_blank" href="javascript:;">《风暴英雄》特权网吧<span></span><i></i></a>
                        </li>
                    </ul>
            </div>
            <!-- 这里是轮播 -->
            <div class="module_esports padT20">
                <h4 class="ui-home_h4">赛事活动</h4>
                <div class="w-slide_box box-es">
                    <el-carousel height="150px">
                        <el-carousel-item v-for="(img, index) in imgArray3" :key="index" >
                                <img :src="img">
                        </el-carousel-item>
                    </el-carousel>    
                </div>
            </div>
            <div class="c-module_style">
                    <div class="module_style_img">
                        <a class="m-entrance_rechange" href="javascript:;" target="_blank"></a>
                    </div>
            </div>
            <div class="c-module_style">
                <div class="module_style_img">
                    <a class="m-entrance_tmall" href="javascript:;" target="_blank"></a>
                </div>
            </div>
            <div class="c-module_style">
                <div class="module_style_img">
                    <a class="m-entrance_reward" href="javascript:;" target="_blank"></a>
                </div>
            </div>
            <div class="c-module_style">
                <div class="module_style_img">
                    <a class="m-entrance_aqzx" href="javascript:;" target="_blank"></a>
                </div>
            </div>
            <div class="c-module_style sccn">
                <div class="module_style_img">
                    <a class="m-entrance_sccn" href="javascript:;"></a>
                </div>
                <img src="http://127.0.0.1:3000/blizzard/qrcode.jpg" class="qrcode">
            </div>
            <div class="c-module_style">
                <div class="module_style_img">
                    <a class="m-entrance_bmall" href="javascript:;" target="_blank"></a>
                </div>
            </div>
            <div class="c-module_style">
                <div class="module_style_img">
                    <a class="m-entrance_joinus" href="javascript:;" target="_blank"></a>
                </div>
            </div>
            <div class="module_style module_comm c-module_style" rel="comm" style="display: block;">
                    <h4 class="ui-home_h4">互动社区</h4>
                    <ul class="comm_share clearFix">
                        <li>
                            <a href="javascript:void(0)" class="button_weixin bds_tip">
                                <span></span>
                                微信
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" class="button_yixin bds_tip">
                                <span></span>
                                 易信
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" class="button_tsina" target="_blank">
                                <span></span> 新浪微博
                            </a>
                        </li>
                    </ul>
                    <ul class="comm_share clearFix">
                        <li>
                            <a href="javascript:;" class="button_mail" target="_blank">
                                <span></span> 官方邮箱
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" title="0571-28090163" class="button_phone">
                                <span></span>
                                客服电话
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" class="button_jubao" target="_blank">
                                <span></span> 举报中心
                            </a>
                        </li>
                    </ul>
                </div>
          </div>
      </div>
    </div>
  </div>
</div>  
</template>  
<script>
// import Header from "./Header.vue"
 export default{
     data(){
         return{
           s2:{
             display:"none"
           },
           t:4,
           m:100,
            timer: null, //定时器
            mark: 0, //比对图片索引的变量
            imgArray: [
              'http://127.0.0.1:3000/blizzard/lun1.jpg',
              'http://127.0.0.1:3000/blizzard/lun2.jpg',
              'http://127.0.0.1:3000/blizzard/lun3.jpg',
              'http://127.0.0.1:3000/blizzard/lun4.jpg',
              
      ],
            imgArray1: [
              'http://127.0.0.1:3000/blizzard/lun11.jpg',
              'http://127.0.0.1:3000/blizzard/lun22.jpg',
              'http://127.0.0.1:3000/blizzard/lun33.jpg',
              'http://127.0.0.1:3000/blizzard/lun44.jpg',
              
      ],
             imgArray2:[
             "http://127.0.0.1:3000/blizzard/37f07db7e723053f5214ff88ec6df80d.jpg",
             "http://127.0.0.1:3000/blizzard/8357b3febb983c8a6ce16e33dbb72822.jpg",
             "http://127.0.0.1:3000/blizzard/HGCgold300x150.jpg",

      ],
         imgArray3:[
         "http://127.0.0.1:3000/blizzard/HGCS4.jpg", 
         "http://127.0.0.1:3000/blizzard/425e390d169e4ac1edc24c01f111f2f9.jpg",
         "http://127.0.0.1:3000/blizzard/324x110.jpg",
         "http://127.0.0.1:3000/blizzard/bunner_1129.jpg",
         ],
        msg:[
          "官方漫画《奥菲娅》",
          "新手成长福利一览",
          "2018 电竞计划",
        ],
        list:[],      //显示数据列表
        pno:0,        //当前页码
        pageSize:7,   //页大小
        pageCount:2   //总页数
        }
     },
     methods: {
    autoPlay () {
      this.mark++;
      if (this.mark === 4) {
        this.mark = 0
      }
    },
    play () {
      this.timer = setInterval(this.autoPlay, 2500)
    },
    change (i) {
      this.mark = i
    },
    stop () {
      clearInterval(this.timer)
    },
    move () {
      this.timer = setInterval(this.autoPlay, 2500)
    },
    showVideo(){
      this.s2.display="block";
    },
    hideVideo(){
      this.s2.display="none";
    },
    light(i){
      this.t=i;
    },
    unlight(){
      this.t=4;
    },
    light1(i){
      this.m=i;
    },
    unlight1(){
      this.m=100;
    },
    getMore(){
      this.pno++;
       //创建变量保存是否有当前页条件
       //true 有数据 false 无数据 
       var hasMore = this.pno <= this.pageCount;
       //如果没有页数，停止函数执行 
       if(!hasMore){return}

       //1:发送请求 获取分页数据
       var url = "http://127.0.0.1:3000/newslist?pno="+this.pno+"&pageSize="+this.pageSize;
       this.axios.get(url).then(result=>{
          var rows = this.list.concat(result.data.data);
          console.log(result)
         this.list = rows;
          //保留总页数 
         this.pageCount = result.data.pageCount;
         console.log(result.data.pageCount)
       });
       //2:并且显示组件模板中
    }
  },
  created () {
    this.play()
    this.getMore();
  }
 }

</script>
<style scoped>
      .app-home{
    position: relative;
    background: #0d0119 url(http://127.0.0.1:3000/blizzard/global-bg.jpg) no-repeat fixed 50% 0;
    min-height: 1000px;
    overflow: hidden;
    padding-bottom: 502px;
    }
   * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .comm_share {
    padding-left: 14px;
    background: #000;
    background: rgba(0,0,0,.7);
    border-top: 1px solid #1e133c;
}
.comm_share li {
    float: left;
    font-size: 12px;
    width: 100px;
    line-height: 54px;
    height: 54px;
}
.comm_share li a {
    display: block;
    width: 100%;
    color: #8eb1bc;
    font-size:13px;
}
.comm_share li a span {
    transition: background-position .3s;
    width: 32px;
    height: 54px;
    float: left;
    display: block;
    background: url(http://127.0.0.1:3000/blizzard/share2.png) no-repeat 0 0;
}
.comm_share li a.button_weixin:hover span {
    background-position: -25px -174px;
}
.comm_share li a.button_weixin span {
    background-position: -25px -115px;
}
.comm_share li span {
    padding-left: 10px;
}
.comm_share li a.button_yixin span {
    background-position: -80px -115px;
}
.comm_share li a.button_yixin:hover span {
    background-position: -80px -174px;
}
.comm_share li a.button_tsina span {
    background-position: -130px -115px;
}
.comm_share li a.button_tsina:hover span {
    background-position: -130px -174px;
}
.comm_share li a.button_mail span {
    background-position: -232px -115px;
}
.comm_share li a.button_mail:hover span {
    background-position: -232px -175px;
}
.comm_share li a.button_phone span {
    background-position: -280px -115px;
}
.comm_share li a.button_phone:hover span {
    background-position: -280px -175px;
}
.comm_share li a.button_jubao span {
    background-position: -377px -115px;
}
.comm_share li a.button_jubao:hover span {
    background-position: -377px -175px;
}
.comm_share li a:hover {
    color: #00f5fd;
}
.bds_tip {
    position: relative;
}
  .module_media a.btn_yellow_big:hover {
    background-position: -1855px -387px;
}
.module_media_btn a.btn_blue:hover {
    background-position: -1095px -356px;
}
.module_style_img a.m-entrance_appsite:hover {
    background-position: -400px 0;
}
.ui-home_list li a:hover {
    color: #00f5fd;
}
.ui-home_list li a:hover i {
    width: 3px;
}
.ui-home_list li a i {
    display: block;
    position: absolute;
    height: 100%;
    width: 1px;
    background: #05ffff;
    top: 0;
    left: 0;
    transition: width .3s ease 0s;
}
.ui-home_list li a:hover i {
    width: 3px;
}
.ui-home_list li a i {
    display: block;
    position: absolute;
    height: 100%;
    width: 1px;
    background: #05ffff;
    top: 0;
    left: 0;
    transition: width .3s ease 0s;
}
.ui-home_h5:hover {
    color: #fff;
}
.module_style_img a.m-entrance_rechange:hover {
    background-position: -400px -113px;
}
.module_style_img a.m-entrance_tmall:hover {
    background-position: -400px -339px;
}
.module_style_img a.m-entrance_reward:hover {
    background-position: -400px -452px;
}
.module_style_img a.m-entrance_aqzx:hover {
    background-position: -400px -795px;
}
.module_style_img a.m-entrance_sccn:hover {
    background-position: -400px -910px;
}
.module_style_img a.m-entrance_bmall:hover {
    background-position: -400px -226px;
}
.module_style_img a.m-entrance_joinus {
    background-position: 0 -566px;
}
  .w-slide_box {
    width: 324px;
    overflow: hidden;
    height: 140px;
    position: relative;
}
.c-module_style {
    border-bottom: 3px solid #4c3072;
    padding-top: 20px;
    position: relative;
}
.module_style_img {
    width: 324px;
    height: 90px;
}

.module_style_img a {
    display: block;
    width: 100%;
    height: 100%;
    background-image: url(http://127.0.0.1:3000/blizzard/entrance.jpg);
    background-repeat: no-repeat;
}
.module_style_img a.m-entrance_rechange {
    background-position: 0px -113px;
}
.module_style_img a.m-entrance_tmall {
    background-position: 0 -339px;
}
.module_style_img a.m-entrance_reward {
    background-position: 0 -452px;
}
.module_style_img a.m-entrance_aqzx {
    background-position: 0 -795px;
}
.module_style_img a.m-entrance_sccn {
    background-position: 0 -910px;
}
.c-module_style.sccn .qrcode {
    display: none;
    position: absolute;
    left: 0;
    top: -150px;
    padding: 10px;
    background: rgba(0,0,0,.5);
    border-radius: 5px;
}
.module_style_img a.m-entrance_bmall {
    background-position: 0 -226px;
}
.module_style_img a.m-entrance_joinus {
    background-position: 0 -566px;
}
#main .mainSider .module_style {
    display: none;
}
.c-module_style {
    border-bottom: 3px solid #4c3072;
    padding-top: 20px;
    position: relative;
}


  .module_esports, .module_live {
    margin-left: 7px;
    width: 324px;
    border-bottom: 3px solid #4c3072;
}

  .module_hero {
    width: 324px;
    border-top: 3px solid #4c3072;
    border-bottom: 3px solid #4c3072;
    margin-left: 7px;
}
.module_hero_video {
    width: 324px;
    cursor: pointer;
}
.module_hero_video a {
    display: block;
}
.module_hero_video .video_box {
    width: 324px;
    height: 120px;
    position: relative;
}
.module_hero_video .video_box img {
    vertical-align: top;
    width: 100%;
}
.module_hero_video .video_box .video_show {
    width: 324px;
    position: absolute;
    height: 120px;
    z-index: 6;
    top: 0;
    left: 0;
    overflow: hidden;
}
video {
    object-fit: contain;
}
.module_hero_video h5 {
    border-bottom: 1px solid #1e133c;
}
.ui-home_h5 {
    text-align: center;
    line-height: 30px;
    font-size: 16px;
    font-weight: 700;
    color: #00f5fd;
    background: #000;
    background: rgba(0,0,0,.5);
}
.ui-home_h5 span {
    padding-left: 10px;
}
.ui-home_list {
    width: 324px;
    background: #000;
    background: rgba(0,0,0,.5);
}
.ui-home_list li {
    height: 22px;
    position: relative;
    padding: 13px;
    border-bottom: 1px solid #1e133c;
}
.ui-home_list li a {
    display: block;
    height: 22px;
    position: relative;
    font-size: 14px;
    line-height: 22px;
    /* color: #8eb1bc; */
    padding-left: 14px;
    overflow: hidden;
}
  .module_media {
    width: 340px;
    margin-top: -79px;
    margin-left: -6px;
    position: relative;
    background: url(http://127.0.0.1:3000/blizzard/module_media_2016_2_2.png) no-repeat 0 0;
}
.module_media .regArea {
    position: relative;
    z-index: 9;
    background: url(http://127.0.0.1:3000/blizzard/module_media_2016_2_2_2.png) no-repeat 0 0;
}
.module_media a.btn_yellow_big {
    text-align: center;
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    line-height: 86px;
    margin-top: 84px;
    width: 339px;
    background-position: -1855px -278px;
    display: inline-block;
    height: 100px;
    text-shadow: 0 0 5px #ffd5a8;
}
.module_media_btn {
    height: 71px;
    width: 325px;
    margin: -25px auto auto 13px;
    position: relative;
    z-index: 2;
    padding-left: 6px;
}
.c-module_style {
    border-bottom: 3px solid #4c3072;
    padding-top: 20px;
    position: relative;
}
.module_media_btn a.btn_blue {
    background-position: -1095px -262px;
    color: #fff;
    text-shadow: 0 0 10px #b9d6ff;
    width: 150px;
}
.module_media_btn a {
    width: 154px;
    height: 56px;
    font-size: 18px;
    line-height: 56px;
    text-align: center;
    vertical-align: top;
    font-weight: 700;
}
.module_style_img {
    width: 324px;
    height: 90px;
}
.module_style_img a.m-entrance_appsite {
    background-position: 0 0;
}
.module_style_img a {
    display: block;
    width: 100%;
    height: 100%;
    background-image: url(http://127.0.0.1:3000/blizzard/entrance.jpg);
    background-repeat: no-repeat;
}
.module_forum, .module_media_new {
    width: 324px;
    margin-left: 7px;
}
.borderB_3px {
    border-bottom: 3px solid #4c3072;
}
.padT20 {
    padding-top: 20px;
}
.module_style {
    position: relative;
}
.ui-home_h4 {
    padding-left: 14px;
    line-height: 40px;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    background: #000;
    background: rgba(0,0,0,.5);
    position: relative;
    height: 40px;
}
.ui-home_list {
    width: 324px;
    background: #000;
    background: rgba(0,0,0,.5);
}
.ui-more {
    font-size: 12px;
    text-align: right;
    padding-right: 15px;
    box-sizing: border-box;
}
.ui-home_h4 {
    padding-left: 14px;
    line-height: 40px;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    background: #000;
    background: rgba(0,0,0,.5);
    position: relative;
    height: 40px;
}
.ui-home_list li {
    height: 22px;
    position: relative;
    padding: 13px;
    border-bottom: 1px solid #1e133c;
}
.ui-home_list li a {
    display: block;
    height: 22px;
    position: relative;
    font-size: 14px;
    line-height: 22px;
    color: #8eb1bc;
    padding-left: 14px;
    overflow: hidden;
}
.ui-more a {
    color: #4f93b6;
}
.module_style {
    position: relative;
}
.module_forum.borderB_3px {
    border: none;
}
.module_forum, .module_media_new {
    width: 324px;
    margin-left: 7px;
}
.module_forum .ui-home_list li {
    border-bottom: 1px solid #392686;
}
.module_forum .ui-home_list li a {
    color: #00b4ff;
}
.module_forum h4 {
    border-bottom: 1px solid #392686;
    background: rgba(69,49,188,.4);
}

.ui-home_list li {
    height: 22px;
    position: relative;
    padding: 13px;
    border-bottom: 1px solid #1e133c;
}
  .mainNewsList {
    margin-bottom: 20px;
}
.homeNewsMore {
    padding: 7px 0 0 0;
}
.homeNewsMore a {
    color: #48ccff;
    font-size: 18px;
    display: block;
    height: 47px;
    line-height: 47px;
    text-align: center;
}
.ui-more-style {
    position: relative;
    display: inline-block;
    height: 47px;
    line-height: 47px;
    cursor: pointer;
}
.ui-more-style .ui-ml {
    left: 0;
    background-position: 0 0;
}
.ui-more-style .ui-ml, .ui-more-style .ui-mr {
    position: absolute;
    width: 41px;
    height: 47px;
    overflow: hidden;
    background-image: url(http://127.0.0.1:3000/blizzard/more_border.png);
    background-repeat: no-repeat;
}
.ui-more-style .ui-mr {
    right: 0;
    background-position: -77px 0;
}
.ui-more-style .ui-ml, .ui-more-style .ui-mr {
    position: absolute;
    width: 41px;
    height: 47px;
    overflow: hidden;
    background-image: url(http://127.0.0.1:3000/blizzard/more_border.png);
    background-repeat: no-repeat;
}
.ui-more-style .ui-mm {
    display: block;
    height: 47px;
    line-height: 47px;
    margin: 0 41px;
    text-align: center;
    background: url(http://127.0.0.1:3000/blizzard/more_r.png) repeat-x 0 0;
}
.ui-more-style:hover{
  color:white;
  box-shadow: 0px 0px 3px #48ccff;
}
.mainNewsList .news {
    background: #000;
    background: rgba(0,0,0,.3);
    border: 1px solid #000;
    border: 1px solid rgba(0,0,0,.3);
    padding: 25px;
    position: relative;
}
.mainNewsList .news.new1 {
    border:1px solid #8eb1bc;
}
.homeNewsItem {
    padding-left: 222px;
    display: block;
    position: relative;
    padding-bottom: 25px;
    cursor: pointer;
}
.homeNewsItem img {
    position: absolute;
    left: 0;
    box-shadow: 0 0 20px -6px #000;
}
.homeNewsItem h4 {
    color: #4b8dc8;
    font-size: 18px;
    margin-bottom: 10px;
    max-height: 52px;
    overflow: hidden;
}
.homeNewsItem h4.h41{
    color:white;
}
.sprite_news_box {
    position: absolute;
    width: 220px;
    height: 110px;
    left: -16px;
    top: -9px;
    background-position: 0 0;
}
.sprite_news_box.sprite1{
 background-position: 0px -144px}
.sprite {
    display: inline-block;
    background-image: url(http://127.0.0.1:3000/blizzard/sprite4.png);
    background-repeat: no-repeat;
}

.sprite_news_border {
    display: block;
    width: 1px;
    top: -1px;
    left: -6px;
    height: 102px;
    position: absolute;
    background-color: #59055c;
    transition: width .2s;
    transition:all 0.5s linear;
}
.sprite_news_border.sprite2{
    width: 3px;
    background-color:  #4b8dc8;;
}
.homeNewsItem p.homeNewsIntro {
    font-size: 14px;
    color: #8eb1bc;
    max-height: 64px;
    overflow: hidden;
    letter-spacing: 1px;
}
.homeNewsComment {
    position: relative;
    left: 223px;
    display: inline-block;
    font-family: exoWebfont;
}
.clearFix:after {
    display: block;
    clear: both;
    height: 0;
    visibility: hidden;
    content: ".";
}
.homeNewsComment .time {
    color: #4b4848;
}
.homeNewsComment a {
    color: #fff;
    cursor: pointer;
}
.news_commentNum2 {
    color: #4f93b6;
    font-size: 14px;
    padding-right: 8px;
    color: #4f93b6;
}
.news_commentNum2 span {
    color: #4f93b6;
}
.icon-ommentNum-middle {
    width: 16px;
    height: 16px;
    vertical-align: middle;
    background-position: -74px -102px;
    margin-right: 6px;
}
.icon {
    display: inline-block;
    background-image: url(http://127.0.0.1:3000/blizzard/icon2.png);
    background-repeat: no-repeat;
}
  .mainConWrap{
    opacity: 1;
    margin-left:0px;
    width: 100%;
  }
  .mainConWrap div {
    transition: all .3s ease 0s;
}
.main_smalleye {
    height: 240px;
    background: url(http://127.0.0.1:3000/blizzard/bg_smalleye2.png) 50% 15px no-repeat;
    background-position: 50% 53px;
    width: 100%;
}

.main_smalleye .smalleye_box {
  width: 250px;
    height: 128px;
    margin-right: 15px;
    cursor: pointer;
    display: block;
    float: left;
    padding: 5px 14px 5px 5px;
    background: url(http://127.0.0.1:3000/blizzard/bg_eye_li.png) repeat;
}

.smalleye_cont {
    width: 100%;
    height: 100%;
    position: relative;
}

.smalleye_cont img {
    width: 100%;
    vertical-align: top;
    height: 100%;
}
.smalleye_cont .smalleye_cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    z-index: 999;
    transition: opacity .3s ease 0s;
    background: url(http://127.0.0.1:3000/blizzard/play_cover3.png) 0 0 no-repeat;
}
.smalleye_cont .smalleye_cover.span1{
  opacity:1;
}
.smalleye_cont .smalleye_li {
    position: absolute;
    height: 100%;
    width: 2px;
    top: 0;
    right: -10px;
    background: #59055c;
    transition: width .3s ease 0s;
}
.smalleye_cont .smalleye_li.span2{
  width: 4px;
}
.smalleye_box .smalleye_txt {
    line-height: 24px;
    padding-top: 12px;
    color: #00f5fd;
    text-align: center;
    width: 100%;
    font-size: 18px;
}
.smalleye_box .smalleye_txt.txt {

 color:white;
}

  .container {
    width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
 }
 .clearFix {
    display: block;
}
#main .mainCon {
    width: 855px;
    float: left;
}
#main .mainSider {
    width: 325px;
    float: right;
    position: relative;
}
  .kv_video_shadow {
    height: 172px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: url(http://127.0.0.1:3000/blizzard/shadow.png) top center repeat;
    z-index: 2;
}
.kv_video_box .btn_skip {
    height: 40px;
    line-height: 40px;
    width: 100px;
    color: #fff;
    text-shadow: 0 2px 0 #000;
    font-size: 18px;
    text-align: center;
    bottom: 40px;
    left: 50%;
    margin-left: -50px;
    position: absolute;
    z-index:30;
    font-family: "exoRegular";
    text-decoration: underline;
    cursor: pointer;
}
.kv_video_box {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 710px;
    z-index: 30;
    overflow: hidden;
    display: none;
}
.kv_video_box video {
    vertical-align: top;
    margin-left: -960px;
    left: 50%;
    position: relative;
    width: 1920px;
    z-index: 1;
}

  .kv_video_replay {
    top: 115px;
    margin-left: 552px;
}
.kv_video_replay {
    height: 36px;
    width: 45px;
    position: absolute;
    top: 185px;
    left: 50%;
    margin-left: 452px;
    z-index: 10;
    background-position: -341px -7px;
}
.kv_video_replay:hover{
   background-position: -341px -55px;
}
.icon {
    display: inline-block;
    background-image: url(http://127.0.0.1:3000/blizzard/icon2.png);
    background-repeat: no-repeat;
}
a {
    color: #00f5fd;
}
a {
    text-decoration: none;
    outline: 0;
}

  .slide {
    width:100%;
    height: 670px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
  }
  .slideshow {
    width: 100%;
    height: 670px;
  }
  .slideshow li {
    position: absolute;
    top:0;
    left:0;
    opacity: 0;
  }
  .slideshow li.active{
    transition: all 2s linear;
    opacity: 1;
  }
  .slideshow img {
    width: 100%;
    height: 670px;
   
  }
  
  .bullet {
    width: 1200px;
    height: 64px;
    position: absolute;
    left: 50%;
    margin-left: -600px;
    bottom: 25px;
    text-align: center;
    z-index: 20;
    padding: 10px 0;
    background-image: linear-gradient(90deg,rgba(255,255,255,0) 0,rgba(31,0,204,.6) 50%,rgba(255,255,255,0) 100%);
  }
  .bullet span {
    width: 125px;
    height: 60px;
    margin: 0 5px;
    display: inline-block;
    cursor: pointer;
    background-position: -55px -5px;
    padding: 2px;
    background-color: #3c42b3;
  }
  .bullet span img{
    width: 125px;
    height: 60px;
  }
  .bullet span.active {
    cursor: default;
    background-color: #6ee3f5;
  }

/* .image-enter-active{opacity:1;transition: all 1.5s ease;} 
.image-enter-leave{opacity:0;transition: all 1.5s ease;} 
.image-enter { opacity: 0;} 
.image-leave { opacity: 1; } */

    
</style>