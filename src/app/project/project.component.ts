import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  // menulists=['home','Team']
  // selectedlist:any
  constructor() { }

  ngOnInit(): void {
    // this.selectedlist=this.menulists[0]
  }

  // open(menulist:any){
  //   this.selectedlist=menulist
  // }
}
