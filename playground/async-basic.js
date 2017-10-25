console.log('staring app ');

 
setTimeout(()=>{
    console.log('Inside of calback')
}, 2000);

setTimeout(()=>{
    console.log('2nd call')
}, 0);

console.log('finishing app');