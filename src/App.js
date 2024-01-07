import { useState } from 'react'
import './assets/App.css';
import { loadUserProfile } from './helpers/user.js'
import Profile from './components/Profile'
import Button from './components/Button'

function App() {
  const [userProfileData, setUserProfileData] = useState(null)
  const [loadingProfile, setLoadingProfile] = useState(null)

  async function loadProfile() {
    setLoadingProfile(true)
    setUserProfileData(await loadUserProfile())
    setLoadingProfile(false)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome To Random User Info</h1>
        <Button text="Click to load a random user profile" className="btn-green" onClick={loadProfile} loading={loadingProfile} />
        <Profile profile={userProfileData} />
      </header>
    </div>
  );
}

export default App;
