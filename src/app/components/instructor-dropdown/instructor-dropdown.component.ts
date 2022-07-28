import { Component, OnInit } from '@angular/core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-instructor-dropdown',
  templateUrl: './instructor-dropdown.component.html',
  styleUrls: ['./instructor-dropdown.component.css']
})
export class InstructorDropdownComponent implements OnInit {
  faCaretDown = faCaretDown;

  constructor() { }

  ngOnInit(): void {
  }

}
