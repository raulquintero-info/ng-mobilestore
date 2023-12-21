import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/core/interfaces/employee.interface';
import { Human } from 'src/app/core/interfaces/human.interface';

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.css']
})
export class EmployeesFormComponent {

  showForm: boolean = true;
  human: Human = {id: 0, name:'',lastname: '', address1:'', address2:'', email:'',city:'', country:'',telephone:'', postalcode: 0};
  employee: Employee = {id:0, human: this.human};
  errorMessage: string ='';
  showError: boolean = false;
  employees: any;
  params: any;

  url = 'http://localhost:8080/api';

  constructor(private route: ActivatedRoute, private http: HttpClient){}

  ngOnInit(){
    this.route.paramMap.subscribe(params => this.params = params);

    this.getEmployees(this.params.params.id);

  }

  save(){
    console.log(this.employee);

    if (this.employee.id == null || this.employee.human?.name == '' || this.employee.human?.email == null ) {
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


}

