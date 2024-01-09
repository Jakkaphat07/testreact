import React from 'react'
import Burger from '../../asset/menu.svg'
import Tmlogo from '../../asset/tm-logo.svg'
import Noti from '../../asset/notification.svg'
import Chat from '../../asset/chat.svg'
import Userim from '../../asset/user.svg'
import { Navi, Hamburger, Menu, User, NotianChat, Hamburgermenu, HamImage, Notidiv, Chatdiv, Userimdiv, Usernamediv }from './styled.js'

function Navbar() {
  return (
    <Navi> 

      <Hamburger>
        <Hamburgermenu>
          <button><img src={Burger}/></button>
        </Hamburgermenu>
        <HamImage>
          <img src={Tmlogo}/>
        </HamImage>
        <p>Product Mangement<label>/Product</label></p>
      </Hamburger>

      <Menu>

        <User>
          <Userimdiv>
            <img src={Userim}/>
          </Userimdiv>
          <Usernamediv>
            <p>Satayu Kaewkern</p>
            <span>ADMIN</span>
          </Usernamediv>
        </User>

        <NotianChat>
          <Notidiv>
            <button><img src={Noti}/></button>
          </Notidiv>

          <Chatdiv>
            <button> <img src={Chat}/></button>
          </Chatdiv>
        </NotianChat>

      </Menu>

    </Navi>
  )
}

export default Navbar