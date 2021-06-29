import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "./employee";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class EmployeeService {
    private apiServeurUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(`${this.apiServeurUrl}/employee/all`);
    }

    public addEmployees(employee: Employee): Observable<Employee> {
        return this.http.post<Employee>(`${this.apiServeurUrl}/employee/add`, employee);
    }

    public updateEmployees(employee: Employee): Observable<Employee> {
        return this.http.put<Employee>(`${this.apiServeurUrl}/employee/update`, employee);
    }
    
    public deleteEmployees(employeeId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServeurUrl}/employee/delete/${employeeId}`);
    }
}