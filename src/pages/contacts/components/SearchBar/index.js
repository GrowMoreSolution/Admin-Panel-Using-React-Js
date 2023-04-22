import { BsSearch } from 'react-icons/bs'

function SearchBar() {
  return (
    <div className="relative mb-4">
      <input
        type="text"
        placeholder="Search activity, notes, email and more"
        className="border-b border-gray-300 rounded-none px-4 py-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <BsSearch className="text-gray-400" />
      </div>
    </div>
  )
}

export default SearchBar
