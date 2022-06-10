import { Component, OnInit } from '@angular/core';
import { Course } from '../courses.class';
import { COURSES } from '../test-course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']

})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  course: Course = {course_id: '1', course_title: 'Web Development',semester: 'One', 
                      lecturer:'Dr. Jian Yu', period: 'Wednesday 4-6pm'};

                      courses= COURSES;
  
                      selectedCourse!: Course;   
                      onSelect(course: Course): void { this.selectedCourse = course; }
 
}


