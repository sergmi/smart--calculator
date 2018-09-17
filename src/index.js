class SmartCalculator {
  constructor(initialValue) {
	this.sequence  = '(' + initialValue + ')';
	let sequence = this.sequence;
	let result, items;
	
	let findResult = function(){
		items = [];
		items = sequence;		
		
		items = items.replace(/.add/g,'+');
		items = items.replace(/.multiply/g,'*');
		items = items.replace(/.subtract/g,'-');
		items = items.replace(/.devide/g,'/');
		items = items.replace(/.pow/g,'**');
		
		result = eval(items);
		return result;
	}
	
	String.prototype.add = function(a){		
		sequence = sequence + '.add(' + a + ')';				
		return  new String(findResult());
	}
	
	String.prototype.subtract = function(a){
		sequence = sequence + '.subtract(' + a + ')';		
		return  new String(findResult());
	}

	String.prototype.multiply = function(a){
		sequence = sequence + '.multiply(' + a + ')';		
		return  new String(findResult());
	}
	
	String.prototype.devide = function(a){
		sequence = sequence + '.devide(' + a + ')';		
		return  new String(findResult());
	}
	
	String.prototype.pow = function(a){
		sequence = sequence + '.pow(' + a + ')';		
		return  new String(findResult());
	}
  }

  add(number) {
	return new String(this.sequence.add(number));
  }
  
  subtract(number) {
	return new String(this.sequence.subtract(number));
  }

  multiply(number) {
	return new String(this.sequence.multiply(number));
  }

  devide(number) {
	return new String(this.sequence.devide(number));
  }

  pow(number) {
	return new String(this.sequence.pow(number));
  }
}

 module.exports = SmartCalculator;