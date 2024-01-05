import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Human } from 'src/app/core/interfaces/human.interface';
import { User } from 'src/app/core/interfaces/user.interface';
import { EmployeeService } from 'src/app/core/services/models/employee.service';

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.css']
})
export class EmployeesFormComponent {

  showForm: boolean = true;
  employee: User = {id: 0} as User;
  errorMessage: string ='';
  showError: boolean = false;
  employees: any;
  params: any;

  url = 'http://localhost:8080/api';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private employeeService: EmployeeService){}

  ngOnInit(){
    this.route.paramMap.subscribe(params => this.params = params);

    this.getEmployees(this.params.params.id);

  }
  gotoUser(id: number){
    this.router.navigate(
      ['/admin/sistema/usuarios/' + id]);
  }
  save(){
    console.log(this.employee);

    if (this.employee.id == null || this.employee.name == '' || this.employee.email == null ) {
      this.errorMessage = 'complete todos los datos';
      this.showError = true;
      console.log(this.showError);
      return;
    }
    console.table(this.employee);

    const body = this.employee;

    if (this.employee.id == 0) {
      this.http.post<any>(`${this.url}/empleados`, body)
        .subscribe({
          next: resp => {
            console.log(resp);
            this.employee = resp.employee;
            this.errorMessage = resp.mensaje;
            this.showError = true;
          },
          error: error => {
            if (!error.ok && (error.status == 404 || error.status == 500)) {
              this.errorMessage = 'El registro ya no existe';
              this.showError = true;
              console.log('error');

            }
          }
        })

    } else {

      this.http.put<any>(`${this.url}/empleados`, body)
        .subscribe({
          next: resp => {
            console.log(resp);
            this.employee = resp.employee;
            this.errorMessage = "Registro Actualizado";
            this.showError = true;
          },
          error: error => {
            if (!error.ok && (error.status == 404 || error.status == 500)) {
              this.errorMessage = 'El registro ya no existe';
              this.showError = true;
              console.log('error');

            }
          }
        })
    }
  }

  getEmployees(id: number) {
    if (id>0)
      this.http.get<any>(`${this.url}/empleados/${id}`)
        .subscribe({
          next: resp => {
            console.log(resp.ok, resp.status)

            console.log(resp);
            this.employee = resp;
            this.showForm = true;

          },
          error: error => {
            if (!error.ok && (error.status == 404 || error.status == 500)) {
              this.errorMessage = 'El registro ya no existe';
              this.showError = true;
              this.showForm = false;
              console.log('showError', this.showError);
            }
          }
        })
  }

  saveOrUpdate() {
    console.log('cliente:> ', this.employee);
    //todo: fix validations
    if (this.employee.id == null  ) { this.errorMessage = 'complete todos los datos'; this.showError = true; console.log(this.showError);
    } else{
      this.employeeService.saveOrUpdate(this.employee).subscribe({
        next: resp => {
          console.log(resp);
          this.employee.id=resp.employee.id;
          this.errorMessage = resp.message;
          this.showError = true;},
        error: error => { console.log(error);this.errorMessage = error.error.message; this.showError = true}
      });

    }
  }

}

