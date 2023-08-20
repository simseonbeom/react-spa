
import { useEffect, useState } from 'react'
import s from './About.module.css'
import useFetchData from '@/hooks/useFetchData'
import { getPbImageURL } from '@/utils/getPbImageURL'
import { globalState } from '@/utils/globalState'
import { DelayLink } from '@/utils/DelayLink'
import { gsap } from 'gsap'
import useSmoother from '@/hooks/useSmoother'
import useDocumentTitle from '@/hooks/useDocumentTitle'


function About() {
  
  useDocumentTitle(`Get The Drop | ${globalState.name}`)

  const {data,isLoading,error} = useFetchData('https://kindtiger.pockethost.io/api/collections/products/records')
  
  const [select,setSelect] = useState({});
  const [name,setName] = useState(globalState.name);
  
 
  const scrollbar = useSmoother(); 


  useEffect(()=>{
     
   if(scrollbar) scrollbar.scrollTo(0, 0, 200);

    const target = data.items?.find((item)=>{
      return item.name === name
    })

    setSelect(target)
  })

  function start(){
    gsap.to('.loadingScreen',{duration:0.5,y:0,ease:'power2.inOut'});
  }

  function end(){
    gsap.to('.loadingScreen',{delay:0.5,duration:0.5,y:'-100%',ease:'power2.inOut',onComplete:()=>{
      gsap.set('.loadingScreen',{y:'100%'});
    }});
  }
  
  
  
  return (
    <div className={s.about}>
     
     
     <div className={s.back}> 
     <DelayLink delay={500} onDelayStart={start} onDelayEnd={end} to="/">⬅ Go To Back</DelayLink>
     </div>
      
      {
        select && (
          <>
            <div className={s.move}>
              <div>
                <div>- {select.name} - {select.capacity} </div>
                <div>- {select.name} - {select.capacity} </div>
              </div>
            </div>
            <img src={getPbImageURL(select)} alt="" />
            <div className={s.price}>${select.price}</div>
          </>
        )
      }
      <button type='button'>Add to cart</button>
    </div>
  )
}

export default About