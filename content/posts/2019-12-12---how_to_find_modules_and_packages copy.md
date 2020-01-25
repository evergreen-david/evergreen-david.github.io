---
title: java script closure, scope
date: "2019-12-12T17:34:17"
template: "post"
draft: false
slug: "/posts/javascript-closure"
category: "terminal"
description: "difference between var and let"
tags:
  - "javascript"
---

# 1. It is a popular and typical closure question
let's look at this code
다음의 실행결과를 예측해보자..

```javascript
const arr = [10, 12, 15, 21];

for(let i = 0; i < arr.length; i++)
{
    setTimeout(function(){
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 3000);
}

```

arr.length는 4 이므로  setTimeout 함수는 4번 호출된다.
3초후 comsole.log를 찍게 되는데 i 는 0,1,2,3 순서대로 나오고 element 도 10, 12,15 ,21 로 출력될 것 같지만 그렇지 않다. 그렇기 않기때문에 이렇게 쓰고 있갰지
예상과 달리 다음과 같이 출력되는데 그이유는 setTimeout 안에 선언된 함수는 closure 이므로 변수 i, arr.length 에 접근 가능해서 3초전에 for 문은 전부 돌고 i는 이미 4가 되고 arr[4] 는 undefined 이므로 다음과 같이 출력 되는 것이다.
해결방법은 두가지가 있는데 ES6에서는 let 으로 선언하면 setTimeout 호출이 끝나기전에 i 값과 arr[i] 값을 유지하게 한다.


# 2. Solutions

Solutuion 1)

let 과 var 의 차이점
다음 예제를 보면 쉽게 차이를 알 수 있다. 
var : scope가 함수단위
let : scope가 블락 단위
# 2. let / var 차이점

```javascript
function varTest()
{
    var a = 1;

    if(1){
        var a = 2;
        console.log(a);
    }

    console.log(a);
}

varTest();


function letTest()
{
    let a = 1;
    if(1){
        let a = 2;
        console.log(a);
    }

    console.log(a);
}
letTest();
```


solution 2)

var 의 scope은 함수단위 이므로 혹시 ES6 문법을 사용하지 않고 있다면 다음과 같이 해결 가능하다. 

setTimeout 함수를 outer 함수로 한번더 감싸주고 파라미터를 전달해주면 이 함수 안에서는 i 값이 유지가 되므로 정상적으로 출력된다.

```javascript
const arr = [10, 12, 15, 21];

for(let i = 0; i < arr.length; i++)
{
    ( function (arr, i) {
        setTimeout(function(){
            console.log('Index: ' + i + ', element: ' + arr[i]);
        }, 3000);
      }
    ) (arr,i)
}


```




결론 : 이런류의 코드는 나중에 디버깅이 어렵고 Scope가 블록 단위인 let을 쓰고 코딩할때 유념해서 사용하도록 하자.

> https://medium.com/javascript-in-plain-english/a-common-javascript-interview-question-asked-by-google-amazon-f18a260dabde
