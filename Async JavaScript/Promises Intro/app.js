// Callback Requests
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}

// Request
// fakeRequestCallback('books.com/page1', 
//     function(response) {
//         console.log("IT WORKED!!!");
//         console.log(response)
//         fakeRequestCallback('books.com/page2',
//         function(response) {
//             console.log("IT WORKED AGAIN!!!");
//             console.log(response)
//             fakeRequestCallback('books.com/page3',
//                 function(response){
//                     console.log("IT WORKED THREE TIMES!!!");
//                     console.log(response)
//                 },
//                 function(err){
//                     console.log("ERROR(3rd req)!!!", err)
//                 })
//         },
//         function(err){
//             console.log("ERROR(2nd req)!!!", err)
//         })
//     }, function (err) {
//         console.log("ERROR!!!", err);
//     })

// Promises Requests
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// const request = fakeRequestPromise('yelp.com/api/coffee/page1'); // It's not necessary to put in a variable
// request
//     .then(() => {
//         console.log("IT WORKED!!!! (page 1)")
//         fakeRequestPromise('yelp.com/api/coffee /page2')
//             .then(() => {
//                 console.log("IT WORKED!! (page 2)")
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log("IT WORKED!! (page 3)")
//                     })
//                     .catch(() => {
//                         console.log("OH NO, ERROR! (page 2)")
//                     })
//             })
//             .catch(() => {
//                 console.log("OH NO, ERROR! (page 2)")
//             })
//     })
//     .catch(() => {
//         console.log("OH NO, ERROR! (page 1)")
//     })

fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log("IT WORKED! (page 1)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/cofee/page2')
    })
    .then((data) => {
        console.log("IT WORKED! (page 2)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then((data) => {
        console.log("IT WORKED! (page 3)")
        console.log(data)
    })
    .catch((err) => {
        console.log("OH NO, A REQUEST FAILED!")
        console.log(err)
    })