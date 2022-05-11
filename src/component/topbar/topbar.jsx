import React from 'react';
import "./topbar.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector,useDispatch } from 'react-redux';
function Topbar() {
  const cartstate = useSelector(state=>state.cartReducer)
  return (
    <div className='top'>
     {/* <div className='topleft'>
         <i className='toplefticon'><FacebookIcon/></i>
         <i className='toplefticon'><InstagramIcon/></i>
         <i className='toplefticon'><TwitterIcon/></i>
         <i className='toplefticon'><YouTubeIcon/></i>
     </div>
     <div className='topcenter'>
         <input className='inputlocation' placeholder=' Detect Or Enter Location'></input>
         <input type="text" placeholder='  Search Food or Restaurents' className='inputtext'/>
         <i className='searchicon'><SearchIcon/></i>
     </div> */}
     <div className='topright'>
     <ul className='toplist'>
          <li className='toplistitem'><a href='/'>Home</a></li>
          <li className='toplistitem'><a href='/login'>Login</a></li>
          <li className='cart'><a href='/cart'><ShoppingCartIcon/>{cartstate.cartItems.length}</a></li>  
          <img className="topimg" src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' alt='profile-pic'></img>
        </ul>
     </div>
      
    </div>
  )
}

export default Topbar;                  
