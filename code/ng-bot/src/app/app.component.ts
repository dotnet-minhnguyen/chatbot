import { Component } from '@angular/core';
// import Amplify from 'aws-amplify';
// Amplify.configure({
//   Auth: {
//     identityPoolId: 'us-east-1:0f01abc6-1ff3-4bb0-af35-188cda10d921',
//     region: 'us-east-1',
//     userId: 'gp37ifblmpeb6iu0n3898lutq'
//   },
//   Interactions: {
//     bots: {
//       OntrackBot: {
//         name: 'OntrackBot',
//         alias: '$LATEST',
//         region: 'us-east-1',
//       },
//     }
//   }
// });

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'chatapp';
}
