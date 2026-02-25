import React from 'react'
import Rightcard from './Rightcard';

const RightContent = (props)=>{
    return(
        <div id='rightscroll' className = 'flex flex-nowrap overflow-x-auto  gap-5 h-full w-2/3  p-4 '>
           {props.users.map(function(elem ,idx){
            
            return <Rightcard key={idx} id={idx} img={elem.img} intro={elem.intro} tag={elem.tag}  />
            
           })}

        </div>
    )
}

export default RightContent;