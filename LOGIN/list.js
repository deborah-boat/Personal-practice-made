const input = document.getElementById('userInput');
document.getElementById('display').addEventListener('click', displayer);

function displayer() {
  const el = input.value;
  if (el.length === 0) {
    alert("Must enter something in input field");
    return;
  }

  const myDiv = document.createElement('div');
  myDiv.setAttribute("class", "todo-container");

  const item = document.createElement("li");
  const node = document.createTextNode(el);

  item.appendChild(node);
  myDiv.appendChild(item);

  const element = document.getElementById("mylist");
  element.appendChild(myDiv);

  const btn1 = document.createElement("button");
  const r = document.createTextNode("Remove");
  btn1.appendChild(r);
  myDiv.appendChild(btn1);

  btn1.addEventListener('click', function(e) {
    e.currentTarget.parentNode.remove();
    setTimeout(() => {
      alert('Item was deleted');
    }, 300)

  }, false);

  const btn2 = document.createElement("button");
  const c = document.createTextNode("Complete");
  btn2.appendChild(c);
  myDiv.appendChild(btn2);
  btn2.addEventListener('click', function(e) {
    this.parentNode.removeChild(this);
    let task = item.innerHTML;
    item.innerHTML = task + " completed";
    setTimeout(() => {
      alert("This item was completed");
    }, 300)
  }, false);

  input.value = "";
}