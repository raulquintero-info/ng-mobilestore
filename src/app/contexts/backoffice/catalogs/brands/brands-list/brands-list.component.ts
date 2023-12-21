import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brands-list.component.html',
  styleUrls: ['./brands-list.component.css']
})
export class BrandsListComponent {



private url: string = 'http://localhost:8080/api/marcas';
public errorMessage: string = '';
public showError: boolean = false;
public brands: any;

constructor(private route: ActivatedRoute,private router: Router, private http: HttpClient){}

  ngOnInit(){
    this.getRoles();
  }

  edit(id: number){
    this.router.navigate(
      ['/admin/marcas/editar/' + id]);
  }


  gotoAltas(){
    this.router.navigate(
      ['/admin/marcas/nuevo']);
  }

  delete(id: number){
    if (id > 0)
    console.log(`${this.url}/${id}`);
      this.http.delete<any>(`${this.url}/${id}`)
        .subscribe({
          next: resp => {
            console.log(resp);
            this.errorMessage = "Marca Eliminada";
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
          console.log('categories ', result)
          this.brands = result;
        }
      })
  }




}
