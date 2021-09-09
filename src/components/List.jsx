import React, {useState} from 'react'
import reviews from '../util/data';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';

const List =() => {
    const [showInfo, setShowInfo] = useState(0);
    const {id, name, job, image, text, rating} = reviews[showInfo]
    const next = ()=>{
    setShowInfo((showInfo)=>{
                var x = showInfo +1
                var o = showInfo -3
                if(showInfo == 3){
                    return o;
                }else{
                    return x;
                }
        })
    }
    const prev = ()=>{
        setShowInfo((showInfo)=>{
                var y = showInfo -1
                var r = showInfo +3
                if(showInfo == 0){
                    return r;
                }else{
                    return y;
                }
        })
    }
    const ran = ()=>{
        setShowInfo((showInfo)=>{
            var z = Math.floor(Math.random() * (4)) + 0;
            showInfo = z;
            return z;
        })
    }
        var rate = rating
        if(rating === 3){
                rate = <p><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/><AiOutlineStar/></p>
        }else if(rating === 4){
                rate = <p><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></p>
        }else if(rating === 4.5){
                rate = <p><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><BsStarHalf/></p>
        }else if(rating === 5){
                rate = <p><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></p>
        }
        return(
            <article key={id} className='list'>
                <div key={id} style={{position:'relative'}}>
                    <img src={image} alt={name} style={{borderRadius:'50%', width:'6rem', height:'6rem'}}/>
                    <h3>{name}</h3>
                    <h4>{job}</h4>
                    <p>{rate}</p>
                    <h5>{text}</h5>
                </div>
                <button onClick={prev} style={{width:'3rem',height:'3rem',borderRadius:'50%',display:'inline-block'}}><AiOutlineArrowLeft/></button>
                <button onClick={ran} style={{width:'5.5rem',height:'5.5rem',borderRadius:'50%',display:'inline-block'}}>Random</button>
                <button onClick={next} style={{width:'3rem',height:'3rem',borderRadius:'50%',display:'inline-block'}}><AiOutlineArrowRight/></button>
            </article>
        )
}

export default List