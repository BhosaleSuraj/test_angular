import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Api } from './services/api';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_test');

   constructor(private api: Api) {}
data: any;
  ngOnInit() {
    this.api.getTest().subscribe({
      next: (res) => {
        console.log('API Response:', res);
        this.data = res;
      },
      error: (err) => {
        console.error('API Error:', err);
      }
    });
  }
}
