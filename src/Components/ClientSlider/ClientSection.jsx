import React from 'react'
import ClientSlider from './ClientSlider'
import ClientContent from './ClientContent'

const ClientSection = () => {
  return (
    <div className='w-[90%] max-w-6xl mx-auto min-h-screen py-10 grid grid-cols-1 lg:grid-cols-3 place-items-center gap-5'>
      <ClientContent />
      <ClientSlider />
    </div>
  )
}

export default ClientSection
