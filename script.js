// function count(expression) {
//   function getValues(expression){
//      let values = [...expression]
//      return values;
//   }
//   let values = getValues(expression);
//   switch (values[1]) {
//       case '+':
//        return  showResult(sum(values));
//       case '-':
//        return  showResult(subtract(values));
//       case '*':
//        return  showResult(multiply(values));
//       case '/':
//        return showResult(divide(values))
//    }
//    function showResult(value){
//        return value
//    }
// }

// function sum(values) {
//     return +values[0] + +values[2];
// }
// function subtract(values) {
//     return +values[0] - +values[2];
// }
// function multiply(values) {
//     return +values[0] * +values[2];
// }
// function divide(values) {
//     try {
//         if (values[2] === '0') {
//             throw new Error("Can't divide by 0")
//         } else {
//             return +values[0] / +values[2];
//         }
//     } catch (e) {
//         console.log(e.name + ': ' + e.message);
//         return +values[2];
//     }
// };





function count(expression) {
    function getValues(expression) {
        let values = [...expression]
        return values;
    }
    let values;
    // try {
        let data = getValues(expression);
        data = values;
    // } catch(e) {
    //     console.log(e.name + ': ' + e.message);
        values = [];
    // }
    try {
        if (values[1] === undefined) {
            throw new TypeError('expression is not iterable');
        } else {
            switch (values[1]) {
                case '+':
                    return showResult(sum(values));
                case '-':
                    return showResult(subtract(values));
                case '*':
                    return showResult(multiply(values));
                case '/':
                    return showResult(divide(values))
            }
        }
    } catch (e) {
        console.log(e.name + ': ' + e.message);
    }
    
    function showResult(value) {
        return value
    }
}

function sum(values) {
    return +values[0] + +values[2];
}
function subtract(values) {
    return +values[0] - +values[2];
}
function multiply(values) {
    return +values[0] * +values[2];
}
function divide(values) {
    return +values[0] / +values[2];
};





function MakeUsers(name, age){
    this.name = name;
    this.age = age;
}
let user = new MakeUsers('Mike');//Forgot to pass the second parameter
function showMovie (user){
    try {
        if (user.age == undefined) {
            throw new SyntaxError('Age not determined');
        }
        
    } catch (e) {
        alert(e.name + ': ' + e.message);
        user.age = prompt('Enter your age', 0);
        if (user.age >= 18) {//undefined
            console.log('You can watch this movie');
        } else {
            console.log('Sorry, you are too young');
        }
    }
};
showMovie(user);
