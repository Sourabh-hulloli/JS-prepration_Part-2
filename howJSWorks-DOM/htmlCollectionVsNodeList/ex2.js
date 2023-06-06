// 2. HTMLCollection (Element Nodes) vs NodeList (All Nodes)
const box = document.getElementById("box");
console.log(box.children); // HTML Collection(2) [div, div]

console.log(box.childNodes); // NodeList(5) [text, div, text, div, text]
