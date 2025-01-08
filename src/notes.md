

// react props :
//ans: props use hoi data pathanor jonno , component to components(immutable) | example >>> : <MyComponent name="John" age={25} /> 

//function parameter :
//ans: function er vitore data pathanor jonno use kora hoi, function bananor somoy toiri kora hoi (mutable)
example >>>: 
function greet(name, age) {
    console.log(name);
}

<!-- //React-এ props drilling হল এমন একটি প্রক্রিয়া যেখানে একটি কম্পোনেন্ট থেকে অন্য একটি কম্পোনেন্টে ডেটা (props) পাঠানোর জন্য মধ্যবর্তী এক বা একাধিক কম্পোনেন্টের মধ্য দিয়ে যেতে হয়। সহজ ভাষায় বলতে গেলে, যদি একটি ডেটা প্যারেন্ট কম্পোনেন্ট থেকে অনেক স্তরের ডাউনলাইন চাইল্ড কম্পোনেন্টে পাঠাতে হয়, তখন প্রতিটি স্তরের মধ্যবর্তী কম্পোনেন্টে সেই ডেটা পাস করতে হয়। -->

example: 
import React from 'react';

// Parent Component
function Parent() {
  const data = "Hello from Parent!";
  return <Child data={data} />;
}

// Child Component
function Child({ data }) {
  return <GrandChild data={data} />;
}

// GrandChild Component
function GrandChild({ data }) {
  return <h1>{data}</h1>;
}
export default Parent;


<!-- /////////////////////javaScript Scope////////////////////////// -->

<!-- JavaScript-এ scope হলো কোডের সেই অংশ যেখানে ভেরিয়েবল, ফাংশন, এবং অবজেক্ট অ্যাক্সেস করা যায়। সহজভাবে বললে, scope বলে দেয় ভেরিয়েবলের "অ্যাক্সেসিবিলিটি" কোডের কোন অংশে রয়েছে।

JavaScript-এর Scope প্রকারভেদ
JavaScript-এ প্রধানত দুটি প্রকারের scope রয়েছে:
Global Scope (গ্লোবাল স্কোপ)
Function Scope (ফাংশন স্কোপ)
Block Scope (ব্লক স্কোপ - ES6 থেকে যোগ হয়েছে) -->


 <!-- Global Scope (গ্লোবাল স্কোপ)
যে ভেরিয়েবল বা ফাংশন গ্লোবাল স্কোপে ডিক্লেয়ার করা হয়, সেগুলি পুরো কোডের যেকোনো জায়গা থেকে অ্যাক্সেস করা যায়। এটি পুরো প্রোগ্রামের জন্য "সর্বজনীন"। -->

example: 

let globalVar = "I am global"; 

function showGlobalVar() {
  console.log(globalVar); 
}

showGlobalVar(); 


 <!-- Function Scope (ফাংশন স্কোপ)
ফাংশনের ভিতরে ডিক্লেয়ার করা ভেরিয়েবল শুধুমাত্র সেই ফাংশনের ভিতর থেকে অ্যাক্সেস করা যায়। ফাংশনের বাইরে সেগুলো অ্যাক্সেস করা সম্ভব নয়। -->

function myFunction() {
  let localVar = "I am local"; 
  console.log(localVar); 
}
myFunction();

console.log(localVar); 


<!-- Block Scope (ব্লক স্কোপ)
Block scope হলো {} এর ভিতরে থাকা কোডের স্কোপ। let এবং const ES6 থেকে ব্লক স্কোপ সাপোর্ট করে। এর মানে, ব্লকের বাইরে থেকে ব্লকের ভিতরে থাকা ভেরিয়েবল অ্যাক্সেস করা সম্ভব নয়। -->

{
  let blockVar = "I am block scoped";
  console.log(blockVar);
}

console.log(blockVar); 






