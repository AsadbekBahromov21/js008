// {
//     // 1 masala
//     function foo(array){
//         let musbat = 0, manfiy = 0
//         for(let i = 0; i < array.length; i++){
//             if(array[i] > 0){
//                 musbat += array[i]
//             }else{

//                 manfiy += array[i]
//             }
//         }
//         return `${musbat} ${manfiy}`
//     }
//         console.log(foo([8, 6, 6, 5, -4, -3 ]));
//   }    
  
//   {
//     // 1 masla while
//     function foo(array){
//         let musbat = 0, manfiy = 0;
//         let i = 0;
//         while(i < array.length){
//             if(array[i] > 0){
//                 musbat += array[i]
//             }else{
//                 manfiy += array[i]
//             }
            
//             i++
//         }
//         return `${musbat} ${manfiy}`
//     }
//     console.log(foo([8, 6, 6, 5, -4, -3 ]));
//   }
     
// {
//     // 1 masla do while
//     function foo(array){
//         let musbat = 0, manfiy = 0
//         let i = 0
//         do{
//             if(array[i] > 0){
//              musbat += array[i]
//             }else{
//             manfiy += array[i]
//             }
//             i++
//         }while(i < array.length)
//             return `${musbat} ${manfiy}`
//     }
//     console.log(foo([8, 6, 6, 5, -4, -3 ]));
// }
// {
//     // 2 masala
//     function foo(array){
//         let sum = 0
//         for(let i = 0; i <= array; i += 2){
//             sum = sum + i
//         }
//         return ` juft sonlar yigindisi shunga teng ${sum}`
//     }
//     console.log(foo(24));
// }
// {
//     function foo(array){
//         let sum = 0
//         let i = 0
//         while(i <= array){
//             sum = sum + i
//             i += 2
//         }
//         return ` juft sonlar yigindisi shunga teng ${sum}`
//     }
//     console.log(foo(24));
// }
// {
//     function foo(array){
//         let sum = 0
//         let i = 0
//         do{
//             sum = sum + i
//             i += 2
//         }while(i <= array)
//             return ` juft sonlar yigindisi shunga teng ${sum}`
//     }
//     console.log(foo(23));
// }

// {
//     // 3 masala
//     function foo(a, b) {
//         let sum = 0
//         for (let i = a; i <= b; i++) {
//             sum = sum + i
//         }
//         return sum
//     }
//     console.log(foo(12, 15));
// }
// {
//     // 3 masal while korinishi
//     function foo(a, b) {
//             let i = a
//             let sum = 0
//         while (i <= b){
//           sum = sum + i
//           i++
          
//         }
//         return sum
       
//     }
//     console.log(foo(12, 15));
// }
// {
//     // 3 masala do while korinishi
//     function foo(a, b){
//         let sum = 0
//         let i = a
//         do{
//             sum = sum + i
//             i++
//         }while(i <= b)
//             return sum
//     }
//     console.log(foo(12, 15));
// }

// {
//     // 4 masal
//     function foo(n){
//         for(let i = n; i >= 0; i -= 2){
//             console.log(i);
//         }
//     }
//     console.log(foo(35));
// }
// {
//     // 4 masalani while korinishi
//    function foo(n){
//     let i = n
//     while(i >= 0){
//         console.log(i);
//         i -= 2
//     }
//    }
//    console.log(foo(23));
// }
// {
//     // 4 masala do while korinishi
//     function foo(n){
//         let i = n
//         do{
//             console.log(i);
//             i -= 2
//         }while(i >= 0)
//             return "raxmat"
//     }
//     console.log(foo(23));
// }
  
// while oyit 10 ta masala
// {
//     // 1 masala
//     function foo( a, b){
//         let i = 0
//         while(a > b){
//             a -= b
//             i++
//         }
//         return `a kesmaga b dan ${a} ta joy ortadi`
//     }
//     console.log(foo(15, 4));
// } 
      
// {
//     // 2 masala
//     function foo( a, b){
//         let i = 0
//         while(a < b){
//             a -= b
//             i++
//         }
//         return `a kesmaga b dan ${i} ta kesma sigadi`
//             }
//             console.log(foo(15, 4));
// }
             
   
// {
//     // 3 masala
//     function foo( a, b){
//         let i = 0
//         while(a <= b){
//             a -= b
//             i++
//         }
//         return `shuncha joy ortadi ${i} shuncha sigadi ${b}`
//             }
//             console.log(foo(20, 4));
// } 
{
    //  4masala
    function foo(n) {
        if (n <= 0) {
            console.log("n 0 dan katta bo'lishi kerak");
            return;
        }
    
        let i = 1;
    
        while (i < n) {
            i *= 3;
        }
    
        if (i === n) {
            return "3 ning darajasi";
        } else {
            return "3 ning darajasi emas";
        }
    }
    console.log(foo(17));
}
    


                
            



