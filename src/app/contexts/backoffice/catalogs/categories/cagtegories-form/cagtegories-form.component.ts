import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/core/interfaces/category.interface';

@Component({
  selector: 'app-cagtegories-form',
  templateUrl: './cagtegories-form.component.html',
  styleUrls: ['./cagtegories-form.component.css']
})
export class CagtegoriesFormComponent {
  showForm: boolean = true;
  category: Category = { id: 0 ,isEnabled: true};
  errorMessage: string = '';
  showError: boolean = false;
  categories: Array<Category> = [];
  params: any;


  url = 'http://localhost:8080/api';

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.params = params);

    this.findCategoryById(this.params.params.id);

  }

  save() {
    if (this.category.id == null || this.category.name == '') {
      this.errorMessage = 'complete todos los datos';
      this.showError = true;
      console.log(this.showError);
      return;
    }
    console.table(this.category);
    this.category.name = this.category.name?.toLowerCase();

    const body = this.category;

    if (this.category.id == 0) {
      this.http.post<any>(`${this.url}/categorias`, body)
        .subscribe({
          next: resp => {
            console.log(resp);
            this.category = resp.category;
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

      this.http.put<any>(`${this.url}/categorias`, body)
        .subscribe({
          next: resp => {
            console.log(resp);
            this.category = resp.category;
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
    }
  }


  findCategoryById(id: number) {
    if (id > 0) {
      this.http.get<any>(`${this.url}/categorias/${id}`)
        .subscribe({
          next: resp => {
            console.log(resp.ok, resp.status)

            console.log(resp);
            this.category = resp;
            this.category.name = this.category.name?.toUpperCase();
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
