import React from 'react'

const Home = () => {
  return (
    <div className='flex sm:h[450px] md:h[550px] rounded-lg overflow-hidden bg-gray-400/20 bg-clip-padding backdrop-filter backdrop-blur-lg'>
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default Home