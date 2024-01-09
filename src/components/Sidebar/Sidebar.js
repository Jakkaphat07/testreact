import React from 'react'
import { Adminmenu, Adminwrap, Bullet, Buttonstyle, Sidewrapper, TenaandEdit, Textstyle, Admintext } from './styled'
import Tenant from '../../asset/clipboard-attachment.svg'

function Sidebar() {
  return (
    <Sidewrapper>

        <TenaandEdit>
            <li>
                <Buttonstyle>
                    <Bullet>
                        <img src={Tenant} />
                    </Bullet>
                    <Textstyle>
                        <p>Tenants</p>
                    </Textstyle>
                </Buttonstyle>
            </li>

            <li>
                <Buttonstyle>
                    <Bullet>
                        <img src={Tenant} />
                    </Bullet>
                    <Textstyle>
                        <p>Editions</p>
                    </Textstyle>
                </Buttonstyle>
            </li>
        </TenaandEdit>
        
        
        <Admintext>
            <p>ADMINISITRATION</p>
        </Admintext>
            
        <Adminmenu>
            <li>
                <Buttonstyle>
                    <Bullet>
                        <img src={Tenant} />
                    </Bullet>
                    <Textstyle>
                        <div>
                            
                        </div>
                        <p>Product<br/>Management</p>
                    </Textstyle>
                </Buttonstyle>
            </li>

            <li>
                <Buttonstyle>
                    <Bullet>
                        <img src={Tenant} />
                    </Bullet>
                    <Textstyle>
                        <p>Broker</p>
                    </Textstyle>
                </Buttonstyle>
            </li>

            <li>
                <Buttonstyle>
                    <Bullet>
                        <img src={Tenant} />
                    </Bullet>
                    <Textstyle>
                        <p>Agent</p>
                    </Textstyle>
                </Buttonstyle>
            </li>
        </Adminmenu>

    

    </Sidewrapper>
  )
}

export default Sidebar