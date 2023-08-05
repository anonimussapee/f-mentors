import './App.css'
import cardlogo from '../../assets/images/card-logo.svg'
import completeIcon from '../../assets/images/icon-complete.svg'
import { useState } from 'react'
import { Modal } from '../../Components/Modal'

function App() {

  const [cardData, setCardData] = useState({
    CardHolderName:'Jane Appleseed',
    cardNumber:'0000 0000 0000 0000',
    month:'00',
    year:'00',
    cvc:'000',
  })
  const [openModal, setOpenModal] = useState(false)
  const handleChange = (e) =>{
   let name = e.target.name;
   let value = e.target.value;
   setCardData({...cardData, [name]:value})
  }
  const handleSumbit = (e) =>{
    e.preventDefault()
    console.log('formready')
    setOpenModal(true)
  }
  return (
  <section className='container-principal  w-full h-auto'>
    <div className='bg-middle img smMax:w-full sm:w-[70vh] smMax:h-[23rem] sm:h-[100vh] relative z-10'>
      <div className='back-card img w-[288px] h-[16rem] absolute   rounded-xl z-10'>
        <div className='h-full w-full relative'>
          <p className='text-[1.8rem] absolute top-[6.55rem] right-14 text-white font-bold font-space word-space'>{cardData.cvc}</p>
        </div>
      </div>
      <div className='front-card img w-[288px] h-[16rem] absolute rounded-xl z-20'>
        <div className='h-full w-full relative'>
          <img src={cardlogo} alt='logoIMG' className='w-24 h-[3rem] absolute top-10 left-11'/>
          <p className='text-[1.7rem] absolute top-10 right-11 text-white  font-space '>VISA</p>
          <p className='text-[1.8rem] absolute top-[8.5rem] left-11 text-white font-bold font-space word-space'>{cardData.cardNumber}</p>
          <p className='text-[1.7rem] absolute top-[11.5rem] left-11 text-white  font-space '>{cardData.CardHolderName}</p>
          <p className='text-[1.7rem] absolute top-[11.5rem] right-11 text-white  font-space '>{cardData.month}/{cardData.year}</p>
        </div>
      </div>
    </div>
    <div className='relative w-full smMax:h-full sm:h-[100vh] smMax:pb-16 sm:pb-80 flex flex-col justify-center items-center'>
    { openModal ?<Modal>
      <img src={completeIcon} alt="completeIcon" className='w-[8rem]'  />
      <p className='text-[2.5rem] font-medium pt-4'>THANK YOU!</p>
      <p className='text-[1.8rem] text-gray-500 pb-4'>We've added your card details</p>
      <button onClick={()=>setOpenModal(false)} className='bg-[#27083b] text-white font-extrabold text-[1.8rem] p-3 w-[80%] min-w-[200px] max-w-[250px] rounded-xl word-space self-center'>Continue</button>
    </Modal>: <form onSubmit={handleSumbit} className='smMax:w-[90%] sm:w-[60%] max-w-[400px] h-auto mt-28 font-space font-bold flex flex-col gap-5'>
        <label htmlFor="CardHolderName" className='flex flex-col gap-2'>
          <span className='text-[1.6rem]'>CARDHOLDER NAME</span>
          <input required onChange={handleChange} type="text" placeholder='e.g. Jane Appleseed' name='CardHolderName' minLength={3} className='p-3 text-[1.6rem] rounded-xl border-gray-400 border-[.1rem] ' />
        </label>
        <label htmlFor="cardNumber" className='flex flex-col gap-2'>
          <span className='text-[1.6rem]'>CARD NUMBER</span>
          <input required onChange={handleChange} type="text" placeholder='e.g. 1234 5678 9123 0000' name='cardNumber' minLength={19} maxLength={19} className='p-3 text-[1.6rem] rounded-xl border-gray-400 border-[.1rem] ' />
        </label>
        <div className='flex gap-3'>
          <label htmlFor="month" className='flex flex-col gap-2'>
            <span className='text-[1.6rem]'>EXP. DATE</span>
            <input required onChange={handleChange} type="number" placeholder='MM' name='month' className='p-3 text-[1.6rem] rounded-xl border-gray-400 border-[.1rem] w-[9rem]' />
          </label>
          <label htmlFor="year" className='flex flex-col gap-2'>
            <span className='text-[1.6rem]'>(MM/YY)</span>
            <input required onChange={handleChange} type="number" placeholder='YY' name='year' className='p-3 text-[1.6rem] rounded-xl border-gray-400 border-[.1rem] w-[9rem]' />
          </label>
          <label htmlFor="cvc" className='flex flex-col gap-2'>
            <span className='text-[1.6rem]'>CVC</span>
            <input required onChange={handleChange} type="number" placeholder='e.g. 123' name='cvc' className='p-3 text-[1.6rem] rounded-xl border-gray-400 border-[.1rem] w-[9rem]' />
          </label>
        </div>
        <button className='bg-[#27083b] text-white font-extrabold text-[1.8rem] p-3 w-[80%] min-w-[200px] max-w-[250px] rounded-xl word-space self-center'>Confirm</button>
      </form>}
    </div>
  </section>
  )
}

export {App};
