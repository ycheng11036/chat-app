import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400/20 bg-clip-padding backdrop-filter backdrop-blur-lg'>
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default Home