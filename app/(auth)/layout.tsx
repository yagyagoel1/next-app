import React from 'react'

const layout = ({children}:{children : React.ReactNode}) => {
  return (
    <div>
    <div className='border-b p-1 text-center '>
        100 percent off for next few days
         </div>
         {children}
         </div>
  )
}

export default layout