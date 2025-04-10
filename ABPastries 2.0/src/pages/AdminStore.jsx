import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CategoryEditor from '../components/CategoryEditor' // 👈 import it

const categories = [
  "Cakes and Donuts",
  "Chips",
  "Springrolls",
  "Pies",
  "Achomo",
  "Rockbuns",
  "Catering",
  "Assorted Bowls"
]

const AdminStore = () => {
  const [openCategory, setOpenCategory] = useState("")

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? "" : category)
  }

  return (
    <div>
      <section className='space-y-5'>
        <h2 className='text-5xl my-5'>Store</h2>
        <div className='flex flex-row justify-between'>
          <div className='space-y-5'>
            <h2 className='text-5xl'>Edit Categories</h2>
            <ul className='text-3xl font-light space-y-5'>
              {categories.map((cat) => (
                <li key={cat}>
                  <Link to="#" onClick={() => toggleCategory(cat)}>{cat}</Link>
                  {openCategory === cat && <CategoryEditor onClose={() => setOpenCategory("")} />}
                </li>
              ))}
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
