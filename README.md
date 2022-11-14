# ironhack-class-nov07

class repo for Nov -07 for IronHack BootCamp!

Below are all my notes for my Bootcamp

# Week 1: CSS and HTML notions

## HTML introduction and Git notion

[Mark sheet](https://www.markdownguide.org/cheat-sheet/)

### Git notion:

Git clone your file
git add.
git commit -m and your file
git push origin main

Your file is right up to date

**When it is forked**

Git clone the file into your local repository
Git pull origin main

[Furtherinfo](https://www.datacamp.com/tutorial/git-push-pull)

## HTML semantic

HTML DOM tree ==> Every HTML Document can be represented as a tree using the Document Object Model (DOM), which contains all the elements of the HTML document, their format, and the browser state at a specific moment.

<html>
<head>
<body>
<title>
<meta>
<body>

The shortcut to take comments in visual code is cmd + /

**below all the block elements**

<p></p> Paragraph   
<pre></pre> Preformatted text   
<h1></h1>   Heading (title) 
<ol></ol>   Ordered List    
<ul></ul>   Unordered List  
<li></li>   List Item   
<table></table> 2-D Data    Go to codepen
<form></form>   Submit info Go to codepen
<fieldset>  Group form items    Go to codepen

<span> ==> Span is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes. It should only be used when no other semantic element is appropriate. Not recommended.

**Inline below**
<em></em> Emphasizes
<i></i> Italic text
<strong></strong> Bold text
<time></time> Dates and times
<a></a> Anchor Go to Google
<br> Line break To be
<img> Image

<script></script>   Embedded code

<span></span> Generic inline container
<button></button> Clickable button
<input></input> Data input field
<label></label> Caption for item
<select></select> Menu of options
<textarea></textarea> Multi-line input

**Important Semantic Elements**:

<article> ==> Forum post / Products card 
<aside>
<details>
<figcaption>
<figure>
<footer> ==> contact/Localisation and address
<header> ==> Logo/Icon and nav menu
<main>
<mark>
<nav>
<section>
<summary>
<aside> ==> define content in the sidebar

[Furtherinfo](https://www.w3schools.com/html/html5_semantic_elements.asp)

It is very important to use the right semantics to have clean code and an easily readable website. A better structure is easier will be to design the website in CSS.

use the div when is really necessary

## CSS: Cascading Style Sheets

2 main routes to add your CSS;

- in the head with the style balize (not the best option for a big profile)
- in a separate sheet : < link rel = "stylesheet" . href=./style.style.css> ==> that is kind of mandatory for any kind of huge project
- Do the same way for media queries to make your code more readable for anyone

The anatomy of CSS :

Rules or rulesets
Selectors
Declarations
Properties
Values and units

[Allthebalises](https://www.w3.org/Style/CSS/all-properties.en.html)

### Combinators

The final group of selectors combines other selectors to target elements within our documents. The following, for example, selects paragraphs that are direct children of <article> elements using the child combinator (>):

article > p {

}

Understand ‘+’, ‘>’ and ‘~’ symbols in CSS Selector

[here](https://techbrij.com/css-selector-adjacent-child-sibling) [and](https://www.w3schools.com/csSref/css_selectors.php)

.class1.class2 .name1.name2 Selects all elements with both name1 and name2 set within its class attribute

.class1 .class2 .name1 .name2 Selects all elements with name2 that is a descendant of an element with name1

**The convention**
You should name classes using only lowercase letters like class="head-container".

_Multiple classes_

<div class = "head-container background"> ==> 2 classes are assigned to this DIV.

_hover_

button:hover:
-:visited - applies a style based on the history of the navigator
-:link applies a style to any <a>
-:checked applies a style on any radio button

Used structural pseudo-classes like **:first child**

**Calculating specificity**

ID is stronger than Class and the priority is always be taken from the closest one which is targeted

Please note that all the rules can be bypassed with the **!important rule** :joy:

### Colors and HTML

Colors by name
Color in hexo
Color in RGB

### Font and Family

- Font Family property ==> + import the font family from Google

- Font-size
- Font-weight
- font- style
- Text- Transform ==> UPPERCASE
- Text- decoration
- Text-align
- letter spacing and word spacing

### The Form

### The box model in CSS

- width and height ==> the content
- padding
- border
- Margin

_The border is set in_

p {
border: solid, 2px, black;
}

padding: 10px 20px; /_ padding-top and padding-bottom 10px _/
/_ padding-right and padding-left 20px _/

!important to use the **The box-sizing property is used to alter the default box model used to calculate the width and height of the elements**. Used the \* to apply to all the doc

### The CSS unit

px ==> classic
em ==> is equal to the parent element the children: 1em= 10 px if parent is equal to 10px
rem ==> to the root level and not the parent element

[hereforfurtherinfo](https://medium.com/@dixita0607/css-units-for-font-size-px-em-rem-79f7e592bb97)

_Othermetrics_

- vw 1% of the viewport
- vh 1 of the viewport
- % is used to express relative size compared to the parent element. It is commonly used along with properties like width and height.

### CSS Positioning

The position CSS property allows you to organize elements on the screen. Position can be:

static
relative
fixed
absolute ==> do not forget to add the relative position into the parent element in order to make it works

**Float**
Left and right
inherit will assume the float value of the parent container of the child element

**Vertical align**

### Responsive design

**Create a media query**

@media [(media-features) ] {
// Styles
}

<link rel="stylesheet" media="(media-features)" href="styles.css" />

_code example_

@media (min-width: 650px) and (max-width: 999px) {
.responsive-div {
background-color: green;
}
}

### Flexbox

Flex Container for the parents

row (default): left to right in ltr; right to left in rtl
row-reverse: the right to left in ltr; left to right in rtl
column: same as row but top to bottom
column-reverse: same as row-reverse but bottom to top

-Justify content on the x-axis
-align content on the y axis
-align-items on the y axis

_Property of the elements_
-align self
-Flex growth
-Flex shrink

### Flex grid

[here](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### Transition

transition-property: Specifies the CSS property (or properties) to be transitioned.
transition-duration: Specifies the duration of the transition.
transition-timing-function: Specifies the timing function of the transition.
transition-delay: Specifies an optional delay.

\*\*
\*\*


### November 14

## Java Script

**Definition**

JavaScript (/ˈdʒɑːvəskrɪpt/), often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices.

JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).

**Good tips**

console.log(document.domain)
console.log (document.URL)
console.log (document.title)
console.log (document.doctype)
console.log (document.body)
console.log (document. all) to check all the elements
console.log (document.all [3]) ==> Select the element inside the array
console.log (document.all[3].textcontent = ("")
console.log (document.all[3].innerHtml = ("")
console.log (documents.links)
console.log (documents.imgs)

**Type of values**

- String value in '' "" ``
- Bolean
-

the best practise for ES6 JS is:
console.log (` add the value here  ${array[number].name})

if we have the value 

console.log (`Users is ${name}`)
console.table ==> Table of the arrays 

**Variables**

Please no more use the var

Let and const

let ==> a value can be reassigned
const ==> a unique value

For instance

let firstName = "tuly"
console.log(firstName)
// The console prints tuly //

firstname = "Feuch"
console.log (firstName)
// the console log prints Feuch //



**Conditions**

if (conditions){
    run the conditions
}

*Prompt request the user to type something*
const number = prompt("enter a number: ")






### Trash Notes below to be cleaned

## November 11

1.1 Spotify case

CSS and exercices

CSS general settings to reset the CSS

\*{
margin 0
padding 0
outline 1px solid ==> pour voir les divs
}

// For the fixed position//
Position fixed ==> z-index

object fit cover is an alternative from background cover
vh ==> view hight
er tgo have this kind of structure below
Parent child > child element
section > external div > child div

1.2 iniatiation at JS

1.3 Grid content
https://css-tricks.com/snippets/css/complete-guide-grid/

## November 1 

