function secretVariables(){
    var secret = "Super Secret variable";
    return function() {
        return secret;
    }
}
var getMySecretVariable = secretVariables();
console.log(secretVariables);



var num = 4;
function outer() {
    var num = 5;
    function inner() {
        num++;
        var num = 1;
        console.log(num)
    }
    inner();
}
outer();

console.log(typeof (typeof 9))

var hero = {
    _name: 'Sam Johnston',
    getSecretIdentity: function() {
        return this._name;
    }
};

var newSecretIdentity = hero.getSecretIdentity;
console.log(newSecretIdentity('Goallie'));
console.log(hero.getSecretIdentity());