// Employee interface
interface Employee {
    name: string;
    id: number;
    role: string;
    getDetails(): string;
  }
  
  // Manager class implements Employee
  class Manager implements Employee {
    name: string;
    id: number;
    role: string;
    department: string;
  
    constructor(name: string, id: number, department: string) {
      this.name = name;
      this.id = id;
      this.role = "Manager";
      this.department = department;
    }
  
    getDetails(): string {
      return `Manager Details:
      Name: ${this.name}
      ID: ${this.id}
      Role: ${this.role}
      Department: ${this.department}`;
    }
  }
  
  // Developer class implements Employee
  class Developer implements Employee {
    name: string;
    id: number;
    role: string;
    programmingLanguages: string[];
  
    constructor(name: string, id: number, programmingLanguages: string[]) {
      this.name = name;
      this.id = id;
      this.role = "Developer";
      this.programmingLanguages = programmingLanguages;
    }
  
    getDetails(): string {
      return `Developer Details:
      Name: ${this.name}
      ID: ${this.id}
      Role: ${this.role}
      Programming Languages: ${this.programmingLanguages.join(', ')}`;
    }
  }
  
  // 🧪 Demo
  const manager = new Manager("John Doe", 101, "Human Resources");
  const developer = new Developer("Rohan Lalchandani", 25, ["JavaScript", "TypeScript", "Python"]);
  
  console.log(manager.getDetails());
  console.log("\n----------------------\n");
  console.log(developer.getDetails());
  