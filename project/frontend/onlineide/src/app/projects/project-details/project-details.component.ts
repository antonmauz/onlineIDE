import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectDetailsService } from '../../services/project-details.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
})
export class ProjectDetailsComponent {
  // projectId: string;
  projectDetails: any;

  constructor(
    private route: ActivatedRoute,
    private projectDetailsService: ProjectDetailsService
  ) {
    // this.projectId = this.route.snapshot.paramMap.get('id');
    this.getProjectDetails();
  }

  getProjectDetails() {
    /* this.projectService.getProjectDetails(this.projectId).subscribe(
      (result: any) => {
        this.projectDetails = result;
      },
      (error: any) => {
        console.error('Error fetching project details:', error);
      }
    );*/
  }
}
