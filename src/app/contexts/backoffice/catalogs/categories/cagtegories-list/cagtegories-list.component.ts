import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cagtegories-list',
  templateUrl: './cagtegories-list.component.html',
  styleUrls: ['./cagtegories-list.component.css']
})
export class CagtegoriesListComponent {

  private url: string = 'http://localhost:8080/api/admin/categorias';
  private showError: boolean = false;
  private errorMessage: string = '';
  categories: any;

  constructor(private route: ActivatedRoute,private router: Router, private http: HttpClient){}


  ngOnInit(){
    this.getCategories();
  }

  editCategory(id: number){
    this.router.navigate(
      ['/admin/categorias/editar/' + id]);
  }

  gotoAltas(){
    this.router.navigate(
      ['/admin/categorias/nuevo']);
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
            this.getCategories();
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

  getCategories() {
    fetch(this.url)
      .then((response) => response.json())
      .then(result => {
        if (result.error) {
          this.errorMessage = result.error;
          this.showError = true;
        } else {
          console.log('categories ', result)
          this.categories = result;
        }
      })
  }
}
