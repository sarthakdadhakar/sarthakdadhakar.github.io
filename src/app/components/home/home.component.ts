import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Typed from 'typed.js';
declare var self: any
declare var userName: String;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  @ViewChild('story', {static: true}) story: ElementRef;
  
  constructor() {
    
   }
  ngOnInit() {
    var story = document.getElementById('story');
    self = this;
    self.userName = "Sarthak Dadhakar";
    self.callMe()

  }
  callMe(){
    document.getElementById('story').innerHTML = '';
    var typed = new Typed(this.story.nativeElement, {
      strings: [
        "Android Development", "Web Development","Machine Learning","Deep Learning","NLP",""
      ],
      typeSpeed: 100,
      loop:true,
      cursorChar: '_',
      onComplete(){
          document.getElementById('story').innerHTML = '';
          
        }
    
    });
  }
}
