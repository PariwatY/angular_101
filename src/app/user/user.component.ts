import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userName = '';
  isUserNameEmpty = false;
  checkUserNameEmpty() {
    if (this.userName === ''){
      return true;
    }else{
      return false;
    }
  }

  onClickUserNameBtn(){
    this.userName = '';
  }


}
