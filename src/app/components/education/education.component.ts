import { Component, OnInit } from '@angular/core';
import educationJSONFile from '../../../assets/educationJSON.json';
declare var educationJSON: any;
declare var self: any;
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  
  constructor() { 
    self = this
    
  }

  ngOnInit() {
    self.educationJSON = educationJSONFile.education
  }

}