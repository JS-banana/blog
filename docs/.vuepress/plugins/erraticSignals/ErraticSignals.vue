<template>
  <!-- <div class="erraticSignals-wrap" id="erraticSignals-wrap"> -->
    <canvas id="erraticSignals-canvas"></canvas>
  <!-- </div> -->
</template>

<script>
import init from './snap'
export default {
  name: 'ErraticSignals',

  mounted () {
    // const parant=document.getElementsByTagName("body")
    const child=document.getElementById('erraticSignals-canvas')
    // const scrollHeight=document.querySelector('.home-wrapper').scrollHeight

    document.addEventListener("",this.getScrollHeight)
    document.removeEventListener('scroll',this.getScrollHeight)

    // parant.append(child)
    document.body.append(child)
    child.style.width="100%"
    child.style.height='100%'
    child.style.position="fixed"
    child.style.top=0
    child.style.left=0
    child.style.zIndex=-1

    // 获取元素高度等属性
    // this.onElementHeightChange(document.body,  (h)=> {
    //   const scrollHeight=this.getElmHeight(document.body)
    //   console.log('element scrollHeight', h)
    //   console.log('完整高度',scrollHeight )
    //   child.style.height=scrollHeight+'px'
    // })


    init()
    console.log('welcome ErraticSignals ！')
  },

  methods: {
    onElementHeightChange(elm, callback) {
      let lastHeight = elm.scrollHeight
      let newHeight = null

      ;(function run() {
        newHeight = elm.scrollHeight;
        if (lastHeight != newHeight)
          callback(lastHeight)
        lastHeight = newHeight

        if (elm.onElementHeightChangeTimer)
          clearTimeout(elm.onElementHeightChangeTimer)

        elm.onElementHeightChangeTimer = setTimeout(run, 300)
      })()
    },
    getElmHeight(node) {
      const list = [
        'margin-top',
        'margin-bottom',
        'border-top',
        'border-bottom',
        'padding-top',
        'padding-bottom',
        'height'
      ]

      const style = window.getComputedStyle(node)
      return list
        .map(k => parseInt(style.getPropertyValue(k), 10))
        .reduce((prev, cur) => prev + cur)
    }
  }
}
</script>

<style lang='stylus' scoped>
// .erraticSignals-wrap{
//   width 100%
//   height 100%
//   position absolute
//   z-index -1
//   transform translateY(-100vh)
// }
</style>
