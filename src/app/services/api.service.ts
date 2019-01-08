import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Observable } from 'rxjs';

import { Subject } from '../classes/Subject';
import { Topic } from '../classes/Topic';
import { Post } from '../classes/Posts';
import { Lesson } from '../classes/Lesson';
import { Test } from '../classes/Test';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  // *** GENERAL CONTENT ***
  // SUBJECTS
  /**
   * Gets all subjects.
   */
  public getSubjects(): Observable<Subject[]> {
    return this.http.get(environment.apiUrl + 'subjects') as Observable<Subject[]>;
  }
  /**
   * Get a subject by id.
   * @param subjectId - id of subject.
   */
  public getSubject(subjectId: number): Observable<Subject[]> {
    return this.http.get(environment.apiUrl + `subjects/${subjectId}`) as Observable<Subject[]>;
  }



  // POSTS
  /**
   * Gets posts inside of subject.
   * @param subjectId - id of subject.
   * @param count - number of posts to get.
   * @param offset - number of posts to skip.
   */
  public getPosts(subjectId: number, count: number, offset: number): Observable<Post[]> {
    return this.http.get(environment.apiUrl +
      `subjects/${subjectId}/posts?count=${count}&offset=${offset}`) as Observable<Post[]>;
  }



  // TOPICS
  /**
   * Get all topics inside a subject.
   * @param subjectId - id of subject.
   */
  public getTopics(subjectId: number): Observable<Topic[]> {
    return this.http.get(environment.apiUrl +
      `subjects/${subjectId}/topics`) as Observable<Topic[]>;
  }
  /**
   * Gets a topic by id, inside a subject.
   * @param subjectid - id of subject.
   * @param topicid - id of topic.
   */
  public getTopic(subjectid: number, topicid: number) {
    return this.http.get(
      environment.apiUrl + `subjects/${subjectid}/topics/${topicid}`
    ) as Observable<Topic[]>;
  }



  // LESSONS
  /**
   * Gets all lessons inside a topic, inside a subject.
   * @param subjectid - id of subject.
   * @param topicid - id of topic.
   */
  public getLessons(subjectid: number, topicid: number): Observable<Lesson[]> {
    return this.http.get(environment.apiUrl +
      `subjects/${subjectid}/topics/${topicid}/lessons`) as Observable<Lesson[]>;
  }
  /**
   * Geta lesson by id, inside a topic, inside a subject.
   * @param subjectid - id of subject.
   * @param topicid - id of topic.
   * @param lessonid id of lesson.
   */
  public getLesson(subjectid: number, topicid: number,
    lessonid: number): Observable<Lesson[]> {
    return this.http.get(environment.apiUrl +
      `subjects/${subjectid}/topics/${topicid}
        /lessons/${lessonid}`
    ) as Observable<Lesson[]>;
  }



  // TESTS
  /**
   * Gets all tests inside a topic, inside a subject.
   * @param subjectid - id of subject.
   * @param topicid - id of topic.
   */
  public getTests(subjectid: number, topicid: number): Observable<Test[]> {
    return this.http.get(environment.apiUrl +
      `subjects/${subjectid}/topics/${topicid}/tests`) as Observable<Test[]>;
  }
  public getTest(subjectid: number, topicid: number,
    testid: number): Observable<Test[]> {
    return this.http.get(environment.apiUrl +
      `subjects/${subjectid}/topics/${topicid}
        /tests/${testid}`
    ) as Observable<Test[]>;
  }
  // *** END OF GENERAL CONTENT ***


}
