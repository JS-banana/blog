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
      本网站由
      <a href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral">
        <img src="/img/upyun.png" alt="" />
      </a>
      提供CDN加速/云存储服务
    </div>
  </div>
</template>

<script>
export default {
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
            width: 2.9rem;
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
