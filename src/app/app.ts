import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Api } from './services/api';
import { JsonPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JsonPipe, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_test');

  constructor(private api: Api) { }
  data: any;
  users: any[] = [];
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


    // ✅ API 2
    this.api.getUsers().subscribe({
      next: (res: any) => {
        console.log('Users API:', res);
        this.users = res;
      },
      error: (err) => {
        console.error('Users API Error:', err);
      }
    });
  }



}
