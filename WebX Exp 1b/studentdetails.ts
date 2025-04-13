// Base class: Student
class Student {
    name: string;
    studentId: number;
    grade: string;
  
    constructor(name: string, studentId: number, grade: string) {
      this.name = name;
      this.studentId = studentId;
      this.grade = grade;
    }
  
    getDetails(): void {
      console.log(`Student Name: ${this.name}`);
      console.log(`Student ID: ${this.studentId}`);
      console.log(`Grade: ${this.grade}`);
    }
  }
  
  // Subclass: GraduateStudent
  class GraduateStudent extends Student {
    thesisTopic: string;
  
    constructor(name: string, studentId: number, grade: string, thesisTopic: string) {
      super(name, studentId, grade);
      this.thesisTopic = thesisTopic;
    }
  
    getDetails(): void {
      super.getDetails();
      console.log(`Thesis Topic: ${this.thesisTopic}`);
    }
  
    getThesisTopic(): void {
      console.log(`Thesis Topic: ${this.thesisTopic}`);
    }
  }
  
  // Independent class: LibraryAccount
  class LibraryAccount {
    accountId: number;
    booksIssued: string[];
  
    constructor(accountId: number, booksIssued: string[]) {
      this.accountId = accountId;
      this.booksIssued = booksIssued;
    }
  
    getLibraryInfo(): void {
      console.log(`Library Account ID: ${this.accountId}`);
      console.log(`Books Issued: ${this.booksIssued.join(', ')}`);
    }
  }
  
  // Composition: Associate LibraryAccount with Student
  class StudentWithLibrary {
    student: Student;
    libraryAccount: LibraryAccount;
  
    constructor(student: Student, libraryAccount: LibraryAccount) {
      this.student = student;
      this.libraryAccount = libraryAccount;
    }
  
    getFullDetails(): void {
      this.student.getDetails();
      this.libraryAccount.getLibraryInfo();
    }
  }
  
  // 🧪 Usage:
  
  const student1 = new Student("Rohan Lalchandani", 25, "A");
  const gradStudent = new GraduateStudent("Rohan Lalchandani", 25, "A+", "AI in Healthcare");
  const libraryAcc = new LibraryAccount(5001, ["Clean Code", "AI Superpowers"]);
  
  const studentWithLib = new StudentWithLibrary(student1, libraryAcc);
  
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
  
