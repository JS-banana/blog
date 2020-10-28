// function wrap(){
//     let arr=[]
//     console.log('start',arr)
//     this.on=function(cb){
//         arr.push(cb)
//     }
//     this.emit=function(cb){
//         console.log('emit')
//     }
// }

// function useState(curstate){
//     let arr=[]

//     return [state,setState]
// }

function wrap() {
  let a = 0;
  console.log('a', a);
  function loop() {
    console.log('a+1', a + 1);
  }
  loop();
}

setInterval(() => {
  wrap();
}, 1000);
