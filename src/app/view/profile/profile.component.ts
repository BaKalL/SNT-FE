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

  deleteIdTmp: any;

  tmpArr: Array<any>;

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

  changeFollowStatus(userId) {
    this.friends.find(friend => {
      console.log('ID: ', friend.id);
      console.log('param: ', userId);
      if (friend.id === userId) {
        if (friend.status.follow === 'true') {
          friend.status.follow = 'false';
        } else {
          friend.status.follow = 'true';
        }
        
      }
    });
  }

  changeBlockStatus(userId) {
    this.friends.find(friend => {
      if (friend.id === userId) {
        if (friend.status.block === 'true') {
          friend.status.block = 'false';
        } else {
          friend.status.block = 'true';
        }
        
      }
    });
  }

  setDeleteTmpId (id) {
    this.deleteIdTmp = id;
  }

  confirmUnfriend(event) {
    const result = this.friends.findIndex(friend => {
      return friend.id === this.deleteIdTmp;
     });

     this.friends.splice(result,1);

     this.deleteIdTmp = null;
    
     event.dialog.close();
  }

  confirmLeaveGroup(event) {
    const result = this.groups.findIndex(friend => {
      return friend.id === this.deleteIdTmp;
     });

     this.groups.splice(result,1);

     this.deleteIdTmp = null;
    
     event.dialog.close();
  }

  ngOnInit() {
  }

}
