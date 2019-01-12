import { Component, OnInit } from '@angular/core';
import { SiteService } from '../../../services/site.service';

import { Subject } from '../../../classes/Subject';
import { environment } from '../../../../environments/environment';
import { AuthService, SocialUser } from 'angularx-social-login';
import { SignInService } from 'src/app/services/sign-in.service';

@Component({
  selector: 'app-p-header',
  templateUrl: './p-header.component.html',
  styleUrls: ['./p-header.component.css']
})
export class PHeaderComponent implements OnInit {

  private routes: object;
  // store current subject / user as these can change appear of header.
  private subject$: Subject = null;
  private user$: SocialUser = null;
  private isAdmin$: boolean = false;



  constructor(
    private site: SiteService,
    private signIn: SignInService
  ) { }

  ngOnInit() {
    // Store routes for easy use. (used when getting routerLink urls)
    this.routes = environment.routes;

    // Subscribe to current subject. (header changes when in / not in a subject)
    this.site.subject().subscribe((subject) => {
      this.subject$ = subject;
    })

    // Subscribe to user logged in state. (changes Sign In to Account. Also adds Admin if appropriate (NOT IMPLEMENTED))
    this.signIn.user().subscribe((user) => {
      this.user$ = user;
    });
    // Subscribe to user admin status.
    this.signIn.userIsAdmin().subscribe((isAdmin) => {
      this.isAdmin$ = isAdmin;
    })
  }





  /**
   * Clears currently selected subject. Sets SiteService subject to null, which updates the header.
   */
  private clearSubject(): void {
    this.site.clearSubject();
    this.site.redirect(environment.routes.subjectSelect);
  }

  /**
   * Gets route for routerLink. Replaces route param keyword such as :subjectid with corresponding value.
   * @param route 
   */
  private getRoute(route: string): string {
    // Replace url parameters (':name') with corresponding values.
    // Subjectid.
    if (this.subject$ != null) {
      route = route.replace(`:${environment.routeParams.subjectid}`, this.subject$.id.toString());
    }
    return route;
  }


}
