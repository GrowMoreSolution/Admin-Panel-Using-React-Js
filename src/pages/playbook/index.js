import React, { useState } from 'react'
import { RxCaretDown, RxCaretUp } from 'react-icons/rx'
import { MdAdd } from 'react-icons/md'

function Playbook() {
  const [isOpen, setIsOpen] = useState(false)

  const openPortal = () => {
    setIsOpen((prevValue) => !prevValue)
  }
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <div className="font-semibold">Playbook</div>
        </div>
        <div>
          {isOpen && (
            <div className="flex text-sm items-center cursor-pointer" onClick={openPortal}>
              <p>Close</p>
              <RxCaretUp />
            </div>
          )}
          {!isOpen && (
            <div className="flex text-sm items-center cursor-pointer" onClick={openPortal}>
              <p>View</p>
              <RxCaretDown />
            </div>
          )}
        </div>
      </div>
      {isOpen && (
        <>
          <div className="border border-gray-200 flex justify-center items-center mt-4 rounded-md p-2 gap-2 cursor-pointer">
            <MdAdd />
            <div className="lg:text-sm">Create new deal</div>
          </div>
          <div className="border border-gray-200 flex flex-col mt-4 rounded-md py-2 px-4 gap-2 cursor-pointer">
            <div className="flex justify-between items-center">
              <p className="text-gray-400 text-[10px] lg:text-[9px]">Clossing date: 18 Jan 2021</p>
              <p className="text-blue-800 bg-blue-50 rounded-2xl px-2 text-[10px] lg:text-[9px]">Contract Sent</p>
            </div>
            <div className="text-base font-semibold">
              <p>Web Development</p>
              <p>$120,000</p>
            </div>
          </div>
          <div className="border border-gray-200 flex flex-col mt-4 rounded-md py-2 px-4 gap-2 cursor-pointer">
            <div className="flex justify-between items-center">
              <p className="text-gray-400 text-[10px] lg:text-[9px]">Clossing date: 18 Jan 2021</p>
              <p className="text-blue-800 bg-blue-50 rounded-2xl px-2 text-[10px] lg:text-[9px]">Contract Sent</p>
            </div>
            <div className="text-base font-semibold">
              <p>Web Development</p>
              <p>$120,000</p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Playbook
