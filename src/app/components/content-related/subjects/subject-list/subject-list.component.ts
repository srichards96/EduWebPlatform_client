import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/services/site.service';
import { Subject } from 'src/app/classes/Subject';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

  private subjects$: Subject[];


  constructor(private site: SiteService) { }


  ngOnInit() {
    // Get list of subjects.
    this.site.getSubjects()
      .subscribe((subjects) => {
        this.subjects$ = subjects
    });
  }
}