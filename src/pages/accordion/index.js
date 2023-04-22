import { useState } from 'react'
import { BsCalendar4, BsThreeDots } from 'react-icons/bs'
import { RxCaretDown } from 'react-icons/rx'
import { HiOutlineClipboardList } from 'react-icons/hi'

function Accordion() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-4 cursor-pointer" onClick={toggleAccordion}>
      <div className="flex flex-col sm:flex-row justify-between sm:items-center px-4 py-3 bg-white cursor-pointer border-b border-gray-200">
        <div className="flex items-center gap-2">
          <RxCaretDown />
          <div className="rounded-2xl bg-blue-300 p-1">
            <HiOutlineClipboardList className="text-blue-700" />
          </div>
          <h2 className="sm:text-md text-sm font-medium">Task created Esther Howard</h2>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-gray-500 sm:text-md text-sm flex items-center gap-2">
            Due: <BsCalendar4 /> Today, 12:00 PM
          </p>
          <BsThreeDots />
        </div>
      </div>
      <div className="p-4 bg-white">
        <div className="flex items-start mb-4">
          <div className="mr-2">
            <img src="https://source.unsplash.com/random/100x100" alt="Accordion" className="w-6 h-6 object-cover rounded-2xl mr-4" />
          </div>
          <div>
            <h3 className="text-md font-medium">Prepare quote for Jerome Bell</h3>
            <p className="text-gray-500 text-sm">She's is interested in our new product line and wants our very best price. Please include a detailed breakdown of costs.</p>
          </div>
        </div>
        {isOpen && (
          <div className="grid rounded-lg grid-cols-1 md:grid-cols-3 gap-4 border border-gray-200 p-1">
            <div className="p-4">
              <h4 className="text-md mb-2">Reminder</h4>
              <p className="font-medium text-sm flex items-center gap-2">
                No Reminder <RxCaretDown />
              </p>
            </div>
            <div className="p-4 border-l-2 border-gray-200">
              <h4 className="text-md mb-2">Task Priority</h4>
              <p className="font-medium text-sm flex items-center gap-2">
                <span className="bg-red-600 rounded-sm w-4 h-4"></span>High <RxCaretDown />
              </p>
            </div>
            <div className="p-4 border-l-2 border-gray-200">
              <h4 className="text-md mb-2">Assigned to</h4>
              <p className="font-medium text-sm flex items-center gap-2">
                <img src="https://source.unsplash.com/random/100x100" alt="Accordion" className="w-6 h-6 object-cover rounded-2xl" />
                Eshter Howard <RxCaretDown />
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Accordion
