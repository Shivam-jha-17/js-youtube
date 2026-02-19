<!-- // getElementById -->

document.getElementById('title')
<h1 id=​"title" class=​"heading">​DOM learning on chai aur code​</h1>​

document.getElementById('title').id
'title'

document.getElementById('title').class
undefined

document.getElementById('title').className
'heading'

document.getElementById('title').getAttribute
ƒ getAttribute() { [native code] }

document.getElementById('title').getAttribute('id')
'title'

document.getElementById('title').getAttribute('class')
'heading'

document.getElementById('title').setAttribute('class', 'test')
undefined

const title = document.getElementById('title')
undefined

title
<h1 id=​"title" class=​"test">​DOM learning on chai aur code​</h1>​

title.style.backgroundColor = 'green'
'green'

title.style.padding = "15px"
'15px'

title.style.borderRight = "15px"
'15px'

title.style.borderRadius = "15px"
'15px'

<!-- // video no. 32 11:33 in this timestamp we see ki content kaise add kiya jata hai. -->


ye difference aaya jab humne ek span tag add kiya

title.innerHTML
'DOM learning on chai aur code <span> test text</span>'

title.innerText
'DOM learning on chai aur code test text'

title.textContent
'DOM learning on chai aur code  test text'

this is happend if we added a display property in span 

title.innerHTML
'DOM learning on chai aur code <span style="display: none;"> test text</span>'

// innerhtml humne andar likhe hue HTML ko bhi dikhata hai.

title.innerText
'DOM learning on chai aur code'
// innerText hume bas samne browser pe dikh raha content hi bas show karta hai.

title.textContent
'DOM learning on chai aur code  test text' // means text content hume chupa hua content bhi dikhata hai.

// 16:00 

<!-- // getElementsByClassName -->

document.getElementsByClassName('heading')
HTMLCollection [h1#title.heading, title: h1#title.heading]
0
: 
h1#title.heading
title
: 
h1#title.heading
length
: 
1
[[Prototype]]
: 
HTMLCollection

// iske baare hum aram se charcha karenge ki htmlcollection kya hota hai nodelist kya hota hai.

but usse pehel hum 

<!-- // querySlector -->
<!-- queryselector ke baar mein padhenge. -->

<div>
        <h1 id = "title" class = "heading">DOM learning on chai aur code 
        <h2>Lorem ipsum dolor sit.</h2>
        <h2>Lorem ipsum dolor sit.</h2>
        <h2>Lorem ipsum dolor sit.</h2>

document.querySelector('h2') // ye humari first h2 heading ko list karega.

<h2>​Lorem ipsum dolor sit.​</h2>
​
document.querySelector('#title')
<h1 id=​"title" class=​"heading">​DOM learning on chai aur code ​</h1>​

document.querySelector('.heading')
<h1 id=​"title" class=​"heading">​DOM learning on chai aur code ​</h1>​

<input type="password" name="" id="">

document.querySelector('input[type = "password"]')

<input type=​"password" name id fdprocessedid=​"0h3pk6g">​

<!-- list manipulation -->

 <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
    </ul>



document.querySelector('ul')
<ul>​…​</ul>
​
const myul = document.querySelector('ul')
undefined

myul.querySelector('li')
<li>​…​</li>​::marker​"one"</li>​

const turngreen = myul.querySelector('li')
undefined

turngreen.style.backgroundColor = "green"
'green'

turngreen.style.padding = "10px"
'10px'

turngreen.style.borderRadius = "15px"
'15px'

turngreen.innerText = "seven"
'seven'

<!-- // ab tak humne dekha ki queryselector sirf ek hi value ko select karta hai. -->

<!-- // now QuerySelectorAll -->

nodelist and htmlCollection are not pure array.
because you not get all property like arrays(map, filter, push, pop etc.)


document.querySelectorAll
ƒ querySelectorAll() { [native code] }

document.querySelectorAll('li')
NodeList(3) [li, li, li]0: li1: li2: lilength: 3[[Prototype]]: NodeList

const temLiList = document.querySelectorAll('li')
undefined


temLiList
NodeList(3) [li, li, li]

temLiList[0].style.color = "red"
'red'

// now we see how querySelectorAll work on heading

const myH = document.querySelectorAll('h1')
undefined

myH
NodeList [h1#title.heading]

myH[0].style.color = 'green'
'green'

<!-- // isme humne dekha ki chahe aapke pass ek hi element kyu na hoo but queryselectorall aapko nodelist mein hi value dega and usko key se access hi kar sakte hai [0] -->


<!-- //foreach -->

temLiList
NodeList(3) [li, li, li]

temLiList.forEach(function (l) {
    l.style.backgroundColor = 'green'
})

nodelist ko access karne ke kiye for each use karna 
lekin agar aapko map use karna hai toh nodelist ko basic array mein convert karna hoga.

<!-- // getElementByClassName -->

// Example
         <ul>
        <li class = "list-item">one</li>
        <li class = "list-item">two</li>
        <li class = "list-item">three</li>
        <li class = "list-item">four</li>
    </ul>

getElementByClassName ka return type HTMLCollection hota hai.

document.getElementsByClassName('list-item')

HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]0: li.list-item1: li.list-item2: li.list-item3: li.list-itemlength: 4[[Prototype]]: HTMLCollectionitem: ƒ item()length: (...)namedItem: ƒ namedItem()constructor: ƒ HTMLCollection()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "HTMLCollection"get length: ƒ length()[[Prototype]]: Object

const tempClassList = document.getElementsByClassName('list-item')
// 31:58

tempClassList.foreach(function (li) {
    console.log(li)    
})
VM271:1 Uncaught TypeError: tempClassList.foreach is not a function
    at <anonymous>:1:15

<!-- hum iss trah ka error show hoga iska -->

iska matlab hai agar hume foreach access karna hai toh htmlcolletion ko converrt karna padega.

ek simple sa method hota convert karne ka 

<!-- using Array.from(variable_name) -->

tempClassList
HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]

Array.from(tempClassList)
(4) [li.list-item, li.list-item, li.list-item, li.list-item]

const myConvertedArray = Array.from(tempClassList)
undefined

myConvertedArray
(4) [li.list-item, li.list-item, li.list-item, li.list-item]

myConvertedArray.forEach(function (li) {
    li.style.color = 'orange'
})
undefined

<!-- go to javascript wikipedia page and start manipulating :) -->


length: 0[[Prototype]]: NodeList

document.querySelectorAll('.mw-headline')

NodeList []length: 0[[Prototype]]: NodeList

document.querySelectorAll('.mw-content-container')

NodeList [div.mw-content-container]0: div.mw-content-containerlength: 1[[Prototype]]: NodeList

const myh2 = document.querySelectorAll('.mw-content-container')
undefined

myh2[0].innerText

myh2.forEach(function (h) {
h.style.color = 'red'    
})
undefined

myh2.forEach(function (h) {
h.style.color = 'black'
h.style.backgroundcolor = 'green'
h.style.padding = '20px'
})
undefined

myh2.forEach(function (h) {
h.style.color = 'black'
h.style.backgroundColor = 'green'
h.style.padding = '20px'
})
undefined

myh2.forEach(function (h) {
h.style.color = 'black'
h.style.backgroundColor = 'green'
h.style.padding = '20px'
h.innerText = "shivam"
})
undefined

video no. 32 ends here
