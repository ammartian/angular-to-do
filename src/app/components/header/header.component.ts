import { Component, OnInit } from '@angular/core';
import { UIService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task tracker';
  showAddTask: boolean = false; //What if we dont set a initial value?
  subscription: Subscription;

  constructor(private uiService: UIService, private router:Router) {
    // Changing the color of the button by changing the value
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {
  }

  toggleAddTask() {
    this.uiService.toggleAddTask(); // When click, it will call the UIService
  }

  hasRoute(route: string) {
    return this.router.url == route;
  }

}
