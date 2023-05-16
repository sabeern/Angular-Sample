import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  @Input() fromPostList!: string;
  imgUrl: string =
    'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-36703721.jpg';
  isColor: boolean = true;
  userText: string = 'Two way';
  clickFunction() {
    console.log('Clicked the button');
  }
  keyupFunction(val: string) {
    console.log(val);
  }
  onKeyup() {
    console.log(this.userText);
  }
}
