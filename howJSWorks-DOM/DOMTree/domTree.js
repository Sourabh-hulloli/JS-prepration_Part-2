// Traversing DOM Tree

// 1. Root Node
const rootNode = document.getRootNode();
console.log(rootNode);

// 2. Root Element
const rootElement = rootNode.childNodes[0];
console.log(rootElement);

// 3. HTML Elements child Nodes
console.log(rootElement.childNodes); // NodeList(3) [head, text, body]

// 4. HTML Head Node
const headElementNode = rootElement.childNodes[0];
console.log(headElementNode);

// 5. text Node inside Head tag
const textNode1 = rootElement.childNodes[1];
console.log(textNode1);

// 6. HTML Body Element
const bodyElement = rootElement.childNodes[2];
console.log(bodyElement);

// 7. checking head Element Parent Node
console.log(headElementNode.parentNode);

// 8. sibiling relationship
console.log(headElementNode.nextSibling); // #text
console.log(headElementNode.nextSibling.nextSibling); // <body> ... </body>
console.log(headElementNode.nextSibling.nextElementSibling); // <body> ... </body>

// 9. selecting h1 element
const h1 = document.querySelector("h1");
h1.parentNode.style.backgroundColor = "cyan";
console.log(h1.parentNode);

// 10. direct access method
const body = document.body;
console.log(body);

// 11. accessing child nodes inside head using querySelector()
const head = document.querySelector("head");
const title = head.querySelector("title");
console.log(title);

// 12. checking title's child node
console.log(title.childNodes);
console.log(title.textContent);

// 13. children property return HTML Collection [] of Elenemts without text nodes.
const container = document.querySelector(".container");
console.log(container.childNodes);
console.log(container.children);
