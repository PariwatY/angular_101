import { Component } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  detailCreated = false;
  detail = 'Yeah!!!';
  log:any = [];

  onCreateDetail() {
    this.detailCreated = !this.detailCreated;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

}
