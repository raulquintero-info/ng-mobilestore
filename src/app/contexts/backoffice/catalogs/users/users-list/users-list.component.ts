import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {

  private url: string = 'http://localhost:8080/api/usuarios';
  private showError: boolean = false;
  private errorMessage: string = '';
  users: any;

  constructor(private route: ActivatedRoute,private router: Router, private http: HttpClient){}


  ngOnInit(){
    this.getUsers();
  }

  edit(id: number){
    this.router.navigate(
      ['/admin/sistema/usuarios/editar/' + id]);
  }

  gotoAltas(){
    this.router.navigate(
      ['/admin/sistema/usuarios/nuevo']);
  }

  delete(id: number){
    if (id > 0)
    console.log(`${this.url}/${id}`);
      this.http.delete<any>(`${this.url}/${id}`)
        .subscribe({
          next: resp => {
            console.log(resp);
            this.errorMessage = "Producto Eliminado";
            this.showError = true;
            this.getUsers();
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

  getUsers() {
    fetch(this.url)
      .then((response) => response.json())
      .then(result => {
        if (result.error) {
          this.errorMessage = result.error;
          this.showError = true;
        } else {
          console.log('users ', result)
          this.users = result;
        }
      })
  }
}
