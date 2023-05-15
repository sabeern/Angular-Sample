import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  title1: string = 'This is a post component';
  postMessage: string = 'This is comming from post component';
  childMessage: string = 'This is a message from child post';
  @Input() fromParent!: string;
  @Input() personObj: any;
  constructor() {}
  ngOnInit(): void {}
}
