import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpeg',
      userName: 'nature',
      content: 'I say this neat tree today'
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpeg',
      userName: 'mountainLover',
      content: 'Here is a picture of a snowy mountain'
    },
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/biking.jpeg',
      userName: 'biking12222',
      content: 'I did some biking today'
    },
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/biking.jpeg',
      userName: 'biking12222',
      content: 'I did some biking today'
    }
  ]
}
