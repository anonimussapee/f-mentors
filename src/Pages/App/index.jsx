import './App.css'
import cardlogo from '../../assets/images/card-logo.svg'
import { useState } from 'react'

function App() {

  const [cardData, setCardData] = useState({
    CardHolderName:'Jane Appleseed',
    cardNumber:'0000 0000 0000 0000',
    month:'00',
    year:'00',
    cvc:'000'
  })
  const handleChange = (e) =>{
   let name = e.target.name;
   let value = e.target.value;
   setCardData({...cardData, [name]:value})
  }
  const handleSumbit = (e) =>{
    e.preventDefault()
  }
  return (
  <section className='flex flex-col w-full h-auto'>
    <div className='bg-middle img w-full h-[23rem] relative z-10'>
      <div className='back-card img w-[288px] h-[16rem] absolute top-10 right-3  rounded-xl z-10'>
        <div className='h-full w-full relative'>
          <p className='text-[1.8rem] absolute top-[6.55rem] right-14 text-white font-bold font-space word-space'>{cardData.cvc}</p>
        </div>
      </div>
      <div className='front-card img w-[288px] h-[16rem] absolute top-48 right-10 rounded-xl z-20'>
        <div className='h-full w-full relative'>
          <img src={cardlogo} className='w-24 h-[3rem] absolute top-10 left-11'/>
          <p className='text-[1.7rem] absolute top-10 right-11 text-white  font-space '>JDX BANK</p>
          <p className='text-[1.8rem] absolute top-[8.5rem] left-11 text-white font-bold font-space word-space'>{cardData.cardNumber}</p>
          <p className='text-[1.7rem] absolute top-[11.5rem] left-11 text-white  font-space '>{cardData.CardHolderName}</p>
          <p className='text-[1.7rem] absolute top-[11.5rem] right-11 text-white  font-space '>{cardData.month}/{cardData.year}</p>
        </div>
      </div>
    </div>
    <div className='relative bg-gray-100 w-full h-[42rem] flex flex-col items-center'>
      <form onClick={handleSumbit} className='w-[90%] max-w-[400px] h-auto mt-32 font-space font-bold flex flex-col gap-5 '>
        <label htmlFor="CardHolderName" className='flex flex-col gap-2'>
          <span className='text-[1.6rem]'>CARDHOLDER NAME</span>
          <input onChange={handleChange} type="text" placeholder='e.g. Jane Appleseed' name='CardHolderName' className='p-3 text-[1.6rem] rounded-xl border-gray-400 border-[.1rem] ' />
        </label>
        <label htmlFor="cardNumber" className='flex flex-col gap-2'>
          <span className='text-[1.6rem]'>CARD NUMBER</span>
          <input onChange={handleChange} type="text" placeholder='e.g. 1234 5678 9123 0000' name='cardNumber' className='p-3 text-[1.6rem] rounded-xl border-gray-400 border-[.1rem] ' />
        </label>
        <div className='flex gap-3'>
          <label htmlFor="month" className='flex flex-col gap-2'>
            <span className='text-[1.6rem]'>EXP. DATE</span>
            <input onChange={handleChange} type="number" placeholder='MM' name='month' className='p-3 text-[1.6rem] rounded-xl border-gray-400 border-[.1rem] w-[9rem]' />
          </label>
          <label htmlFor="year" className='flex flex-col gap-2'>
            <span className='text-[1.6rem]'>(MM/YY)</span>
            <input onChange={handleChange} type="number" placeholder='YY' name='year' className='p-3 text-[1.6rem] rounded-xl border-gray-400 border-[.1rem] w-[9rem]' />
          </label>
          <label htmlFor="cvc" className='flex flex-col gap-2'>
            <span className='text-[1.6rem]'>CVC</span>
            <input onChange={handleChange} type="number" placeholder='e.g. 123' name='cvc' className='p-3 text-[1.6rem] rounded-xl border-gray-400 border-[.1rem] w-[9rem]' />
          </label>
        </div>
        <button className='bg-violet-900 text-white font-extrabold text-[1.8rem] p-3 w-[80%] min-w-[200px] max-w-[250px] rounded-xl word-space self-center'>Confirm</button>
      </form>
    </div>
  </section>
  )
}

export {App};
