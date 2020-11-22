const PLANET = "Земя";
class Person {
    constructor(name) {
        this.name = name;
        this.planet = PLANET;
    }
}

var p1 = new Person("Гошо");
var p2 = new Person("Пешо");
var p3 = new Person("Чък Норис");

function print(p) {
    console.log(`Здравей ${p.name} от планетата ${p.planet}`);
}

print(p1);
print(p2);
print(p3);