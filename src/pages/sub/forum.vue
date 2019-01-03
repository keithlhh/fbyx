<template>
    <div class="header">
      <div id="hd">
        <div id="service" class="cl">
          <ul class="service-bar">
            <li class="service-cell service-home">
              <a href="http://www.battlentet.com.cn" :style="obj" @mouseover="dong" @mouseout="goo" title="战网首页">&nbsp;</a>
            </li>
            <li class="service-cell service-welcome">
              <a href="#">登录</a>
              或
              <a href="#">注册一个战网通行证</a>
            </li>
            <li class="service-cell service-account">
              <a href="#" class="service-link">商店</a>
            </li>
            <li class="service-cell service-account">
              <a href="#" class="service-link">战网通行证</a>
            </li>
            <li class="service-cell service-support service-support-enhanced">
              <a href="javascript:;" class="service-link service-link-dropdown" :style="obj3" @mouseover="can1" @mouseout="cle1" @click="eshow">在线客服</a>
              <div class="support-menu" id="support-menu" @mouseover="can2" @mouseout="cle2" :style="dis">
                <div class="support-primary">
                  <ul class="support-nav">
                    <li>
                      <a href="#" class="support-category">
                        <strong class="support-caption">知识库中心</strong>
                        浏览知识库文档。             
                      </a>
                    </li>
                    <li>
                      <a href="#" class="support-category">
                        <strong class="support-caption">我的表单</strong>
                        查看您的有效技术支持请求。             
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="service-cell service-explore service-support-enhanced">
              <a href="javascript:;" class="dropdown" :style="obj2" @mouseover="can" @mouseout="cle" @click="cshow">浏览</a>
              <div class="explore-menu" id="explore-menu" @mouseover="can3" @mouseout="cle3" :style="s2">
                <div class="explore-primary">
                  <ul class="explore-nav">
                    <li>
                      <a href="javascript:;">
                        <strong class="explore-caption">战网首页</strong>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <strong class="explore-caption">商城</strong>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <strong class="explore-caption">账号</strong>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <strong class="explore-caption">在线客服</strong>
                      </a>
                    </li>
                  </ul>
                  <div class="explore-links">
                    <h2 class="explore-caption">更多内容</h2>
                    <ul>
                      <li>
                        <a href="javascript:;">家长监护</a>
                      </li>
                      <li>
                        <a href="javascript:;">账号安全</a>
                      </li>
                      <li>
                        <a href="javascript:;">战网通行证技术支持</a>
                      </li>
                    </ul>
                  </div>
                  <a href="javascript:;" class="explore-get-app">
                    <div class="app-preview" :style="s1" @mouseover="lai" @mouseout="hui"></div>
                    <div class="app-tagline">获取战网客户端</div>
                  </a>
                </div>
                <ul class="explore-secondary">
                  <li class="explore-game explore-game-wow">
                    <a href="javascript:;">
                      <span class="explore-game-inner">
                        <strong class="explore-caption">《魔兽世界®》</strong>
                      </span>
                    </a>
                  </li>
                  <li class="explore-game explore-game-sc2">
                    <a href="javascript:;">
                      <span class="explore-game-inner">
                        <strong class="explore-caption">《星际争霸®II》</strong>
                      </span>
                    </a>
                  </li>
                  <li class="explore-game explore-game-hs">
                    <a href="javascript:;">
                      <span class="explore-game-inner">
                        <strong class="explore-caption">《炉石传说™》</strong>
                      </span>
                    </a>
                  </li>
                  <li class="explore-game explore-game-heroes">
                    <a href="javascript:;">
                      <span class="explore-game-inner">
                        <strong class="explore-caption">《风暴英雄™》</strong>
                      </span>
                    </a>
                  </li>
                  <li class="explore-game explore-game-d3">
                    <a href="javascript:;">
                      <span class="explore-game-inner">
                        <strong class="explore-caption">《暗黑破坏神®III》</strong>
                      </span>
                    </a>
                  </li>
                  <li class="explore-game explore-game-overwatch">
                    <a href="javascript:;">
                      <span class="explore-game-inner">
                        <strong class="explore-caption">《守望先锋®》</strong>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <h1>
          <a href="javascript:;"></a>
        </h1>
        <div id="navWrap" :style="s3">
          <ul class="clearFix" id="nav">
            <li class="nav1">
              <a href="javascript:;" class="a1">首页
                <span class="nav_active_line"></span>
              </a>
              <span class="nav_line"></span>
            </li>
            <li class="nav2">
              <a href="javascript:;" class="a1">新闻
                <span class="nav_active_line"></span>
              </a>
              <span class="nav_line"></span>
            </li>
            <li class="nav3">
              <a href="javascript:;" class="a1">游戏
                <i class="nav_small_arrow"></i>
                <span class="nav_active_line"></span>
              </a>
              <span class="nav_line"></span>
              <div class="sub-navigation">
                <div class="sub-navigation__container">
                  <div class="sub-navigation__list">
                    <div class="sub-navigation__item">
                      <a href="javascript:;" class="sub-navigation__link">游戏特色</a>
                    </div>
                    <div class="sub-navigation__item">
                      <a href="javascript:;" class="sub-navigation__link">游戏概览</a>
                    </div>
                    <div class="sub-navigation__item">
                      <a href="javascript:;" class="sub-navigation__link">新手指南</a>
                    </div>
                    <div class="sub-navigation__item">
                      <a href="javascript:;" class="sub-navigation__link">风暴乱斗</a>
                    </div>
                    <div class="sub-navigation__item">
                      <a href="javascript:;" class="sub-navigation__link">战场地图</a>
                    </div>
                    <div class="sub-navigation__item">
                      <a href="javascript:;" class="sub-navigation__link">排名模式</a>
                    </div>
                    <div class="sub-navigation__item">
                      <a href="javascript:;" class="sub-navigation__link">好友招募</a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav4">
              <a href="javascript:;" class="a1">英雄
                <span class="nav_active_line"></span>
              </a>
              <span class="nav_line"></span>
            </li>
            <li class="nav5">
              <a href="javascript:;" class="a1">排行榜
                <span class="nav_active_line"></span>
              </a>
              <span class="nav_line"></span>
            </li>
            <li class="nav6">
              <a href="javascript:;" class="a1">视频图片
                <span class="nav_active_line"></span>
              </a>
              <span class="nav_line"></span>
            </li>
            <li class="nav7">
              <a href="javascript:;" class="a1 active">论坛
                <span class="nav_active_line"></span>
              </a>
              <span class="nav_line"></span>
            </li>
            <li class="nav8 nav_yellow">
              <a href="javascript:;" class="a1">游戏下载
              </a>
              <span class="nav_line"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>
  export default {
    data(){
      return{
        i : 0,
        obj:{
          backgroundPosition:"0 -40px"
        },
        obj2:{
          backgroundPosition:"100% -40px"
        },
        obj3:{
          backgroundPosition:"100% -240px"          
        },
        dis:{
          display:"none"
        },
        s1:{
          backgroundPosition:"0 0"
        },
        s2:{
          display:"none"
        },
        s3:{
          position: "absolute",
          top: "222px",
          visibility: "visible",
          backgroundPosition: "-9999px -9999px"
        },
      }
    },
    mounted(){ // 监听（绑定）滚轮 滚动事件
      window.addEventListener("scroll",this.onscroll,true);
    },
    methods:{
      onscroll(){
        // 页面滚动距顶部距离
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        var scroll = 222;
        if(scrollTop >= scroll){
          this.s3.top = "0"
          this.s3.position = "fixed";
          this.s3.backgroundPosition = "0 0";
        }else if(scrollTop < scroll){
          this.s3.top = "222px";
          this.s3.position = "absolute";
          this.backgroundPosition = "-9999px -9999px";
        }      
      },
      dong(){
        this.obj.backgroundPosition = " 0 -80px"
      },
      goo(){
        this.obj.backgroundPosition = "0 -40px"
      },
      can(){
        this.obj2.backgroundPosition = " 100% -80px"
      },
      cle(){
        this.obj2.backgroundPosition = " 100% -40px";
        this.s2.display = "none";
      },
      can1(){
        this.obj3.backgroundPosition = " 100% -280px"
      },
      cle1(){
        this.obj3.backgroundPosition = " 100% -240px";  
        this.dis.display = "none";
      },
      can2(){
        this.dis.display = "block";
      },
      cle2(){
        this.dis.display = "none";
      },
      can3(){
        this.s2.display = "block";
      },
      cle3(){
        this.s2.display = "none";
      },
      eshow(){
        if(this.dis.display=="none"){
          this.dis.display = "block"
        }else{
          this.dis.display = "none"
        }
      },
      lai(){
        this.s1.backgroundPosition = "0 -145px"
      },
      hui(){
        this.s1.backgroundPosition = "0 0"
      },
      cshow(){
        if(this.s2.display=="none"){
          this.s2.display = "block"
        }else{
          this.s2.display = "none"
        }
      },
    },
  }
</script>
<style>
  #hd{
    height:260px;
    width:1000px;
    margin:0 auto;
    position:relative;
    z-index:1000;
  }
  #service {
    position: absolute;
    width: 1024px;
    left: 50%;
    top: 0;
    margin-left: -524px;
    z-index: 1001;
  }
  .cl{
    zoom:1;
  }
  .cl::after{
    content: "";
    display: block;
    clear: both;
  }
  .service-bar{
    display: inline-block;
    font-size: 12px;
    position: absolute;
    right: 0;
    text-align: right;
    z-index: 75;
  }
  ul{
    margin: 0;
    padding: 0;
  }
  ul li{
    list-style: none;
    margin: 0;
  }
  .service-cell{
    background: url(http://127.0.0.1:3000/forum/111.png) repeat-x scroll 0px -200px;
    color:#8694A1;
    display: block;
    float: left;
    line-height: 32px;
    padding: 0 0 7px;
    position: relative;
  }
  .service-home{
    background-position: 0 0;
    background-repeat: no-repeat;
  }
  .service-home a{
    background: url(http://127.0.0.1:3000/forum/110.png) no-repeat scroll 0px -40px;
    border-left: 0 none;
    display: block;
    line-height: 33px;
    padding: 0 0 0 7px;
    text-indent: -9999px;
    width: 48px;
  }
  .service-cell a:hover{
    color: #fff;
  }
  .service-cell a{
    color: #00B6FF;
    text-decoration: none;
    font-size: 12px;
  }
  a{
    outline: none;
    text-decoration: none;
  }
  .service-welcome{
    padding: 0 15px 7px;;
  }
  .service-link{
    border-left: 1px solid #33373B;
    display: block;
    line-height: 33px;
    padding: 0 18px;
    text-transform: uppercase;
  }
  .service-support-enhanced {
    background-position: 100% -241px;
  }
  .service-support a.service-link-dropdown{
    background: url(http://127.0.0.1:3000/forum/111.png) no-repeat scroll 100% -240px;
    display: block;
    padding: 0 38px 0 18px;
  }
  .service-explore {
    background-position: 100% 0;
    padding: 0 0 7px;
  }
  .service-explore a.dropdown {
    background: url(http://127.0.0.1:3000/forum/111.png) no-repeat scroll 100% -40px;
    color: #FFFFFF !important;
    display: block;
    line-height: 33px;
    padding: 0 40px 0 1.5rem;
    text-transform: uppercase;
  }
  .support-menu {
    position: absolute;
    right: 0;
    text-align: left;
    top: 33px;
    width: 295px;
    z-index: 85;
  }
  .support-primary {
    background: none repeat scroll 0 0 #343C46;
    line-height: 1.5;
    overflow: hidden;
    padding: 1em 13px 12px 15px;
  }
  .support-nav {
    margin: 0;
    padding: 0;
  }
  .support-nav li {
    list-style: none outside none;
  }
  .support-nav a.support-category {
    border-bottom: 3px solid #2A5164;
    color: #94989F;
    display: block;
    margin: 0 0 0.5em;
    padding: 0 0 0.75em;
  }
  .support-nav a.support-category:hover{
    color:#fff;
    border-bottom: 3px solid #fff;
  }
  .support-caption {
    color: #E8EBF0;
    display: block;
    font-size: 16px;
    font-weight: normal;
    letter-spacing: -1px;
    line-height: 1.333;
    margin: 0;
  }
  .explore-menu {
    background: none repeat scroll 0 0 #343C46;
    box-shadow: -1px 1px 14px rgba(0,0,0,0.6);
    position: absolute;
    right: 7px;
    text-align: left;
    top: 33px;
    width: 660px;
    z-index: 85;
  }
  .explore-primary {
    background: none repeat scroll 0 0 #343C46;
    line-height: 1.5;
    overflow: hidden;
    padding: 1.25em 16px 1em;
  }
  .explore-nav {
    float: left;
    width: 27%;
    margin-right: 2em;
  }
  .explore-nav a {
    border-bottom: 3px solid #2A5164;
    color: #94989F;
    display: block;
    margin: 0 0 0.5em;
    padding: 0.5em 0 0.75em;
  }
  .explore-menu .explore-caption {
    color: #B2BAC7;
    display: block;
    font-size: 16px;
    font-weight: normal;
    line-height: 1.333;
    margin: 0;
  }
  .explore-menu strong.explore-caption:hover{
    color:#fff;
  }
  .explore-nav a:hover{
    border-bottom: 3px solid #fff;
  }
  .explore-links {
    float: left;
    width: 30%;
  }
  #hd h2 {
    padding: 0;
    float: none;
  }
  .explore-links .explore-caption {
    font-size: 14px;
    margin: 0 0 0.25em;
    padding: 0 4px;
    white-space: normal;
  }
  .explore-links ul li {
    list-style: none outside none;
  }
  .explore-links a {
    border-radius: 2px 2px 2px 2px;
    color: #94989F;
    display: block;
    margin: 0 0 0.1em;
    padding: 2px 4px;
  }
  .explore-links a:hover{
    border-radius: 2px 2px 2px 2px;
    background-color: #222323;
    display: block;
  }
  .explore-get-app {
    border: 1px solid #030303;
    box-shadow: 2px 2px 3px #21242a;
    display: block;
    float: right;
    cursor: pointer;
  }  
  .explore-get-app .app-preview {
    background: url(http://127.0.0.1:3000/forum/1_frame_app-screen-explore-menu.png) no-repeat 0 0px;
    height: 139px;
    width: 232px;
  }
  .explore-get-app .app-tagline {
    background-color: #1f242e;
    border: 1px solid #363b45;
    border-top: none;
    padding: 0.5em;
    text-align: center;
  }
  .explore-secondary {
    background: none repeat scroll 0 0 #232A31;
    height: 160px;
    line-height: 1.1;
    margin: 0;
    overflow: visible;
    padding: 0;
  }
  .explore-secondary li {
    float: left;
    list-style: none outside none;
    width: 110px;
  }
  .explore-game-wow a {
    background-position: 0 0;
  }
  .explore-game a {
    background: url(http://127.0.0.1:3000/forum/1_frame_explore-menu_v3.jpg) no-repeat scroll -434px -190px;
    height: 160px;
    position: relative;
    cursor: pointer;
  }
  .explore-secondary a {
    color: #94989F;
    display: block;
    height: 158px;
    width: 110px;
  }
  .explore-secondary .explore-game-inner {
    display: block;
    padding: 110px 0 0;
  }
  .explore-secondary .explore-caption {
    display: block;
    font-size: 12px;
    padding-bottom: 4px;
    text-align: center;
    white-space: normal;
  }
  .explore-game-wow a {
    background-position: 0 0;
  }
  .explore-game-sc2 a {
    background-position: -219px 0;
  }
  .explore-game-hs a {
    background-position: -439px 0;
  }
  .explore-game-heroes a {
    background-position: -329px 0;
  }
  .explore-game-d3 a {
    background-position: -109px 0;
  }
  .explore-game-overwatch a {
    background-position: -549px 0;
  }
  #hd h1 {
    background: url(http://127.0.0.1:3000/forum/1_images_common_logo.png) no-repeat;
    height: 416px;
    left: -275px;
    position: absolute;
    top: -186px;
    width: 930px;
  }
  h1{
    font-size: 1rem;
    margin: 0;
    padding: 0;
  }
  #hd h1 a {
    display: block;
    height: 180px;
    left: 280px;
    position: absolute;
    top: 192px;
    width: 366px;
  }
  #navWrap {
    margin-bottom: 5px;
    position: absolute;
    z-index: 10;
    top: 222px;
    width: 1000px;
    animation: bright 2s linear infinite;
    -webkit-animation: bright 2s linear infinite;
    background: url(http://127.0.0.1:3000/forum/1_images_common_top-shadow.png) no-repeat -9999px -9999px;
  }
  #nav {
    background: #241f4c;
    background: -webkit-linear-gradient(#241f4c,#494794) repeat;
    background: linear-gradient(#241f4c,#494794) repeat;
    padding: 2px;
    position: relative;
  }
  .clearFix:after {
    clear: both;
    content: ".";
    display: block;
    height: 0;
    visibility: hidden;
  }
  #nav li {
    float: left;
    width: 12.5%;
    *width: 12.4%;
    height: 37px;
    font-size: 16px;
    font-weight: bold;
    position: relative;
    background: #130f2a;
    background: -webkit-linear-gradient(#130f2a,#1b1638);
    background: linear-gradient(#130f2a,#1b1638);
  }
  #nav li a {
    position: relative;
    display: block;
    line-height: 37px;
    height: 37px;
    color: #c4cdf3;
    text-align: center;
    background: #130f2a;
    background: -webkit-linear-gradient(#130f2a,#1b1638);
    background: linear-gradient(#130f2a,#1b1638);
    transition: all 0.5s ease 0s;
  }
  #nav a span.nav_active_line {
    position: absolute;
    width: 102%;
    height: 3px;
    left: -1%;
    bottom: -3px;
    transition: background-color 0.5s ease 0s;
    z-index: 9;
  }
  #nav li span.nav_line {
    position: absolute;
    display: block;
    z-index: 9;
    background: #494794;
    background: -webkit-linear-gradient(transparent 5%,#494794 50%,transparent 95%) repeat;
    background: linear-gradient(transparent 5%,#494794 50%,transparent 95%) repeat;
    height: 100%;
    position: absolute;
    right: -1px;
    top: 0;
    width: 2px;
  }
  .nav_small_arrow {
    background: url(http://127.0.0.1:3000/forum/1_images_common_nav_arrow_small.png) top right no-repeat;
    display: inline-block;
    height: 20px;
    width: 20px;
    vertical-align: middle;
  }
  .sub-navigation {
    left: -3px;
    padding-top: 6px;
    position: absolute;
    top: 100%;
    display: none;
  }
  .nav3:hover .sub-navigation{
    display: block;
  }
  .sub-navigation__container {
    background-color: #000;
    border: 3px solid #44428b;
    padding: 2px;
  }
  .sub-navigation__list {
    background-color: #150d25;
  }
  .sub-navigation__item {
    overflow: hidden;
  }
  #nav li a.sub-navigation__link {
    background: none;
    height: 20px;
    text-align: left;
    color: #b9c2f1;
    line-height: 20px;
    font-size: 12px;
    font-weight: bold;
    padding: 8px 36px;
    white-space: nowrap;
  }
  #nav li.nav_yellow {
    line-height: 35px;
  }
  #nav li.nav_yellow a {
    color: #fff;
    line-height: 38px;
    background: #ff9900;
    background: -webkit-linear-gradient(#ff9900,#ff6600);
    background: linear-gradient(#ff9900,#ff6600);
    border: 1px solid #fdbc80;
    border-bottom: 1px solid #ffffff;
    text-shadow: none;
    transition: all 0.5s ease 0s;
    position: relative;
    z-index: 9;
    top: -2px;
    right: -2px;
    box-shadow: 0 0 16px rgba(169,55,0,.9);
  }
  #nav li.nav_yellow:hover span.nav_line {
    box-shadow: none;
  }
  #nav li.nav_yellow span.nav_line {
    display: none;
  }
  #nav li:hover .a1, #nav li a.active {
    background: #231b40;
    color: #fff;
    background: -webkit-radial-gradient(ellipse at center bottom,#2a1a73 40%,transparent 85%) repeat;
    background: radial-gradient(ellipse at center bottom,#2a1a73 40%,transparent 85%) repeat;
  }
  #nav li a.sub-navigation__link:hover {
    background: #231b40;
    color: #fff;
  }
  #nav a.active span.nav_active_line, #nav a:hover span.nav_active_line {
    background: #3f86f3;
  }
  #nav li.nav_yellow:hover a {
    background: #feac32;
    background: -webkit-linear-gradient(#ff9900,#fc7821);
    background: linear-gradient(#ff9900,#fc7821);
    border: 1px solid #ffffff;
    box-shadow: 0 0 10px 1px #da761c;
  }
  
</style>