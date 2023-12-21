import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/core/interfaces/brand.interface';

@Component({
  selector: 'app-brands-form',
  templateUrl: './brands-form.component.html',
  styleUrls: ['./brands-form.component.css']
})
export class BrandsFormComponent {
  showForm: boolean = true;
  brand: Brand = { id: 0 };
  errorMessage: string = '';
  showError: boolean = false;
  categories: Array<Brand> = [];
  params: any;


  url = 'http://localhost:8080/api';

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.params = params);

    this.findBrandById(this.params.params.id);

  }

  save() {
    if (this.brand.id == null || this.brand.brandname == '') {
      this.errorMessage = 'complete todos los datos';
      this.showError = true;
      console.log(this.showError);
      return;
    }
    console.log(this.brand);

    const body = this.brand;

    if (this.brand.id == 0) {
      this.http.post<any>(`${this.url}/marcas`, body)
        .subscribe({
          next: resp => {
            console.log(resp);
            this.brand = resp.brand;
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

      this.http.put<any>(`${this.url}/marcas`, body)
        .subscribe({
          next: resp => {
            console.log(resp);
            this.brand = resp.brand;
            this.errorMessage = "Marca Actualizado";
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


  findBrandById(id: number) {
    if (id > 0) {
      this.http.get<any>(`${this.url}/marcas/${id}`)
        .subscribe({
          next: resp => {
            console.log(resp.ok, resp.status)

            console.log(resp);
            this.brand = resp;
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
