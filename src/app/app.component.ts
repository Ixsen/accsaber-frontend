import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SignUpComponent } from './core/pages/sign-up/sign-up.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'accsaber-frontend';

  links = [
    { linkName: 'Leaderboard', linkPath: '/leaderboard' },
    { linkName: 'Ranked Maps', linkPath: '/ranked-maps' },
    { linkName: 'Weekly Challenge (soon)', linkPath: '/weekly-challenge', disable: true },
    { linkName: 'Staff Login (soon)', linkPath: '/staff-login', disable: true },
  ];

  constructor(private dialog: MatDialog) {}

  showSignupDialog(): void {
    const config: MatDialogConfig = {
      hasBackdrop: true,
      width: '500px',
    };
    this.dialog.open(SignUpComponent, config);
  }
}
