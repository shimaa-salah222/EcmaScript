class Company {
    constructor(name, employees) {
      this.name = name;
      this.employees = employees;
    }
  }
  
  class CompanyIterator {
    constructor(company) {
      this.company = company;
      this.index = 0;
    }
  
    [Symbol.iterator]() {
      return this;
    }
  
    next() {
      if (this.index < this.company.employees.length) {
        const employee = this.company.employees[this.index];
        this.index++;
        return { value: { name: employee.name, job: employee.job }, done: false };
      } else {
        return { done: true };
      }
    }
  }
  
  const company = new Company("ABC IT.", [
    { name: "Shimaa Salah", job: "Software Engineer" },
    { name: "Huda mohamed", job: "Marketing Manager" },
    { name: "Ali Ahmed", job: "Sales Representative" },
  ]);
  
  const iterator = new CompanyIterator(company);
  
  for (const employee of iterator) {
    console.log(`Name: ${employee.name}, Job: ${employee.job}`);
  }