import { AfterViewInit, Component, ElementRef, Query, QueryList, TrackByFunction, ViewChild, ViewChildren } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements AfterViewInit {
    courses = COURSES;
    startDate = new Date();
    @ViewChild(CourseCardComponent) card: CourseCardComponent;
    @ViewChild(CourseCardComponent, { read: ElementRef }) cardRef1: ElementRef<CourseCardComponent>;
    @ViewChildren(CourseCardComponent) cards: QueryList<CourseCardComponent>;
    @ViewChild('card', { read: ElementRef }) cardRef2: ElementRef<CourseCardComponent>;
    @ViewChild('demoDiv') demoDiv: ElementRef<HTMLDivElement>;
    
    onCourseSelected(course: Course) {
        //console.log("Course selected: ", course);
        console.log(this.card);
        console.log(this.cardRef1);
        console.log(this.cardRef2);
        console.log(this.demoDiv);
    }

    ngAfterViewInit() {
        console.log('Card component instance: ', this.card);
        console.log(this.cards);

        this.cards.changes.subscribe(cards => console.log(cards));
    }
    
    clickHandler() { 
        console.log("Click event handled!"); 
    }
    
    trackCourse: TrackByFunction<Course> = (index: number, course: Course) => course.id;

    onCoursesEdit() {
        this.courses.push(
            {
                id: 11,
                description: "New Course",
                iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
                longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
                category: 'INTERMEDIATE',
                lessonsCount: 10
            }
        );
        // this.courses = [...this.courses,  {
        //         id: 11,
        //         description: "New Course",
        //         iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
        //         longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
        //         category: 'INTERMEDIATE',
        //         lessonsCount: 10
        //     }];
    }
}
