import { FiRefreshCcw } from 'react-icons/fi'

export function Spinner() {
  return (
    <div className='loading'>
      <div className='flex w-full h-52 justify-center items-center'>
        <FiRefreshCcw className='animate-spin' size={30} />
      </div>
    </div>
  )
}
