import React from 'react'
import Navbar from '../Navigate/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import { Wrapper, Navcon, Sidecon, Searchcon, Promancon } from './styled'

function Productwrapper() {
  return (
    <Wrapper>

      <Navcon>
        <Navbar/>
      </Navcon>

      <Sidecon>
        <Sidebar/>
      </Sidecon>

      <Searchcon>

      </Searchcon>

      <Promancon>

      </Promancon>

    </Wrapper>
  )
}

export default Productwrapper