import React from 'react'
import { Link } from 'react-router-dom'



const AdminStore = () => {
  // const navigate = useNavigate()
  return (
    <div>
      <section className='space-y-5'>
        <h2 className='text-5xl my-5'>Store</h2>
        <div className='flex flex-row justify-between'>
          <div className='space-y-5'>
            <h2 className='text-5xl'>Edit Categories</h2>
            <ul className='text-3xl font-light space-y-5'>
              <li>
                <Link to="">Cakes and Donuts</Link>
              </li>
              <li>
                <Link >Chips</Link>
              </li>
              <li>
                <Link>Springrolls</Link>
              </li>
              <li>
                <Link>Pies</Link>
              </li>
              <li>
                <Link>Achomo</Link>
              </li>
              <li>
                <Link>Rockbuns</Link>
              </li>
              <li>
                <Link>Catering</Link>
              </li>
              <li>
                <Link>Assorted Bowls</Link>
              </li>
            </ul>
          </div>
          <div className='flex justify-center items-center p-15 text-3xl font-light'>
            <Link to="/editcategory">Add Product</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AdminStore