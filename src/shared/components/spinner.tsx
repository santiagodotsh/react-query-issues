import { FiRefreshCcw } from 'react-icons/fi'

export function Spinner() {
  return (
    <div className='loading'>
      <div className='animate-spin'>
        <FiRefreshCcw size={30} />
      </div>
    </div>
  )
}