import React from 'react'
import HomeLayout from '../../layout/HomeLayout';



const Home:React.FC = () => {
  return (
    <HomeLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <h1>home</h1>
      </div>
    </HomeLayout>
  )
}

export default Home