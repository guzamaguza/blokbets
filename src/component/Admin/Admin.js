import React from 'react'
import { Link } from 'react-router-dom'
import useTitle from '../../Router/useTitle'




const Admin = () => {
  
  useTitle('Admin')
  
  return (
      <div>
           <>
      
      <div className='px-8 sm:px-12  py-14'>
          <div className="sm:px-12">
          <div className=" 	">

       
            


        <p className='text-[#59DCD3] my-2 tracking-wide text-[14px]'>
               Eliminate The House , Unleash Profit Protential

        </p>


        <p>
        
        <h1 className='text-[30px] sm:leading-[50px] mb-6 text-white	 sm:text-[50px] font-semibold '>Admin Page</h1>
                
        </p>
        &nbsp
        <p>
        
        <p>
        <form>
          <label className='text-[#59DCD3]' >
            Team A: 
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        </p>

        &nbsp
        <p>
        <form>
          <label className='text-[#59DCD3]' >
            Team B: 
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        </p>

        &nbsp
        <p>
        <form>
          <label className='text-[#59DCD3]' >
            Ending Time: 
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        </p>

        &nbsp
        <p>
        <form>
          <label className='text-[#59DCD3]' >
            Closing Time: 
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        </p>

        &nbsp
        <p>
        <form>
          <label className='text-[#59DCD3]' >
            Min Bet: 
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        </p>
          



        <p>
          <br></br>
          <button className='sm:left-30 sm:right-30 text-white uppercase  rounded-none font-normal hover:bg-[#47a09a] outline-none py-2 px-[60px] text-[10px]  text-normal border-[1px] leading-[20px]  border-[#59DCD3]'> Start Bet </button>
          &nbsp
          <button className='sm:left-30 sm:right-30 text-white uppercase  rounded-none font-normal hover:bg-[#47a09a] outline-none py-2 px-[60px] text-[10px]  text-normal border-[1px] leading-[20px]  border-[#59DCD3]'> Set Team Winner & End Bet </button>
        </p>
                   
              
        </p>

          </div>
              


          </div>
          

    </div>
  
      </>

    </div>
  )
}

export default Admin