import React, { useState, useEffect } from 'react'

import { onAuthStateChanged } from 'app/utils'
import LoggedIn from 'app/LoggedIn'
import LoggedOut from 'app/LoggedOut'

export default function App() {
  const [auth, setAuth] = useState(false);
  const [authAttempted, setAuthAttempted] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth => {
      setAuthAttempted(true);
      if (auth) {
        setAuth(true);
      } else {
        setAuth(false);
      }
    });
  });

  if (!authAttempted) {
    return <p>Authenticating...</p>
  }

  return (
    <div className="Layout">
      {auth ? <LoggedIn auth={auth} /> : <LoggedOut />}
    </div>
  )
}
