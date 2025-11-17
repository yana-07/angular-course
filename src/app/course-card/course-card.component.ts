import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { Course } from '../model/course';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
  standalone: false
})
export class CourseCardComponent implements AfterViewInit, AfterContentInit {
  @Input({required: true}) course: Course;
  @Input({required: true}) index: number;
  @Input() noImageTpl: TemplateRef<any>;
  @Output('courseSelected') courseEmitter = new EventEmitter<Course>();
  @ContentChild(CourseImageComponent) imageRef: CourseCardComponent;

  onCourseViewed() {
    this.courseEmitter.emit(this.course);
  }

  ngAfterViewInit() {
    //console.log(this.imageRef);
  }

  ngAfterContentInit() {
    console.log(this.imageRef);
  }

  cardClasses() {
    // return {
    //   beginner: this.course.category == 'BEGINNER'
    // };

    //if (this.course.category == 'BEGINNER') return 'beginner';

    return this.course.category == 'BEGINNER' ? 'beginner' : '';
  }

  cardStyles() {
    return {
      'text-decoration': 'underline'
    };
  }
}
