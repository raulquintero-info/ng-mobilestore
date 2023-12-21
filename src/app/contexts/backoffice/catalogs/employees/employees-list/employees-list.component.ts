import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {

  private url: string = 'http://localhost:8080/api';
  public errorMessage: string = '';
  public showError: boolean = false;
  public employees: any;

    constructor(private router: Router, private http: HttpClient){}

    ngOnInit(){

      this.getEmployees()
    }

    editProduct(id: number){
      this.router.navigate(
        ['/admin/sistema/empleados/editar/' + id]);
    }

    gotoAltas(){
      this.router.navigate(
        ['/admin/sistema/empleados/nuevo']);
    }

    deleteProduct(id: number){
      if(id>0)
      this.http.get<any>(`${this.url}/empleados`)
      .subscribe({
        next: resp => {
          console.log(resp);
          this.errorMessage = "Registro Eliminado";
          this.showError = true;
        },
        error: error => {
          if (!error.ok && (error.status == 404 || error.status == 500)) {
            this.errorMessage = 'El registro ya no existe';
            this.showError = true;
            console.log('error');

          }
        }
      });
    }

    getEmployees( ) {
      fetch(this.url + '/empleados')
        .then((response) => response.json())
        .then(result => {
          console.log('----->>>>', result);
          if (result.error) {
            this.errorMessage = result.error;
            this.showError = true;
          } else
            this.employees = result
        });

    }

}
