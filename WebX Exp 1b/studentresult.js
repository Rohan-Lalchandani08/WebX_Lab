var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Base class: Student
var Student = /** @class */ (function () {
    function Student(name, studentId, grade) {
        this.name = name;
        this.studentId = studentId;
        this.grade = grade;
    }
    Student.prototype.getDetails = function () {
        console.log("Student Name: ".concat(this.name));
        console.log("Student ID: ".concat(this.studentId));
        console.log("Grade: ".concat(this.grade));
    };
    return Student;
}());
// Subclass: GraduateStudent
var GraduateStudent = /** @class */ (function (_super) {
    __extends(GraduateStudent, _super);
    function GraduateStudent(name, studentId, grade, thesisTopic) {
        var _this = _super.call(this, name, studentId, grade) || this;
        _this.thesisTopic = thesisTopic;
        return _this;
    }
    GraduateStudent.prototype.getDetails = function () {
        _super.prototype.getDetails.call(this);
        console.log("Thesis Topic: ".concat(this.thesisTopic));
    };
    GraduateStudent.prototype.getThesisTopic = function () {
        console.log("Thesis Topic: ".concat(this.thesisTopic));
    };
    return GraduateStudent;
}(Student));
// Independent class: LibraryAccount
var LibraryAccount = /** @class */ (function () {
    function LibraryAccount(accountId, booksIssued) {
        this.accountId = accountId;
        this.booksIssued = booksIssued;
    }
    LibraryAccount.prototype.getLibraryInfo = function () {
        console.log("Library Account ID: ".concat(this.accountId));
        console.log("Books Issued: ".concat(this.booksIssued.join(', ')));
    };
    return LibraryAccount;
}());
// Composition: Associate LibraryAccount with Student
var StudentWithLibrary = /** @class */ (function () {
    function StudentWithLibrary(student, libraryAccount) {
        this.student = student;
        this.libraryAccount = libraryAccount;
    }
    StudentWithLibrary.prototype.getFullDetails = function () {
        this.student.getDetails();
        this.libraryAccount.getLibraryInfo();
    };
    return StudentWithLibrary;
}());
// 🧪 Usage:
var student1 = new Student("Rohan Lalchandani", 25, "A");
var gradStudent = new GraduateStudent("Rohan Lalchandani", 25, "A+", "AI in Healthcare");
var libraryAcc = new LibraryAccount(5001, ["Clean Code", "AI Superpowers"]);
var studentWithLib = new StudentWithLibrary(student1, libraryAcc);
// Outputs
console.log("\n--- Student Details ---");
student1.getDetails();
console.log("\n--- Graduate Student Details ---");
gradStudent.getDetails();
gradStudent.getThesisTopic();
console.log("\n--- Library Account Info ---");
libraryAcc.getLibraryInfo();
console.log("\n--- Student with Library Account (Composition) ---");
studentWithLib.getFullDetails();
