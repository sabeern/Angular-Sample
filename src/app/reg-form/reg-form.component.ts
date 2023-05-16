import { Component } from '@angular/core';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css'],
})
export class RegFormComponent {
  postTitle: string = '';
  postDescription: string = '';
  imageUrl: string = '';
  websiteUrl: string = '';
  isBackground: boolean = false;
}
