import React from 'react'

const ProductSingle = () => {
  return (
    <div>
      <img src="/images/im1.jpg" alt="pizza" />
      <div className="text-center">
                <h2 className="text-lg font-bold py-2">Dubai</h2>
                <span className="bg-gray-200 py-1 rounded-full text-sm px-4">UAE</span>
            </div>
            <div className="flex justify-between items-center mt-4">
                <span>₹ 100</span>
               <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold">Submit</button>
            </div>
    </div>
  )
}

export default ProductSingle