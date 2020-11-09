function stack () {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.length = length;
  this.theclear = theclear;
  this.takeaway = takeaway;
}

// adding element into stack

function push (element) {
  this.dataStore[this.top++] = element;
}

// removing element from the stack

function pop () {
  return this.dataStore[this.top--];
}

// lets return what's currently at the top of the stack using the peek function

function peek () {
  return this.dataStore[this.top - 1];
}

// removing all elements from stack

function theclear () {
  this.top = 0;
  this.dataStore.length = 0;
}

function takeaway () {
  this.top = 0;
  this.dataStore.length = 0;
}

// finding out how many elements are stored in the stack or the top of the stack

function length () {
  return this.top;
}

var brands = new stack ();

brands.push ('nike');
brands.push ('puma');
brands.push ('addidas');
brands.push ('umbro');
brands.push ('underarmour');

console.log (`length is ${brands.length ()}`);
console.log (brands.peek ());

brands.pop ('umbro');
console.log (`the removed brand or element is ${brands.pop ()}`);
console.log (`length is ${brands.length ()}`);
console.log (brands.peek ());

brands.push ('diadorra');
console.log (`length is ${brands.length ()}`);
console.log (brands.peek ());

brands.takeaway ();
console.log (`new lenght of stack is ${brands.length ()}`);
console.log (brands.peek ());

brands.push ('jordan');
console.log (brands.peek ());
