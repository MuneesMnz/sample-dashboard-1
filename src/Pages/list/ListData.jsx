import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Datatable from '../../components/Datatable/Datatable'

const ListData = () => {
  return (
    <div className='flex w-full '>
      <Sidebar />
      <div className='flex-[6]'>
        <Navbar />
        <Datatable />
      </div>
    </div>
  )
}

export default ListData
