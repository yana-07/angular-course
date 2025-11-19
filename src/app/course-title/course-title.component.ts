import { Component, Input } from '@angular/core';

@Component({
  selector: 'course-title',
  templateUrl: './course-title.component.html',
  styleUrl: './course-title.component.css',
  standalone: false
})
export class CourseTitleComponent {
  @Input() title: string;
}
