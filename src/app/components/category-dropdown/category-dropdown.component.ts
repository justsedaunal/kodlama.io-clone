import { Component, OnInit } from '@angular/core';

import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-category-dropdown',
  templateUrl: './category-dropdown.component.html',
  styleUrls: ['./category-dropdown.component.css']
})
export class CategoryDropdownComponent implements OnInit {

  faCaretDown = faCaretDown;


  constructor() { }

  ngOnInit(): void {
  }

}
