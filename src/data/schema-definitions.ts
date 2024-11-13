export type Employee = {
    id: number;
    first_name: string;
    last_name: string;
    employment_type: string; // regular, part-time, temporary
    department: string; // department name
    position: string; // supervisor, team lead, etc. 
    station: string;
    hire_date: string;
}

// display: by department, by position, by station, by hire date