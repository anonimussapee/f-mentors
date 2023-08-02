
import { createPortal } from 'react-dom'
const Modal = ({children}) => {
  return createPortal(
    
    <div className='modal  h-[50vh] '>
      <div className='w-[80%] mx-auto flex flex-col items-center gap-3'>
        {children}
      </div>
    </div>, document.getElementById('portal')
  )
}
export {Modal}