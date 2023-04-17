import React from 'react'
import { BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href='https://github.com/CodeKaito'>
            <BsGithub />
          </a>
        </div>
        <div>
          <a href='https://www.instagram.com/carljeromee/'>
            <BsInstagram />
          </a>
            
        </div>
        <div>
          <a href='https://twitter.com/C0deKaito'>
            <BsTwitter />
          </a>
        </div>
    </div>
  )
}

export default SocialMedia