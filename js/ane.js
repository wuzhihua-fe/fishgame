
var aneObj = function() {
	this.x = [];
	this.len = [];
}

aneObj.prototype.num = 50;
aneObj.prototype.init = function() {
	for(var i = 0; i < this.num; i++) {
		this.x[i] = i * 10 + Math.random() * 20;
		this.len[i] = 200 + Math.random() * 50;
	}
	console.log(1);
}
aneObj.prototype.draw = function() {

}