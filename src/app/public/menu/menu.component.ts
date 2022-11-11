import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public status:boolean = false;
  public scroll:any
  constructor() { }

  ngOnInit(): void {
    window.addEventListener("scroll", ()=>{
      this.scroll = window.scrollY > 100;
    });
  }

  show() {
    this.status = !this.status
  }
  hide() {
    this.status = false;
  }

}
