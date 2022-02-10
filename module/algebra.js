class Number {
  constructor (value,type="+") {
    this.value = value;
    if (!["+", "-"].includes(type)) {
      throw new Error("Unknown type: " + type);
    }
    this.type = type;
  }

  def () {
    let r = "";
    r += this.sign;
    r += String(this.value);
    return r
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
    this.log = [];
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
      let obj = new Number(parseInt(value),type);
      eq.push(obj);
    }
    return eq;
  }

  equalize (typed) {
    if (typed.length % 2 != 0) {
      typed.push(new Number(0));
    }
    return typed;
  }


  parse (expr) {
    this.log.push(expr);
    let tks = this.tokenize(expr);
    let typed = this.type_format(tks);
    let equalized = this.equalize(typed);
    return equalized;
  }
}

class Evaluater {
  constructor () {
  }

  eval (parsed) {
    let final = 0;
    let ongoing = 0;
    for (let i = 0; i < parsed.length; i += 2) {
      let first = parsed[i];
      let next = parsed[i+1];
      ongoing = 
      
    }

    return final;


  }
}

module.exports = class Interface {
  constructor () {
    this.parser = new Parser();
    this.evaluater = new Evaluater();
  }

  solve (exprs) {
    exprs = exprs.trim().split("\n");
    let result = 0;
    for (let expr of exprs) {
      let parsed = this.parser.parse(expr);
      let evaled = this.evaluater.eval(parsed);
      result += evaled;
    }
    return result;
  }

  
}
