import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

// index.js 에서 이미 해줬음:
// import { Amplify } from 'aws-amplify';
// import awsExports from './aws-exports';
// Amplify.configure(awsExports);

function App({ isPassedToWithAuthenticator, signOut, user }) {
  if (!isPassedToWithAuthenticator) {
    // throw new Error(`isPassedToWithAuthenticator was not provided`);
    // return (
    //   <div>
    //     isPassedToWithAuthenticator was not provided
    //   </div>
    // )
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from V3</h1>
        <h1>Hello {user.username}</h1>
        <button onClick={signOut}>Sign out</button>
      </header>
      asfadsf
    </div>
  );
}

export default withAuthenticator(App);
