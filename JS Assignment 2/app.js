// part 1 
// function fixNumber(num) {
//     return function(value) {
//     return num + value;
//     }
//     }
//    const addFive = fixNumber(5);
//    document.write(addFive(40)); 
   
// part 2 
// let arr = [1,2,3,4,5,6,7,8,9]
// let filteredArr = arr.filter (function(val) {
//     if (val % 2 === 0) {
//         return true;
//     }else {
//          return false;
//     }
// });
// document.write(filteredArr)
   
// part 3 
// let myPara = document.getElementById("my-para");
// myPara.innerText = "hey"

// part 4 
// let listItem = document.getElementById("list-item");
// listItem.innerText = "potato"

// part 5 
// const myPara = document.getElementById("your-para");
// myPara.innerHTML = "<b>Pakistan Zindabad</b>";
// setInterval(function () {
//   let color1 = Math.floor(Math.random()*16777215).toString(16);
//   let color2 = Math.floor(Math.random()*16777215).toString(16);
//   myPara.style.backgroundColor = "#" + color1;
//   myPara.style.color = "#" + color2;
// }, 500);

// part 6 
// function saveToLocalStorage(key, object) {
//     localStorage.setItem(key, JSON.stringify(object));
//   }   
//   const theObject = {
//     name: 'ken',
//     age: 25,
//     city: 'paris'
//   };
//   saveToLocalStorage('theKey', theObject);

// part 7
// function retrieveFromLocalStorage(key) {
//     return JSON.parse(localStorage.getItem(key));
//     }
//     const theObject = {name: "ken", age: 25};
//     localStorage.setItem("theKey", JSON.stringify(theObject));
    
//     const retrievedObj = retrieveFromLocalStorage("myKey");
//     console.log(retrievedObj); 

    // part 8
    // function saveObjectToLocalStorage(obj) {
    //     // Loop through each property in the object
    //     for(var prop in obj) {
    //     // Use the property name as the key and the property value as the value
    //     localStorage.setItem(prop, obj[prop]);
    //     }
    //     // Retrieve the object from local storage and return it as a new object
    //     var newObj = {};
    //     for(var i = 0; i < localStorage.length; i++) {
    //     var key = localStorage.key(i);
    //     var value = localStorage.getItem(key);
    //     newObj[key] = value;
    //     }
    //     return newObj;
    //     }