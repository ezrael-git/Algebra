class Number {
  constructor (value,type="+") {
    this.value = value;
    if (!["+", "-"].includes(type)) {
      throw new Error("Unknown type: " + type);
    }
    this.type = type;
  }

  def () {
    return this.value;
  }
}

class ParenEq {
  constructor (eq) {
    this.eq = eq;
    this.solved = "";
  }
  
  def () {
    return this.eq;
  }

  solve () {
    let r = eval(this.eq);
    this.solved = r;
    return r;
  }
}

class Parser {
  constructor () {
  }

  split_term (expr) {
    let eq = [];
    let flag = false;
    let elem = "";
    
    for (let char of expr) {
      if (char == "+" || char == "-") {
        if (flag == true) {
          flag = false;
        } else {
          flag = true;
          elem = "";
        }
      }
      if (flag == true) {
        elem += char;
      }
    }
  }

  type_format (tks) {
    let eq = [];
    let new_term = false;
    let new_paren = false;
    for (let tk of tokens) {
      if (
    }
  }


  parse (expr) {
    let tks = expr.split(' ');
    
  }
}
