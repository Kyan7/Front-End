var person = {
    _salary: 100,
    getSecretSalaryInfo: function() {
        return this._salary;
    }
};

var stoleSalaryInfo = person.getSecretSalaryInfo();

console.log(person.getSecretSalaryInfo());
console.log(stoleSalaryInfo);