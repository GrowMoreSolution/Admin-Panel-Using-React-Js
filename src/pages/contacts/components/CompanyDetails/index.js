import React from 'react'
import Google from '../../../../assets/img/google.png'
import { HiOutlineMail } from 'react-icons/hi'
import { BsTelephone } from 'react-icons/bs'

function CompanyDetails() {
  return (
    <div className="p-4">
      <p className="text-md font-semibold">Company</p>
      <div className="mt-4 flex items-center">
        <div className="bg-gray-100 w-fit h-fit p-1 rounded-2xl">
          <img src={Google} alt="" />
        </div>
        <div className="text-sm ml-4">
          <p>Google inc.</p>
          <p className="text-gray-400">google.com</p>
        </div>
      </div>
      <div className="border border-gray-200 rounded-md p-3 mt-4">
        <div className="flex items-center gap-4 mb-2 lg:text-sm">
          <HiOutlineMail />
          <p>emailkuyahut@gmail.com</p>
        </div>
        <div className="flex items-center gap-4 lg:text-sm">
          <BsTelephone />
          <p>(405) 555-0128</p>
        </div>
      </div>
    </div>
  )
}

export default CompanyDetails
