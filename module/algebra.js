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

  tokenize (expr) {
    expr = expr.replaceAll(" ", "");
    expr += "+";
    let eq = [];
    let elem = "";
 
    for (let char of expr) {
      if (char == "+" || char == "-") {
        eq.push(elem);
        elem = "";
      }
      elem += char;
    }

    eq.splice(0, 1);
    return eq;
    
  }

  type_format (tks) {
    let eq = [];
    for (tk of tks) {
      let type = tk[0];
      let value = tk.replace(type, "");
      let obj = new Number(value,type);
      eq.push(obj);
    }
    return eq;
  }


  parse (expr) {
    let tks = this.tokenize(expr);
    let typed = this.type_format(tks);
    return typed;
    
  }
}
