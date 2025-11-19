import {ChangeDetectorRef, Component, Inject, InjectionToken, Injector, OnInit} from '@angular/core';
import { createCustomElement } from '@angular/elements';
import {Course} from './courses/model/course';
import { HttpClient } from '@angular/common/http';
import { CoursesService } from './courses/courses.service';
import { APP_CONFIG_TOKEN, AppConfig } from './config';
import { CourseTitleComponent } from './course-title/course-title.component';

function coursesServiceProvider(http: HttpClient): CoursesService {
  return new CoursesService(http);
}

export const COURSES_SERVICE = new InjectionToken<CoursesService>('COURSES_SERVICE');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
  // providers: [
  //   {
  //     // provide: COURSES_SERVICE, 
  //     // useFactory: coursesServiceProvider, 
  //     // deps: [HttpClient]
  //   },
  // ]
  // providers: [
  //   {
  //     provide: CoursesService,
  //     useClass: CoursesService
  //   }
  // ]
  //providers: [CoursesService]
  // providers: [
  //   {
  //     provide: APP_CONFIG_TOKEN,
  //     useValue: APP_CONFIG,
  //     //useFactory: () => APP_CONFIG
  //   }
  // ],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  //$courses: Observable<Course[]>;
  courses: Course[];// = COURSES;
  coursesTotal: number;

  constructor(/*@Inject(COURSES_SERVICE)*/ private coursesService: CoursesService,
    @Inject(APP_CONFIG_TOKEN) private config: AppConfig,
    private cd: ChangeDetectorRef,
    private injector: Injector
  ) {
    console.log(config);
  }

  // ngDoCheck() {
  //   console.log('DoCheck called');
  //   this.cd.markForCheck();
  // }

  ngOnInit() {
    //this.$courses = this.coursesService.loadCourses();
    this.coursesService.loadCourses().subscribe(courses => {
      this.courses = courses;
      this.coursesTotal = courses.length;
      //this.cd.markForCheck();
    });

    const htmlElement = createCustomElement(CourseTitleComponent, {injector: this.injector});
    customElements.define('course-title', htmlElement);

    //console.log('Coursesservice created ' + this.coursesService.id);
  }

  onCourseChanged(updatedCourse: Course) {
    this.coursesService.saveCourse(updatedCourse).subscribe();
  }

  updateCourse() {
    // const newCourse = {
    //   ...this.courses[0],
    //   description: 'Angular Updated'
    // };

    // this.courses[0] = newCourse;

    const newCourse: Course = {
      ...this.courses[1],
      category: 'ADVANCED'
    };

    this.courses = [
      ...this.courses.filter(course => course.id !== newCourse.id),
      newCourse
    ];
  }
}
