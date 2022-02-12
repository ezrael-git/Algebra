// type
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

// compiler

class Parser {
  constructor () {
    this.log = [];
  }

  resolve_variables (expr, map) {
    /*
    Resolve all given variables from an Object, turning them into parseable integers in the expression.
    Arguments:
      expr (str): the expression to resolve from
      map (object): the dictionary object defining the variables
    */
    for (key of map) {
      let val = map[key];
      expr = expr.replaceAll(key,val);
    }
    return expr;
  }

  tokenize (expr) {
    /*
    Tokenize an expression into an array of terms.
    Arguments:
      expr (str): the expression to tokenize
    */
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
    /*
    Format an array of tokens into Objects.
    Arguments:
      tks (array): the array to format, preferably one that's been freshly tokenized by Parser.tokenize
    */
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
    /*
    Equalize an array of type-formatted tokens, so that the array's length is divisible by two.
    Arguments:
      typed (array): an array of type-formatted tokens
    */
    if (typed.length % 2 != 0) {
      typed.push(new Number(0));
    }
    return typed;
  }


  parse (expr,variables=undefined) {
    /*
    Interface function for the whole Parser class.
    Arguments:
      expr (str): the expression to parse
      variables (object): the variables to resolve
    */
    this.log.push(expr);
    if (variables != undefined) {
      expr = this.resolve_variables(expr, variables);
    }
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
    /*
    Interface method.
    Evaluate a parsed expression.
    Arguments:
      parsed (array): array of parsed and type-formatted tokens
    */
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

// frontend
module.exports = class Interface {
  constructor () {
    this.parser = new Parser();
    this.evaluater = new Evaluater();
  }

  solve (exprs) {
    /*
    Solve an expression.
    Interface method for the whole program.
    Arguments:
      exprs (array): an array of expressions to solve
    */
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
