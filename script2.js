// let hamburger;
// const fries = NaN;
// const cols = 0;
// const nuggets = 2;

// if (hamburger && cols || fries ===3 && nuggets) {
//     console.log("Done")
// } 



// for (let i = 0; i < 3; i++) {
//     console.log(i)
//     for (let i = 0; i < 3; i++) {
//         console.log(i)    
//     }
// }



// let result = '';
// const lenght = 7;

// for (let i = 1; i < lenght; i++) {

//     for (let j = 1; j < i; j++) {
//         result += '*';
//     }



//     result += '\n';
// }

// console.log(result);

// for (let i = 20; i > 9; i--) {
//     console.log(i);
//     if (i === 13) break
// }

// for (let i = 2; i < 11; i++) {
//     if (i %2=== 0) {
//         console.log(i)
//     }
// }

// for (let i = 2; i <= 16; i++) 
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }

// let num = 2;

// while(num <= 15) {
//     num++;
//     if (num %2===0) continue;

//     else 
//         console.log(num)
// }

// const arr = [];

// for (i = 5; i < 11; i++) {
//     arr[i - 5] = i;
    
// }
// console.log(arr);

// const arrayOfNumbers = [];

//     for (let i = 5; i < 11; i++) {
//         arrayOfNumbers[i - 5] = i;
//     }

//     console.log(arrayOfNumbers);

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
 
// for(i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
// }
// console.log(result);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
//     for (i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === 'number' ) {
//             data[i] = data[i] * 2;
//         }
//          else if (typeof(data[i]) === 'string') {
//                 data[i] = `${data[i]} - done`; 
//             }   
//     }
//     console.log(data)

    // const data = [5, 10, 'Shopping', 20, 'Homework'];
    // const result = [];

    // for (i = 1; i <= data.length; i++) {
    //     result[i - 1] = data[data.length - i]
    // }
    // console.log(result)


    // const lines = 5;
    // let result = '';
    
    // for (let i = 0; i <= lines; i++) {
    //     for (let j = 0; j < lines - i; j++) {
    //         result += " ";
    //     }
    //     for (let j = 0; j < 2 * i + 1; j++) {
    //         result += "*";
    //     }
    //     result += "\n";
    // }
    
    // console.log(result)

    // let num = 50;

    // function showFirstMessage(text) {
    //     console.log(text);
    //      num = 10
    // }

    // showFirstMessage('Hello World');
    // console.log(num);

    // function calc(a,b) {
    //     return(a+b);
    // }
    // console.log(calc(4,3));
    // console.log(calc(5,6));
    // console.log(calc(10,6));

    // function ret() {
    //     let num =50;
    //     return num
    // }
    
    // const anotherNum = ret();
    // console.log(anotherNum);

    // const logger = function() {
    //     console.log('Hello world');
    // };
    //  logger();

    // const calc = (a, b) => { 
    //     console.log('1')
    //     return a + b
    // };

    const usdCurr = 28;
    const eurCurr = 32;

    function convert(amount, curr) {
        console.log(curr * amount);
    }

    convert(500, usdCurr);
    convert(500, eurCurr);