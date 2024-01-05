import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Role } from 'src/app/core/interfaces/role.interface';
import { User } from 'src/app/core/interfaces/user.interface';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent {


  showForm: boolean = true;
  role: Role = {id: 2, name:''}
  // human: Human = {id: 0, name: '', lastname: '', email: '', address1: '',
  //   address2: '', city: '', country: '', telephone: '', postalcode: 0};
  user: User = { id: 0} as User;
  errorMessage: string = '';
  showError: boolean = false;
  categories: Array<User> = [];
  params: any;


  url = 'http://localhost:8080/api';

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.params = params);
    this.findUserById(this.params.params.id);

  }

  save() {
    if (this.user.id == null || this.user.password == '') {
      this.errorMessage = 'complete todos los datos';
      this.showError = true;
      console.log(this.showError);
      return;
    }
    console.table(this.user);

    const body = this.user;

    if (this.user.id == 0) {
      this.http.post<any>(`${this.url}/usuarios`, body)
        .subscribe({
          next: resp => {
            console.log(resp);
            this.user = resp.user;
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

      this.http.put<any>(`${this.url}/usuarios`, body)
        .subscribe({
          next: resp => {
            console.log(resp);
            this.user = resp.user;
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


  findUserById(id: number) {
    if (id > 0) {
      this.http.get<any>(`${this.url}/usuarios/${id}`)
        .subscribe({
          next: resp => {
            console.log(resp.ok, resp.status)

            console.log(resp);
            this.user = resp;
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

