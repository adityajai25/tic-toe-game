var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  nameLength: function(){
    console.log(this.name.length);
  }
};

var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  nameLength: function(){
    alert("Name is "+this.name);
    alert("Job is "+this.job);
    alert("Age is "+this.age);
  }
};

var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  nameLength: function(){
  console.log(this.name.split(" ")[1]);
  }
};
