
import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'
import RightSidebar from '../components/RightSidebar'
const HomePage = () => {

  const [selectUser, setSelectedUser] = useState(false);

  return (
    <div className=' border w-full h-screen sm:px-[15%] sm:py-[5%] '>
     <div className={`backdrop-blur-x1 border-2 border-gray-600 rounded-2x1 overflow-hidden h-[100%] grid grid-cols-1 relative 
      ${selectUser ? 'md:grid-cols-[1fr_1.5fr_1fr] x1:grid-cols-[1fr_2fr_1fr]' : 'md:grid-cols-2'}`}>
          <Sidebar />
          <ChatContainer selectedUser={selectUser} setSelectedUser={setSelectedUser} />
          <RightSidebar selectedUser={selectUser} setSelectedUser={setSelectedUser} /> 
     </div>
    </div>
  )
}

export default HomePage
