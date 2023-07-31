const myObj = {
    marks: 0,
  
    set mark(value) {
      if (value >= 0) {
          this.marks = value
        }
        else {
          console.log("error");
      }
    },
  };
  myObj.mark=9;
  console.log(myObj.marks);

  