**Window Object**

-->The window object represents an open window in a browser. It is browser's object (not JavaScript's) & is automatically created by browser.
It is a global object with lots of properties & methods.

**What is DOM ?**

-->When a web page is loaded, the browser creates a Document Object Model (DOM) of the page

```
window
└── document
    └── html
        ├── head
        │   ├── meta
        │   ├── meta
        │   ├── title
        │   └── link
        └── body
            ├── div
            │   ├── img
            │   ├── h1
            │   ├── p
            │   └── div
            └── script
            ```


**DOM Manipulation in JavaScript**
Here's a complete guide covering all the topics from your notes:

1. Select Element from HTML

document.getElementById("myId")

// By Class
document.getElementsByClassName("myClass")

// By Tag
document.getElementsByTagName("p")

// Modern way (recommended)
document.querySelector("#myId")        // first match
document.querySelectorAll(".myClass")  // all matches
```
2. Change Text
```javascriptconst el = document.querySelector("h1")

el.textContent = "New Text"   // plain text only
el.innerText = "New Text"     // visible text only
```
3. Change HTML
```
javascriptconst box = document.querySelector("#box")

box.innerHTML = "<strong>Bold Text</strong>"  // renders HTML tags

```

4. Change CSS
```
javascriptconst btn = document.querySelector("button")

btn.style.color = "red"
btn.style.backgroundColor = "blue"
btn.style.fontSize = "20px"

// Better way — toggle a class
btn.classList.add("active")
btn.classList.remove("active")
btn.classList.toggle("active")
```
5. Attributes
```
javascriptconst img = document.querySelector("img")DOM Manipulation in JavaScript
Here's a complete guide covering all the topics from your notes:
```