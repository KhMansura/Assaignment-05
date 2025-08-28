## WELCOME TO Emergency Service Directory Bd:(প্রজেক্টটিতে ইউজার বিভিন্ন জরুরি নম্বরে কল করতে পারবেন, নম্বর কপি এবং কল হিস্ট্রি দেখা যাবে রিয়েল-টাইমে)
 
 ###  Answer the following questions clearly:
 1. `What is the difference between` **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
    **getElementById**: Works very fast for IDs only.Returns the element with a specified ID.works most directly.
    *example:*
    `const title = document.getElementById("main-title");`
    
    **getElementsByClassName**:It returns multiple elements that have the same class.Must be accessed in a loop.
    *example:*
`const cards = document.getElementsByClassName("card");`

    **querySelector**:It uses (class ,tag #id ) like CSS selectors.Returns the first matching element.
`const firstCard = document.querySelector(".card");`

      **querySelectorAll**: Returns a static NodeList (does not update even if the DOM changes).
      `const allCards = document.querySelectorAll(".card");`

2. `How do you` **create and insert a new element into the DOM**?

   **DOM**: DOM stands for Document Object Model.Which defines the logical structure of an HTML document. For JavaScript it defines: The HTML DOM is an API (Programming Interface).
       **To create an element, follow these steps**:
        1/use document. createElemnent()
       2/add an html document using any html tag (such as div, span, p, li, button etc).
       *Example:*
           `let div = document.createElement('div');`
     
   **Adding content or attributes**:
          ` div.innerText = "hello";`

   **To insert elements**:There are different methods for this:
         1/ appendChild():adds the new element as the last child.
            *example:*`document.body.appendChild(div)`
              2/append():works similarly to appendChild(), but it can add multiple elements to the end of an element.
              3/insertBefore():Adds before a specific element
              4/prepend():adds to the beginning
              5/replaceChild():Replaces old elements with new ones
    *Example:*
     ` let div = document.createElement('div');
        div.innerText = "hello";
        document.body.appendChild(div);`

       
3. `What is` **Event Bubbling** and how does it work?

   **Event Bubbling**: when an event occurs on a child element (e.g.: ), that event is first triggered on that child element, then on its parent element, then on its grandparent — thus "bubbling" up the DOM.
   **how does it work**:
   *Example:*
   ```
   <div>
    <button>Click Me</button>
   </div>
  
*explanation:* here is a `<button>`   inside a `<div>`, clicking the button triggers the button's event first, then the `<div>'s` event.
   
   
4. `What is` **Event Delegation** in JavaScript? Why is it useful?

   **Event Delegation**:Event Delegation is the process of placing an event listener on a parent element and handling the events of its children.
   **Benefits of Event Delegation** :
   1/better performance
   2/Code is cleaner and simpler
   3/Works with dynamic elements
   4/Fewer event listeners required
   5/Memory leak prevention
   
5. `What is the difference between` **preventDefault() and stopPropagation()** methods?

   **preventDefault()**:This method disables the browser's default behavior.*For example:*
   (form submission, link navigation)
   document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
});
   
   **stopPropagation()**:Prevents the event from going to parent elements.It stops bubbling.
   *example:*
   document.querySelector(".child").addEventListener("click", function(e) {
  e.stopPropagation();
});


   
   
       
