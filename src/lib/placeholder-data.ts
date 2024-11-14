import { Employee } from "@/data/schema-definitions";

export const employees: Employee[] = [
    {
      id: 1,
      first_name: "Dave",
      last_name: "Smith",
      employment_type: "Full-time",
      department: "Engineering",
      position: "team lead",
      station: "full-stack",
      hire_date: "2021-01-01",
    },
    {
        id: 2,
        first_name: "Emily",
        last_name: "Ramirez",
        employment_type: "Full-time",
        department: "Engineering",
        position: "developer",
        station: "full-stack",
        hire_date: "2021-01-04",
    },
    {
      id: 3, 
      first_name: "Jane",
      last_name: "Doe",
      employment_type: "Part-time",
      department: "Engineering",
      position: "developer",
      station: "front-end",
      hire_date: "2021-01-02",
    },
    {
      id: 4,
      first_name: "Christian",
      last_name: "Perez",
      employment_type: "Contract",
      department: "Engineering",
      position: "developer",
      station: "back-end",
      hire_date: "2021-01-03",
    }, 
    {
        id: 5,
        first_name: "Samantha",
        last_name: "Gonzalez",
        employment_type: "Part-time",
        department: "Engineering",
        position: "developer",
        station: "quality assurance",
        hire_date: "2021-01-04",
    }
  ];