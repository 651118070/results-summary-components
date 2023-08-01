import reaction from '../assets/images/icon-reaction.svg'
import memory from '../assets/images/icon-memory.svg'
import verbal from '../assets/images/icon-verbal.svg'
import visual from '../assets/images/icon-visual.svg'

function Result() {
  return (
    <div className='flex min-h-min  bg-white justify-center items-center   shadow-lg shadow-Light-lavender rounded-2xl my-48 mx-96 sm:grid sm:grid-cols-2'>
        <div className="rounded-2xl bg-gradient-to-b from-Light-slate-blue to bg-Light-royal-blue w-1/2 rounded-br-3xl pb-14 ">
            <p className='text-center text-white pt-6'>Your Result</p>
            <div className="rounded-full bg-gradient-to-b from bg-Persian-blue to bg-slate-blue  w-32 h-32 text-center mt-3 ml-20">
               <p className='text-white'><span className='font-outfit font-extrabold text-4rem'>76</span><br/><span className='text-Light-lavender'>of 100</span></p>
            </div>
            <p className='text-white font-outfit font-semibold text-4xl text-center pt-4'> Great</p>
            <p className='text-center text-white text-outfit text-2rem px-9 mt-7'>You scored higher than 65% of the people who have taken these tests</p>
        </div>
        <div className='mx-4 py-4 w-1/2'>
            <p className='text-Dark-gray-blue pb-4 font-semibold text-lg ml-7'>Summary</p>
            <div className='flex justify-evenly gap-x-16 bg-red-50 rounded-md py-2 pr-2 mb-4'>
                <div className='flex gap-1'>
                    <img src={reaction} alt="reaction logo" className=' px-2' />
                    <p className='text-Light-red'>Reaction</p>
                </div>
                <div><p><span className='text-Dark-gray-blue font-bold'>80</span>/100</p> </div> 
              
            </div>
            <div className='flex justify-evenly gap-x-16 bg-orange-50 rounded-md py-2 pr-2 mb-4'>
                <div className='flex gap-1'>
                    <img src={memory} alt="memory logo" className=' px-2' />
                    <p className='text-Orangey-yellow'>Memory</p>
                </div> 
                 <p><span className='text-Dark-gray-blue font-bold'>92</span>/100</p> 
              
            </div>
            <div className='flex justify-evenly gap-x-20 bg-green-50 rounded-md py-2 pr-2 mb-4'>
                <div className='flex gap-1'>
                    <img src={verbal} alt="verbal logo" className=' px-2'/>
                    <p className='text-Green-teal'>Verbal</p>
                </div>
                 <p><span className='text-Dark-gray-blue font-bold'>61</span>/100</p>
              
            </div>
            <div className='flex justify-evenly gap-x-20 bg-blue-50 rounded-md py-2 pr-2 mb-4'>
                <div className='flex gap-1'>
                    <img src={visual} alt="reaction logo" className='px-2' />
                    <p className='text-Light-royal-blue'>Visual</p>
                </div>
                 <p><span className='text-Dark-gray-blue font-bold'>72</span>/100</p>
              
            </div>
            <button className='bg-Dark-gray-blue text-white rounded-2xl  w-full h-9 text-center  pl-12 pr-16'>Continue</button>
        </div>
    </div>
  )
}

export default Result