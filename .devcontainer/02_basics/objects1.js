
// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",//ye mysym ek string hojata haib agar iske aage ye square bracket na hote to isiliye lagaye hai 
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) ab vaise hum email ya or bhi cheezo kom dot se ahi acces krte hai lekin yaha pe ye by default unhe as a string read krta hai so isiliye square bracket me inverted comma me likhna pdta hai 
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) ab iske baad ye freeze hojayega ab hum or further changes nahi kr skte isme 
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);//ab ye jo dollar symbol or this use hua hai yaha pe ye ek particular naam ko access krne  ke liye kara hai yaha pe 
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
