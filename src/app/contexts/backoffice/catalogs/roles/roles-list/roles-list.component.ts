import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/core/interfaces/role.interface';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css']
})
export class RolesListComponent{

  private url: string = 'http://localhost:8080/api/roles';
  public errorMessage: string = '';
  public showError: boolean = false;
  public roles: Array<Role> = [];

  constructor(private route: ActivatedRoute,private router: Router, private http: HttpClient){}

  ngOnInit(){
    this.getRoles();
  }

  edit(id: number){
    this.router.navigate(
      ['/admin/sistema/roles/editar/' + id]);
  }

  save(id: number){}

  gotoAltas(){
    this.router.navigate(
      ['/admin/sistema/roles/nuevo']);
  }

  delete(id: number){
    if (id > 0)
    console.log(`${this.url}/${id}`);
      this.http.delete<any>(`${this.url}/${id}`)
        .subscribe({
          next: resp => {
            console.log(resp);
            this.errorMessage = "Registro Eliminado";
            this.showError = true;
            this.getRoles();
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

  getRoles() {
    fetch(this.url)
      .then((response) => response.json())
      .then(result => {
        if (result.error) {
          this.errorMessage = result.error;
          this.showError = true;
        } else {
          console.log('roles ', result)
          this.roles = result;
        }
      })
  }




}
