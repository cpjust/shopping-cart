import { Component, OnInit, ViewEncapsulation } from '@angular/core';

export interface IProfileOptions {
  value: string;
}

@Component({
  selector: 'cj-banner',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  isLoggedIn: boolean = true;
  profileOptions: IProfileOptions[] = [{value: "Profile"}, {value: "Change Password"}, {value: "Logout"}];

  constructor() { }

  ngOnInit(): void {
  }

}
