
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'
import Buttons from './Buttons/Buttons'

const App = () => {
  return (
    <div>
<Buttons/>
  <Routes>
<Route path='/create-post' element={<CreatePost/>}/>
<Route path='/feed' element={<Feed/>}/>
  </Routes>
       
    </div>
)
}

export default App


