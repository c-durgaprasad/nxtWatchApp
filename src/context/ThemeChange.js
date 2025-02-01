import React from 'react'

const ThemeChange = React.createContext({
  isDark: false,
  changeTheme: () => {},
  activeTab: 'Home',
  changeTab: () => {},
  savedList: [],
  addVideoToList: () => {},
  removeVideo: () => {},
})

export default ThemeChange
