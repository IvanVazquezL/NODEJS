const obj = {
    name: "Diego",
    sayHello: function () {
      console.log(`Hello, my name is ${this.name}`);
    },
  };
  
  setTimeout(obj.sayHello.bind(obj), 1000);