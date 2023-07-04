import React from 'react'
import Button from '@mui/material/Button';
import MenuCard from './Data/MenuCard';


const Navbar = ({getItem,setItems,btnss,myDIV}) => {

    

  return (
  <>
        <nav className="menu py-4">
          <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                <h5 className='py-3'>our main course order now</h5>
                    <ul className='d-flex justify-content-center'>
                       <li><Button  variant="outlined" onClick={()=> setItems(MenuCard)}>All</Button></li>

                        <li><Button  variant="outlined" onClick={()=> getItem('mgbrekfast')}>M-breakfast</Button></li>

                        <li><Button variant="outlined"  onClick={()=> getItem('starter')}>starter</Button></li>
                        <li><Button variant="outlined" onClick={()=> getItem('lunch')}>lunch</Button></li>
                        <li><Button variant="outlined" onClick={()=> getItem('evbrekfast')}>Ev-breakfast</Button></li>
                        <li><Button variant="outlined" onClick={()=> getItem('dinner')}>dinner</Button></li>
                        <li><Button variant="outlined" onClick={()=> getItem('chat')}>chat</Button></li>
                        <li><Button variant="outlined" onClick={()=> getItem('cold')}>Cold</Button></li>
                        <li><Button variant="outlined" onClick={()=> getItem('hot')}>Hot</Button></li>
                        
                    </ul>
                </div>
            </div>
          </div>
      </nav>
  </>
  )
}

export default Navbar;
