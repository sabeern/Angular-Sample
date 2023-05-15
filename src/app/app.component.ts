import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title: string = 'hello-world';
  parentMessage: string = 'This is a message from parent component';
  message: string;
  obj = {
    name: 'Sabeer',
    place: 'Malappuram',
    job: 'MERN Stck Developer',
  };
  @ViewChild(PostComponent) childPost: any;
  constructor() {
    this.message = '';
    console.log(this.childPost);
  }
  ngAfterViewInit() {
    console.log(this.childPost);
    this.message = this.childPost.childMessage;
  }
}
