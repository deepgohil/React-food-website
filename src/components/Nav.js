import { Link } from 'react-router-dom';
import { useContext } from 'react';
// import { CartContext } from '../CartContext';

const Nav = () => {
    const cartStyle = {
        background: '#F59E0D',
        display: 'flex',
        padding: '6px 12px',
        borderRadius: '50px'
      }
    //   const { cart } = useContext(CartContext);
  return (

<>
<nav className="container mx-auto flex items-center justify-between py-4 px-5">
                    <Link to="/">
                        <img style={{ height: 45 }} src="/images/im1.jpg" alt="logo" />
                    </Link>
                    <ul className="flex items-center">
                        <li><Link to="/">Home</Link></li>
                        <li className="ml-6"><Link to="/products">Products</Link></li>
                        <li className="ml-6">
                            <Link to="/cart">
                                <div style={cartStyle}>
                                    <span className='text-white'>10</span>
                                    <img className='ml-5' style={{ height: 25 }} src="/images/cart.svg" alt="cart-icon" />
                                </div>
                            </Link>
                        </li>
                    </ul>
            </nav>
</>
  )
}

export default Nav;