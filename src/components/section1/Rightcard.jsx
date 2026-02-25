import React from 'react'
import Rightcardcontent from './Rightcardcontent';

const Rightcard = (props) => {
  return (


    <div className='h-full overflow-hidden relative w-60 rounded-4xl shrink-0 '>


      <img className='h-full object-cover ' src={props.img} alt='img1' />

      <Rightcardcontent id={props.id} intro={props.intro} tag={props.tag} />

    </div>
  )
}

export default Rightcard;
