import React from 'react'
import { Link } from 'react-router-dom'

export const HeaderInfo = () => {
  return (
    <div className="flex justify-between pt-9">
    <Link to={'/main'}>
        <img src={'/assets/images/homeMainLogo.svg'} alt="mainLogo" />
    </Link>
    <div className="flex justify-between w-40">
        <div className="flex">
            <p className="font-pre font-semibold text-botton">홍길동</p>
            <p className="font-pre font-medium text-botton">님, 반갑습니다!</p>
        </div>
        <button className="">
            <img src="/assets/images/buttonAlram.svg" alt="" />
        </button>
    </div>
</div>
  )
}
