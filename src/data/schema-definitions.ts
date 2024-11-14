export type Employee = {
    id: number;
    first_name: string;
    last_name: string;
    department: string; // department name
    position: string; // supervisor, team lead, etc. 
    station: string;
    employment_type: string; // regular, part-time, temporary
    hire_date: string;
}

// display: by department, by position, by station, by hire date