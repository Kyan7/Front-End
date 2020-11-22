var person = (function() {
    var _salary = 100;
    return {
        getSecretSalaryInfo: function() {
            return _salary;
        }
    }
})();

var stoleSalaryInfo = person.getSecretSalaryInfo();

console.log(person.getSecretSalaryInfo());
console.log(stoleSalaryInfo);