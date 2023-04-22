import React, { useState } from 'react'
import left_arrow from '../../../assets/img/left-arrow.png'
import profile_pic from '../../../assets/img/profile_pic.png'
import Google from '../../../assets/img/google.png'
import Plus from '../../../assets/img/plus.png'
import Mail from '../../../assets/img/mail.png'
import Call from '../../../assets/img/phone-call.png'
import Menu from '../../../assets/img/option.png'

const Company = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const [isContact, setIsContact] = useState(true)

  function handleTabClick(index) {
    index === 0 ? setIsContact(true) : setIsContact(false)
    setActiveTabIndex(index)
  }
  return (
    <div className="w-full bg-white shadow-indigo-500/40 p-10">
      <div className="flex gap-3 items-center">
        <button className="border border-inherit rounded-full w-8 h-8 flex items-center justify-center">
          <img src={left_arrow} alt="" width="10px" />
        </button>
        <h1 className="text-base font-semibold">Back to loads</h1>
      </div>
      <div className="text-center mt-10">
        <img src={profile_pic} alt="" width="80px" className="mx-auto" />
        <h1 className="text-lg font-bold mt-2">jonita gandhi</h1>
        <div className="flex gap-2 items-center justify-center mt-3">
          <img src={Google} alt="" className="w-4 h-4" />
          <p className="text-lg font-medium text-slate-400">Google</p>
        </div>
      </div>
      <div className="flex gap-5 items-center justify-center mt-5">
        <div className="text-center">
          <button className="border border-inherit rounded-full w-8 h-8 flex items-center justify-center hover:bg-slate-200">
            <img src={Plus} alt="" width="10px" />
          </button>
          <p className="text-sm font-medium text-slate-400">Log</p>
        </div>
        <div className="text-center">
          <button className="border border-inherit rounded-full w-8 h-8 flex items-center justify-center hover:bg-slate-200">
            <img src={Mail} alt="" width="15px" />
          </button>
          <p className="text-sm font-medium text-slate-400">Mail</p>
        </div>
        <div className="text-center">
          <button className="border border-inherit rounded-full w-8 h-8 flex items-center justify-center hover:bg-slate-200">
            <img src={Call} alt="" width="15px" />
          </button>
          <p className="text-sm font-medium text-slate-400">Call</p>
        </div>
        <div className="text-center">
          <button className="border border-inherit rounded-full w-8 h-8 flex items-center justify-center hover:bg-slate-200">
            <img src={Menu} alt="" width="15px" />
          </button>
          <p className="text-sm font-medium text-slate-400">Menu</p>
        </div>
      </div>
      <button className="w-full mt-5 bg-orange-600 hover:bg-orange-500 duration-300 text-white p-4 rounded-md text-md xl:text-lg font-medium">Convert to contact</button>
      <div className="mt-5">
        <div className="border-b border-gray-200 mb-4 w-fit">
          <ul className="flex -mb-px" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
            <li className="mr-2" role="presentation" onClick={() => handleTabClick(0)}>
              <button
                className={`inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center ${
                  activeTabIndex === 0 ? 'border-b-2 border-black' : ''
                }`}
              >
                Leads info
              </button>
            </li>
            <li className="mr-2" role="presentation" onClick={() => handleTabClick(1)}>
              <button
                className={`inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center ${
                  activeTabIndex === 1 ? 'border-b-2 border-black' : ''
                }`}
              >
                Address info
              </button>
            </li>
          </ul>
        </div>
        {isContact ? (
          <>
            <div className="mt-3">
              <label className="text-gray-500">Email</label>
              <p className="font-medium">emailkuyahut@gmail.com</p>
            </div>
            <div className="mt-3">
              <label className="text-gray-500">Phone</label>
              <p className="font-medium">(450) 555-0128</p>
            </div>
            <div className="mt-3">
              <label className="text-gray-500">Lead owner</label>
              <p className="font-medium">Esther Howard</p>
            </div>
            <div className="mt-3">
              <label className="text-gray-500">Job Title</label>
              <p className="font-medium">Content Writer</p>
            </div>
            <div className="mt-3">
              <label className="text-gray-500">Annual revenuew</label>
              <p className="font-medium">$ 5,000</p>
            </div>
            <div className="mt-3">
              <label className="text-gray-500">Lead source</label>
              <p className="font-medium">Online store</p>
            </div>
          </>
        ) : (
          <>
            <div className="mt-3">
              <label className="text-gray-500">Email</label>
              <p className="font-medium">emailkuyahut@gmail.com</p>
            </div>
            <div className="mt-3">
              <label className="text-gray-500">Phone</label>
              <p className="font-medium">(450) 555-0128</p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Company
