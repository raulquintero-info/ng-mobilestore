import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NavPage } from 'src/app/contexts/backoffice/catalogs/products/products-list/nav-page';

@Component({
  selector: 'app-page-bar',
  templateUrl: './page-bar.component.html',
  styleUrls: ['./page-bar.component.css']
})
export class PageBarComponent {

  @Input() navigation: NavPage = {} as NavPage;
  @Output() setNewPage = new EventEmitter<number>();
  leftButtons = [];
  rightButtons = []
  previousPageBtnClass = '';
  nextPageBtnClass = '';

  changePageBtn(newPage: number) {
    // console.log('first', this.navigation);
    // this.previousPageBtnClass = this.navigation.first ? 'disabled' : '';
    // this.nextPageBtnClass = this.navigation.last ? 'disabled' : '';
    this.setNewPage.emit(newPage)
  }

  generateButtons(){

  }

}
