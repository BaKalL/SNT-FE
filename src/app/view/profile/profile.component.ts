import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class ObjData {
  constructor(
    public id: string,
    public name: string, 
    public avatar: string
    ) {

  }
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  friends: any;

  groups: any;

  constructor(
    private http: HttpClient
  ) { 
    this.http.get('../../../assets/data/friends.json').subscribe(data => {
      this.friends = data;
    });

    this.http.get('../../../assets/data/groups.json').subscribe(data => {
      this.groups = data;
    });
  }

  ngOnInit() {
  }

}
