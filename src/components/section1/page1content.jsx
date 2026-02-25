import React from 'react'
import LeftContent from './leftcontent';
import RightContent from './rightcontent';





const Page1content = (props) => {
    return(
        <div className = 'py-10 px-18 flex items-center h-[90vh] gap-10'>
           
            <LeftContent/>
            <RightContent users={props.users}/>  
            
        </div>
    )
}

export default Page1content;