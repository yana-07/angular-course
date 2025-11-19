import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Attribute,
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    DoCheck,
    ElementRef,
    EventEmitter,
    Inject,
    Input,
    OnChanges,
    OnInit,
    Output,
    QueryList,
    SimpleChanges,
    ViewEncapsulation
} from '@angular/core';
import {Course} from '../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';
import { CoursesService } from '../courses.service';
import { COURSES_SERVICE } from '../../app.component';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    standalone: false,
    //providers: [CoursesService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent implements OnInit,
    OnChanges, AfterContentChecked, AfterViewChecked,
    AfterContentInit, AfterViewInit, DoCheck {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    // @Input()
    // type: string;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();


    constructor(/*@Inject(COURSES_SERVICE)*/ private coursesService: CoursesService,
        @Attribute('type') private type: string
    ) {
        console.log('CoursesService created ' + this.coursesService.id);
    }
    
    ngOnChanges(changes: SimpleChanges) {
        console.log('OnChanges called ', changes);
    }
    
    ngOnInit() {
        console.log('OnInit called');
    }

    ngDoCheck() {
        console.log('DoCheck called');
    }

    ngAfterContentInit() {
        console.log('AfterContentInit called');
    }

    ngAfterViewInit() {
        console.log('AfterViewInit called');
    }

    ngAfterContentChecked() {
        console.log('AfterContentChecked called');
    }

    ngAfterViewChecked() {
        console.log('AfterViewChecked called');
    }
    
    onSaveClicked(description:string) {

        this.courseEmitter.emit({...this.course, description});

    }

    onTitleChanged(newTitle: string) {
        this.course.description = newTitle;
    }


}
