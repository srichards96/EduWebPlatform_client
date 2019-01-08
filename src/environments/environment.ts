// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  
  apiUrl: 'http://localhost/EduWebPlatform_api/',
  routeParams: {
    // Content related.
    subjectid: 'subjectid',
    topicid: 'topicid',
    lessonid: 'lessonid',
    testid: 'testid'
  },
  routes: {
    // *** CONTENT RELATED ***
    // SUBJECTS
    subjectSelect: 'subjects',
    subjectHome: 'subjects/:subjectid',
    subjectNews: 'subjects/:subjectid/news',

    topicSelect: 'subjects/:subjectid/topics',

    // TOPICS
    topicHome: 'subjects/:subjectid/topics/:topicid',
    // LESSONS / TESTS
    lessonHome: 'subjects/:subjectid/topics/:topicid/lessons/:lessonid',
    testHome: 'subjects/:subjectid/topics/:topicid/tests/:testid',
    // *** END OF CONTENT RELATED ***
    
    // USERS
    account_signIn: 'users/signin',
    account: 'users/account'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
