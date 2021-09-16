<template>
  <div class="footer">
    <div class="icons" v-if="social && social.icons">
      <a
        :href="item.link"
        :title="item.title"
        :class="['iconfont', item.iconClass]"
        v-for="(item, index) in social.icons"
        :key="index"
        target="_blank"
      ></a>
    </div>

    <!--Vdoing主题遵循MIT协议，完全开源且免费。如果您对主题的修改并不大，希望您保留主题的链接。-->
    <!-- Theme by <a href="https://github.com/xugaoyi/vuepress-theme-vdoing" target="_blank" title="本站主题">Vdoing</a> -->
    <span>{{ footer.copyright }}</span>
    <template v-if="footer">
      | © {{ footer.createYear }}-{{ currentDate }}
      <span v-html="footer.copyrightInfo"></span>
    </template>
    <div class="cloud">
      <span id="timeDate">{{timeDate}}</span>
      <span id="times">{{times}}</span>
      &nbsp;|&nbsp;
      <span id="busuanzi_container_site_pv">
        总访问量 <span id="busuanzi_value_site_pv"></span> 次
      </span>
    </div>
    <div class="cloud">
      <a href="https://cloud.tencent.com/" target="_blank">
        <img src="https://cloudcache.tencent-cloud.com/qcloud/portal/kit/images/slice/logo.f0c9ade4.svg" alt="" />
      </a>
      提供CDN加速/云存储服务
    </div>
    <!-- 网站运行时间统计 -->
    <!-- 网站访问量统计 -->
    <!-- <div class="cloud">
        <span id="busuanzi_container_site_pv">
            本站总访问量 <span id="busuanzi_value_site_pv"></span> 次
        </span>
    </div> -->
  </div>
</template>

<script>
export default {
    data(){
        return{
            timeDate:'载入天数...',
            times:'载入时分秒...'
        }
    },
    mounted(){
        setInterval(()=>{
            this.createtime()
        }, 250);
    },
    computed: {
        social () {
            return this.$themeConfig.social;
        },
        footer () {
            return this.$themeConfig.footer;
        },
        currentDate(){
            let currentMonth=new Date().getMonth() + 1
            currentMonth=currentMonth<10?`0${currentMonth}`:currentMonth
            return new Date().getFullYear() + '.' + currentMonth
        },
    },
    methods:{
        createtime() {
            let now = new Date();
            let grt = new Date("08/02/2020 12:00:00"); //此处修改你的建站时间或者网站上线时间
            now.setTime(now.getTime() + 250);
            let days = (now - grt) / 1000 / 60 / 60 / 24;
            let dnum = Math.floor(days);
            let hours = (now - grt) / 1000 / 60 / 60 - (24 * dnum);
            let hnum = Math.floor(hours);
            if (String(hnum).length == 1) {
                hnum = "0" + hnum;
            }
            let minutes = (now - grt) / 1000 / 60 - (24 * 60 * dnum) - (60 * hnum);
            let mnum = Math.floor(minutes);
            if (String(mnum).length == 1) {
                mnum = "0" + mnum;
            }
            let seconds = (now - grt) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
            let snum = Math.round(seconds);
            if (String(snum).length == 1) {
                snum = "0" + snum;
            }
            this.timeDate="本站已安全运行 " + dnum + " 天 ";
            this.times = hnum + " 小时 " + mnum + " 分 " + snum + " 秒";
        }
    }
};
</script>

<style lang="stylus">
// $mobileSidebarWidth = $sidebarWidth * 0.82
.footer {
  padding: 5rem 1.5rem 2.5rem;
  text-align: center;
  color: #cccccc;
  box-sizing: border-box;
  font-size: 0.85rem;
  transition: all 0.2s ease;

  .cloud {
    margin-top: 5px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 3.2rem;
      vertical-align: middle;
    }
  }

  .icons {
    margin-bottom: 12px;

    .iconfont {
      padding: 0 10px;
      font-size: 1.3rem;
    }
  }

  a {
    color: inherit;

    &:hover {
      color: $accentColor;
    }
  }
}

@media (min-width: ($MQMobile + 1px)) {
  .sidebar-open .footer {
    width: auto;
    padding-left: ($sidebarWidth + 1.5rem);
  }
}

@media (min-width: 1520px) {
  .have-rightmenu .footer {
    padding-right: ($rightMenuWidth + 1.5rem);
  }
}

.no-sidebar .footer {
  width: auto;
  padding-left: 1.5rem;
}
</style>
