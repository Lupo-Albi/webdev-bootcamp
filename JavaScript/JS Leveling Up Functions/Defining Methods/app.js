// // const myMath = {
// //     PI          :   3.14159,
//     multiply    :   function(x, y) {
//         return x * y;
//     },
//     divide      :   function(x, y) {
//         return x / y;
//     },
//     square      :   function(x) {
//         return x * x;
//     },
//     cube        :   function(x) {
//         return x ** 3;
//     }
// };

// Shorthand way of adding methods

const myMath = {
    PI                  : 3.14159,
    multiply(x, y) {
        return x * y;
    },
    divide(x, y) {
        return x / y;
    },
    square(x) {
        return x * x;
    },
    cube(x) {
        return x ** 3;
    }
}

const square = {
    area(side) {
      return side * side;  
    },
    perimeter(side) {
        return side * 4;
    }
};