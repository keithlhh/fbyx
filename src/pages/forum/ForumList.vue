<template>
  <div class="forumlist">
    <forum-box></forum-box>
    <div class="ccc">
      <div id="container" class="body neon-bar">
        <div id="pt" class="body-trail">
          <div class="z">
            <span class="font_gray">你所在的位置：</span>
            <a href="javascript:;">《风暴英雄》官方论坛</a>
          </div>
        </div>
        <div class="body-top">
          <div class="body-bot">
            <div id="forumList" class="wp cl">
              <div>
                <div class="fl bm">
                  <div class="bm bmw  flg cl">
                    <div class="bm_h cl">
                      <span class="o"></span>
                      <h2>
                        <a href="javascript:;" style="color: #fff;">综合讨论区</a>
                      </h2>
                    </div>
                    <div id="category_1" class="bm_c">
                      <table class="fl_tb">
                        <tbody>
                          <tr>
                            <td class="fl_g" width="32.9%" v-for="item in list1" :key="item.id" @mouseover="lang(item.id)" @mouseout="mie(item.id)" @click.stop="jupm($event)" :data-id="item.id">
                              <div class="fl_area" :class="{s1:item.id==t}" @click.stop="jupm($event)" :data-id="item.id">
                                <div class="fl_icn_g" style="width:45px;" @click.stop="jupm($event)" :data-id="item.id">
                                  <div @click.stop="jupm($event)" :data-id="item.id">
                                    <img :src="item.img_url" align="left" @click.stop="jupm($event)" :data-id="item.id">
                                  </div>
                                </div>
                                <dl @click.stop="jupm($event)" :data-id="item.id">
                                  <div :class="{cll:item.id==t}" class="col" @click.stop="jupm($event)" :data-id="item.id">
                                    <span style="font-size:14px; font-weight: bold;" @click.stop="jupm($event)" :data-id="item.id">{{item.ename}}</span>
                                  </div>
                                  <dd @click.stop="jupm($event)" :data-id="item.id">{{item.content}}</dd>
                                </dl>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="bm bmw  flg cl">
                    <div class="bm_h cl">
                      <span class="o"></span>
                      <h2>
                        <a href="javascript:;" style="color: #fff;">客户服务区</a>
                      </h2>
                    </div>
                    <div id="category_1" class="bm_c">
                      <table class="fl_tb">
                        <tbody>
                          <tr>
                            <td class="fl_g" width="32.9%" v-for="item in list2" :key="item.id" @mouseover="lang1(item.id)" @mouseout="mie1(item.id)" @click.stop="jupm2($event)" :data-id="item.id">
                              <div class="fl_area" :class="{s1:item.id==m}" @click.stop="jupm2($event)" :data-id="item.id">
                                <div class="fl_icn_g" style="width:45px;" @click.stop="jupm2($event)" :data-id="item.id">
                                  <div @click.stop="jupm2($event)" :data-id="item.id">
                                    <img :src="item.img_url" align="left" @click.stop="jupm2($event)" :data-id="item.id">
                                  </div>
                                </div>
                                <dl @click.stop="jupm2($event)" :data-id="item.id">
                                  <div :class="{cll:item.id==m}" class="col" @click.stop="jupm2($event)" :data-id="item.id">
                                    <span style="font-size:14px; font-weight: bold;" @click.stop="jupm2($event)" :data-id="item.id">{{item.ename}}</span>
                                  </div>
                                  <dd @click.stop="jupm2($event)" :data-id="item.id">{{item.content}}</dd>
                                </dl>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
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
        list1:[],
        list2:[],
        t : 9,
        m : 9,
      }
    },
    created(){
      this.getlist1();
      this.getlist2();
    },
    methods:{
      getlist1(){
        var url = "http://127.0.0.1:3000/getlist1";
        this.axios.get(url).then(reslut=>{
          //console.log(reslut)
          this.list1 = reslut.data;
        })
      },
      getlist2(){
        var url = "http://127.0.0.1:3000/getlist2";
        this.axios.get(url).then(reslut=>{
          //console.log(reslut)
          this.list2 = reslut.data;
        })
      },
      lang(id){
        this.t = id;
      },
      mie(){
        this.t = 9;
      },
      lang1(id){
        this.m = id;
      },
      mie1(){
          this.m = 9;
      },
      jupm(e){
        var id = e.target.dataset.id;
        this.$router.push("/foruminfo/"+id)
      },
      jupm2(e){
        var id = e.target.dataset.id;
        this.$router.push("/foruminfo/"+id)
      }
    },
    components:{
      "forum-box":forum
    }
  }
</script>
<style>
  .forumlist{
    background:#11041e  url(http://127.0.0.1:3000/forum/222.jpg) no-repeat fixed 50% 0;
    font: 12px/1.5 'Microsoft Yahei','SimSun',sans-serif;
    color: #8eb1bc;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  .s1{
    background-position: 0 -107px !important;
  }
  .col{
    color:rgb(72,204,255);
  }
  .cll{
    color:rgb(255,255,255);
  }
  #container {
    width: 1000px;
    margin: 40px 0 0;
  }
  .body {
    background: url(http://127.0.0.1:3000/forum/1_images_forums_layout_content_bg.png) repeat;
    border-bottom: 1px solid #00d8ff;
    border-top: 1px solid #3b1f4e;
    margin-top: 55px;
    padding-top: 15px;
    position: relative;
  }
  .ccc{
    width: 1000px;
    margin: 40px auto 0;
  }
  .ccc:before {
    content: "";
    background: url(http://127.0.0.1:3000/forum/1_images_forums_layout_pink-background.png) no-repeat;
    position: absolute;
    top: -26px;
    width: 1000px;
    height: 650px;
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
  #pt .z a, #pt .z em, #pt .z span {
    float: left;
  }
  .font_gray {
    color: #653576;
  }
  #pt .z a, #pt .z em {
    float: left;
    display: block;
    color: #991797;
  }
  #pt .z a:hover {
    border-bottom: 1px dotted #c920c7;
    color: #c920c7;
  }
  .body-top {
    background: none;
    padding-top: 40px;
  }
  .body-bot {
    min-height: 500px;
    padding-bottom: 100px;
    position: relative;
  }
  .wp {
    margin: 0 auto;
    width: auto;
  }
  .cl {
    zoom: 1;
  }
  .bm {
    border: none;
  }
  .bm, .ntc_l, .pn {
    border-radius: 5px;
  }   
  .bm, .bn {
    margin-bottom: 10px;
  }
  .fl .bm {
    margin-bottom: 10px;
    border: none;
  }
  .bmw {
    width: 1000px;
    margin: 0 auto;
    border: none;
  }
  .fl .bm_h {
    border: none;
    background: none;
    height: 45px;
    line-height: 40px;
  }
  .bm_h .o, .bm_h .c {
    float: right;
    width: 30px;
    height: 30px;
    background-image: url(http://127.0.0.1:3000/forum/1_images_forums_layout_forum-toggler.png);
    background-position: 50% 5px;
    background-repeat: no-repeat;
    cursor: pointer;
    margin: 10px 20px 0 0;
  }
  .fl .bm_h h2 {
    color: #ecffff;
    text-shadow: 0 0 8px #009cff;
    margin-left: 10px;
    padding-bottom: 8px;
    padding-left: 30px;
    font-size: 18px;
    font-weight: bold;
  }
  body, ul, ol, li, dl, dd, p, h1, h2, h3, h4, h5, h6, form, fieldset, .pr, .pc {
    margin: 0;
    padding: 0;
  }
  .cl:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  .fl .bm_c, #online .bm_c, .lk .bm_c {
    padding-top: 0;
    padding-bottom: 0;
  }
  .bm_c {
    padding: 10px;
  }
  .fl_tb {
    width: 960px;
    margin: 0 auto;
  }
  table {
    empty-cells: show;
    border-collapse: collapse;
  }
  .fl_tb td {
    display: block;
    float: left;
    width: 318px;
  }
  .fl_g {
    vertical-align: top;
  }
  .fl_area {
    width: 286px;
    height: 105px;
    margin: 2px auto 15px;
    font-size: 12px;
    cursor: pointer;
    background: #080312 url(http://127.0.0.1:3000/forum/1_images_forums_layout_forum-index-states.jpg) no-repeat;
  }
  .fl_icn_g {
    display: block;
    float: left;
    height: 50px;
    padding: 10px 0 0 10px;
    text-align: center;
    width: 50px;
  }
  .fl_icn_g img {
    border: none;
  }
  .fl_g dl {
    display: block;
    float: left;
    padding: 11px 0 0 10px;
    width: 214px;
  }
  .fl_g dd {
    color: #3d6f95;
  }
</style>