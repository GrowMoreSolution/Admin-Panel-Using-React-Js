import React, { useEffect } from 'react'
import Company from './components/Company'
import Accordion from '../accordion'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import CompanyDetails from './components/CompanyDetails'
import Deals from '../deals'
import Tickets from '../tickets'
import Attachment from '../attachment'
import Playbook from '../playbook'
import { RxHamburgerMenu } from 'react-icons/rx'

const Contacts = () => {
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        const first = document.getElementById('first')
        first.classList.remove('absolute')
        first.classList.remove('z-[999]')
        first.classList.remove('w-full')
        first.classList.add('hidden')
        const last = document.getElementById('last')
        last.classList.remove('absolute')
        last.classList.remove('z-[999]')
        last.classList.remove('w-full')
        last.classList.add('hidden')
        document.getElementById('lastHamburger').classList.remove('hidden')

        document.getElementById('firstHamburger').classList.remove('hidden')
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleFirst = () => {
    const first = document.getElementById('first')
    first.classList.toggle('hidden')
    first.classList.toggle('absolute')
    first.classList.toggle('z-[999]')
    first.classList.toggle('w-full')
    const last = document.getElementById('last')
    last.classList.remove('absolute')
    last.classList.remove('z-[999]')
    last.classList.remove('w-full')
    last.classList.add('hidden')
    document.getElementById('lastHamburger').classList.toggle('hidden')
  }

  const toggleLast = () => {
    const last = document.getElementById('last')
    last.classList.toggle('hidden')
    last.classList.toggle('absolute')
    last.classList.toggle('z-[999]')
    last.classList.toggle('w-full')
    const first = document.getElementById('first')
    first.classList.remove('absolute')
    first.classList.remove('z-[999]')
    first.classList.remove('w-full')
    first.classList.add('hidden')
    document.getElementById('firstHamburger').classList.toggle('hidden')
  }

  return (
    <>
      <div className="flex w-full bg-slate-100 items-baseline">
        <button className="block lg:hidden mx-2 z-[1000]" onClick={toggleFirst} id="firstHamburger">
          <RxHamburgerMenu />
        </button>
        <div className="bg-gray-100 w-1/4 hidden lg:block" id="first">
          <Company />
        </div>
        <div className="bg-[#f5f7f9] lg:w-2/4 w-full p-4">
          <SearchBar />
          <Tabs />
          <Accordion />
          <Accordion />
          <p className="text-lg font-semibold mb-2">Activity History</p>
          <p className="text-sm">12 December 2021</p>
        </div>
        <button className="block lg:hidden mx-2 z-[1000]" onClick={toggleLast} id="lastHamburger">
          <RxHamburgerMenu />
        </button>
        <div className="bg-white w-1/4 hidden lg:block" id="last">
          <div className="border-b border-gray-200">
            <CompanyDetails />
          </div>
          <div className="border-b border-gray-200">
            <Deals />
          </div>
          <div className="border-b border-gray-200">
            <Tickets />
          </div>
          <div className="border-b border-gray-200">
            <Attachment />
          </div>
          <div className="border-b border-gray-200">
            <Playbook />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contacts
