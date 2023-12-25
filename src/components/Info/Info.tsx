// import React from 'react'
import './info.css'
import Image from '@/components/Image/Image'
import Star from '@/assets/star.svg'

const Info = () => {

  const userInfo = {
    avatar: 'https://p3-passport.byteacctimg.com/img/user-avatar/9a0f63297bebbd2055bfcb515e479629~50x50.awebp',
    username: 'Alex',
    title: 'Hexo-Theme-Lx',
    introduce: 'A simple & clear & elegant hexo theme'
  }

  const StarMe: React.FC = () => {
    return <a href="https://github.com/" target="_blank">
      <img src={Star} alt="" />
    </a>
  }

  return (
    <div className="user-wrap w-1/3 h-full">
      <div className="user-info w-full h-full pt-32 flex flex-col items-center">
        <Image src={userInfo.avatar} width="80px" height="80px" radius="50%" />
        <p className="text-white mt-5">{userInfo.username}</p>
        <p className="text-white text-3xl mt-3">{userInfo.title}</p>
        <p className="text-white mt-5">{userInfo.introduce}</p>

        <StarMe />
      </div>
    </div>
  )
}

export default Info