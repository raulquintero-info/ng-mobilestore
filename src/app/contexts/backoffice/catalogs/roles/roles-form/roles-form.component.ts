import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Role } from 'src/app/core/interfaces/role.interface';

@Component({
  selector: 'app-roles-form',
  templateUrl: './roles-form.component.html',
  styleUrls: ['./roles-form.component.css']
})
export class RolesFormComponent {
  showForm: boolean = true;
  role: Role = { id: 0 , name: ''};
  errorMessage: string = '';
  showError: boolean = false;
  roles: Array<Role> = [];
  params: any;


  url = 'http://localhost:8080/api';

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.params = params);

    this.findRoleById(this.params.params.id);

  }

  save() {
    if (this.role.id == null || this.role.name == '') {
      this.errorMessage = 'complete todos los datos';
      this.showError = true;
      console.log(this.showError);
      return;
    }
    console.table(this.role);

    const body = this.role;

    if (this.role.id == 0) {
      this.http.post<any>(`${this.url}/roles`, body)
        .subscribe({
          next: resp => {
            console.log(resp);
            this.role = resp.role;
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

      this.http.put<any>(`${this.url}/roles`, body)
        .subscribe({
          next: resp => {
            console.log(resp);
            this.role = resp.role;
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


  findRoleById(id: number) {
    if (id > 0) {
      this.http.get<any>(`${this.url}/roles/${id}`)
        .subscribe({
          next: resp => {
            console.log(resp.ok, resp.status)

            console.log(resp);
            this.role = resp;
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


}

