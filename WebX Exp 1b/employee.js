// Manager class implements Employee
var Manager = /** @class */ (function () {
    function Manager(name, id, department) {
        this.name = name;
        this.id = id;
        this.role = "Manager";
        this.department = department;
    }
    Manager.prototype.getDetails = function () {
        return "Manager Details:\n      Name: ".concat(this.name, "\n      ID: ").concat(this.id, "\n      Role: ").concat(this.role, "\n      Department: ").concat(this.department);
    };
    return Manager;
}());
// Developer class implements Employee
var Developer = /** @class */ (function () {
    function Developer(name, id, programmingLanguages) {
        this.name = name;
        this.id = id;
        this.role = "Developer";
        this.programmingLanguages = programmingLanguages;
    }
    Developer.prototype.getDetails = function () {
        return "Developer Details:\n      Name: ".concat(this.name, "\n      ID: ").concat(this.id, "\n      Role: ").concat(this.role, "\n      Programming Languages: ").concat(this.programmingLanguages.join(', '));
    };
    return Developer;
}());
// 🧪 Demo
var manager = new Manager("John Doe", 101, "Human Resources");
var developer = new Developer("Rohan Lalchandani", 25, ["JavaScript", "TypeScript", "Python"]);
console.log(manager.getDetails());
console.log("\n----------------------\n");
console.log(developer.getDetails());
