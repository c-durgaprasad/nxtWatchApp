import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import ThemeChange from './context/ThemeChange'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItem from './components/VideoItem'
import './App.css'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
// Replace your code here
class App extends Component {
  state = {isDark: false, activeTab: 'Home', savedList: []}

  changeTheme = () => {
    this.setState(prevState => ({
      isDark: !prevState.isDark,
    }))
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  addVideoToList = video => {
    const {savedList} = this.state
    const videoCheck = savedList.find(item => item.id === video.id)
    if (videoCheck) {
      this.setState(prev => ({savedList: [...prev.savedList]}))
    } else {
      this.setState(prev => ({savedList: [...prev.savedList, video]}))
    }
  }

  render() {
    const {isDark, activeTab, savedList} = this.state
    return (
      <ThemeChange.Provider
        value={{
          isDark,
          changeTheme: this.changeTheme,
          activeTab,
          changeTab: this.changeTab,
          addVideoToList: this.addVideoToList,
          savedList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/videos/:id" component={VideoItem} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeChange.Provider>
    )
  }
}

export default App
