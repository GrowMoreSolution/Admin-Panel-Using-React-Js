import React, { useState } from 'react'
import { RxCaretDown } from 'react-icons/rx'

function Tabs() {
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  function activeTab(index) {
    setActiveTabIndex(index)
  }

  return (
    <>
      <div className="flex sm:flex-row flex-col justify-between relative my-4 bg-[#eaeef6] rounded-md text-sm">
        {['Activity', 'Notes', 'Emails', 'Calls', 'Task', 'Meetings'].map((tab, index) => (
          <div key={index} className={`py-2 px-4 m-1 cursor-pointer ${activeTabIndex === index ? 'bg-white rounded-md font-bold shadow z-10' : ''}`} onClick={() => activeTab(index)}>
            <p>{tab}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-2 mb-4">
        <div className="bg-white py-2 px-4 md:text-md text-xs rounded-md flex items-center gap-4">
          <p>Filter Activity 21/25</p>
          <RxCaretDown />
        </div>
        <div className="bg-white py-2 px-4 md:text-md text-xs rounded-md flex items-center gap-4">
          <p>All user</p>
          <RxCaretDown />
        </div>
      </div>
      <div className="font-semibold mb-4 ml-2">
        <h1>Upcoming Activity</h1>
      </div>
    </>
  )
}

export default Tabs
