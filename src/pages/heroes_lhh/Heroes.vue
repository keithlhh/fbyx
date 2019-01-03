<template>
  <div class="heroes">
    <div class="search">
      <div class="heroes_search">
        <p class="my_header_search">
          <!--separator-class="el-icon-arrow-right" 字体-->
          <el-breadcrumb>
            <el-breadcrumb-item :to="{ path: '/' }">
              <span class="my_span1">风暴英雄</span>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
              <span class="my_span2">英雄</span>
            </el-breadcrumb-item>
          </el-breadcrumb>
        </p>
      </div>
      <div class="fielter">
        <div class="my_type type">
          <h3 class="search_h3">类型:</h3>
          <a
            href="#"
            :title="hero_type[index]"
            v-for="(item,index) of classObj_hero"
            :key="index"
            @click="checkHeroes(index)"
            :class="item?index:false"
          ></a>
        </div>
        <div class="my_type game_icon">
          <h3 class="search_h3 my_last_h3">游戏:</h3>
          <a
            href="#"
            :title="game_type[index]"
            v-for="(item,index) of classObj_game"
            :key="index"
            @click="checkGame(index)"
            :class="item?index:false"
          ></a>
        </div>
        <div class="div_input">
          <input class="my_input" placeholder="搜索英雄…" type="text" v-model="seaVal">
          <a href="#" class="search_icon"></a>
        </div>
      </div>
    </div>
    <!-- 英雄部分 -->
    <router-link to="/details">
      <div class="heroes_list">
        <div class="heroes_list_item" v-for="(item,i) of herObj" :key="i">
          <a href="#">
            <div class="hero_list_box">
              <img :src="item.img_url" alt>
            </div>
            <h4 class="heroes_name">{{item.name}}</h4>
            <div class="hero_heading">
              <span class="hero_icon" :class="item.role"></span>
              <i>{{item.title}}</i>
            </div>
            <div class="hover_border"></div>
          </a>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      /**
      根据classObj_hero的true或false来显示或隐藏
    */ seaVal: "",
      heroesInfo: {
        warrior: [],
        assassin: [],
        support: [],
        specialist: []
      } /**axios请求的英雄信息 */,
      herObj: [],
      classObj_hero: {
        warrior: false,
        assassin: false,
        support: false,
        specialist: false
      },
      classObj_game: {
        warcraft: false,
        starcraft: false,
        diablo: false,
        retro: false,
        overwatch: false
      },
      hero_type: {
        warrior: "战斗型",
        assassin: "刺杀型",
        support: "辅助型",
        specialist: "专业型"
      },
      game_type: {
        warcraft: "魔兽",
        starcraft: "星际称霸",
        diablo: "暗黑破坏神",
        retro: "复古",
        overwatch: "守望先锋"
      }
    };
  },
  methods: {
    /**
     * 类型选择
     */
    checkHeroes(index) {
      this.classObj_hero[index] = !this.classObj_hero[index];
      if (this.classObj_hero[index]) {
        var url = "http://127.0.0.1:3000/heroes?role=" + index;
        this.axios.get(url).then(res => {
          this.heroesInfo[index] = res.data;
          this.getData();
        });
      } else {
        this.heroesInfo[index] = [];
      }
      this.getData();
    },
    /**
     * 游戏选择
     */
    checkGame(index) {
      this.classObj_game[index] = !this.classObj_game[index];
      if (this.classObj_game[index]) {
        var url = "http://127.0.0.1:3000/heroes?role=" + index;
        this.axios.get(url).then(res => {
          this.heroesInfo[index] = res.data;
        });
      } else {
        this.heroesInfo[index] = [];
      }
      this.herObj = [];
      for (var key in this.heroesInfo) {
        this.herObj = this.herObj.concat(this.heroesInfo[key]);
      }
    },
    getAll() {
      var url = "http://127.0.0.1:3000/heroes/allheroes";
      this.axios.get(url).then(res => {
        this.herObj = res.data;
      });
    },
    getData() {
      this.herObj = [];
      for (var key in this.heroesInfo) {
        this.herObj = this.herObj.concat(this.heroesInfo[key]);
      }
      if (
        !this.classObj_hero.warrior &&
        !this.classObj_hero.assassin &&
        !this.classObj_hero.support &&
        !this.classObj_hero.specialist
      ) {
        this.getAll();
      }
    }
  },
  created() {
    //初始化加载全部英雄
    this.getAll();
  },
  //搜索英雄
  watch: {
    seaVal() {
      if (this.seaVal != "" && this.seaVal != undefined) {
        var url = "http://127.0.0.1:3000/heroes/seaVal?search=" + this.seaVal;
        this.axios.get(url).then(res => {
          this.herObj=res.data;
        });
      }else{
        this.getAll();
      }
    }
  }
};
</script>
<style scoped>
body,
html {
  padding: 0;
  margin: 0;
}
.my_header_search {
  padding: 20px;
  width: 100%;
}
.fielter {
  width: 100%;
  height: 50px;
  display: flex;
  position: relative;
  z-index: 100;
}
.heroes {
  background-image: url("../../../public/heroes_lhh/bg.jpg");
  height: 100%;
  width: 100%;
  background-attachment: fixed;
}
.game_icon {
  width: 300px;
  height: 36px;
  margin-left: 0;
}
.search {
  width: 75%;
  margin: 0 auto;
}
.el-breadcrumb__inner .my_span1 {
  color: #f44cf3 !important;
  border-bottom: 1px dotted #f44cf3;
}
.el-breadcrumb__inner .my_span2 {
  color: #fff !important;
}
.type {
  width: 250px;
  height: 36px;
  display: inline-block;
}
.my_type {
  overflow: hidden;
}
.my_type > a {
  width: 36px;
  height: 36px;
  margin-left: 2px;
  background-image: url("../../../public/heroes_lhh/icon.png");
  background-repeat: no-repeat;
  float: left;
}
.warrior {
  background-position: 0 -94px !important;
}
.assassin {
  background-position: -36px -94px !important;
}
.support {
  background-position: -72px -94px !important;
}
.specialist {
  background-position: -108px -94px !important;
}
.type > a:nth-child(3) {
  background-position: -36px 0;
}
.type > a:nth-child(4) {
  background-position: -72px 0;
}
.type > a:nth-child(5) {
  background-position: -108px 0;
}
.warcraft {
  background-position: -155px -94px !important;
}
.starcraft {
  background-position: -226px -94px !important;
}
.diablo {
  background-position: -190px -94px !important;
}
.retro {
  background-position: -263px -94px !important;
}
.overwatch {
  background-position: -302px -96px !important;
}
.game_icon > a:nth-child(2) {
  background-position: -155px 0;
}
.game_icon > a:nth-child(3) {
  background-position: -226px 0;
}
.game_icon > a:nth-child(4) {
  background-position: -190px 0;
}
.game_icon > a:nth-child(5) {
  background-position: -263px 0;
}
.game_icon > a:nth-child(6) {
  background-position: -299px 0;
}
.search_h3 {
  color: #fff;
  line-height: 36px;
  height: 36px;
  width: 60px;
  margin: 0;
  font-size: 16px;
  font-weight: normal;
  float: left;
}
.my_last_h3 {
  margin-left: 10px;
}
/* input部分 */
.my_input {
  width: 333px;
  height: 22px;
  padding: 10px 40px 10px 10px;
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid #271b41;
  color: #fff;
  font-size: 14px;
}
.div_input {
  position: absolute;
  height: 42px;
  width: 385px;
  right: 0;
  top: 0;
}
.search_icon {
  background-image: url("../../../public/heroes_lhh/search.png");
  background-repeat: no-repeat;
  display: inline-block;
  width: 25px;
  height: 25px;
  position: absolute;
  top: 9px;
  right: 8px;
}
/* 清除浮动 */
.search::after {
  content: "";
  display: block;
  clear: both;
}
.heroes_list {
  margin-top: 20px;
}
/* 英雄列表 */
.hero_list_box {
  width: 190px;
  height: 286px;
  padding: 5px;
  background: linear-gradient(#14324e, #43286b) repeat rgba(0, 0, 0, 0);
  margin-top: 60px;
}
.hero_list_box img {
  width: 100%;
  height: 100%;
}
.heroes_list_item h4 {
  color: #fff !important;
  margin-bottom: 10px;
}
.heroes_list_item {
  padding: 30px 0 0 0;
  position: relative;
}
.heroes_list_item .heroes_name {
  font-size: 18px;
  font-weight: 700;
  line-height: 30px;
  padding-left: 2px;
  padding-top: 10px;
  color: #fff;
}
.hero_heading .hero_icon {
  display: inline-block;
  width: 30px;
  height: 30px;
  vertical-align: middle;
  background-image: url(/img/icon.b7283fad.png);
  background-position: -40px -140px;
}
/* 小图标背景位置 */
.warrior {
  background-position: 0px -94px !important;
}
.assassin {
  background-position: -36px -94px !important;
}
.support {
  background-position: -72px -94px !important;
}
.specialist {
  background-position: -108px -94px !important;
}
.heroes_list_item a {
  text-decoration: none;
}
.heroes_list {
  width: 79%;
  /* height: 1000px; */
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.hover_border {
  width: 340px;
  height: 490px;
  top: -95px;
  left: -61px;
  z-index: 0;
  position: absolute;
  background-image: url("../../../public/heroes_lhh/hover-border.png");
  background-size: 94% 95%;
  top: 0;
  opacity: 0;
  transition: all 0.5s linear;
}
.hover_border:hover {
  opacity: 1;
}
.hero_heading i {
  color: #8eb1bc;
  font-size: 14px;
  font-style: normal;
  margin-left: 5px;
}
</style>
