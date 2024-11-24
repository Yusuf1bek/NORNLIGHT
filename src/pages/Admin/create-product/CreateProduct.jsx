import axios from '../../../api/index'
import React, { useRef } from 'react'

const CreateProduct = () => {
    const title = useRef(null)
    const oldPrice = useRef(null)
    const newPrice = useRef(null)
    const url = useRef(null)
    const description = useRef(null)
    const handleCreateSubmit = (e)=> {
        e.preventDefault()
        let newProduct = {
            title: title.current.value, 
            oldPrice: oldPrice.current.value, 
            newPrice: newPrice.current.value, 
            url: url.current.value, 
            description: description.current.value,
            color: "Желтый", 
            year: "2024", 
            diametr: "27.5", 
            material: "Карбон", 
            size: "L", 
            country: "Швейцария",
            stocks: 15   
        }
        axios
            .post("/products", newProduct)
            .then(res => console.log(res))
            .catch(err => console.log(err))
            .finally(res => console.log(res))
    }
  return (
    <div className='px-[22px] py-[32px]'>
        <h2 className='font-[400] text-[28px] leading-[30px] mb-[33px]'>Create Product</h2>
        <form onSubmit={handleCreateSubmit} action="">
            <ul>
                <li className='mb-[16px]'>
                    <h2 className='font-[400] text-[18px] leading-[25px] mb-[8px]'>Title</h2>
                    <input ref={title} className='bg-[#F8F8F8] text-[16px] py-[12px] pl-[8px] outline-none w-[620px] border-[1px] border-slate-500 rounded-lg' type="text" placeholder='Title' />
                </li>
                <div className='flex items-center gap-[5px] w-[620px]'>
                    <li className='mb-[16px]'>
                        <h2 className='font-[400] text-[18px] leading-[25px] mb-[8px]'>Old Price</h2>
                        <input ref={oldPrice} className='bg-[#F8F8F8] text-[16px] py-[12px] pl-[8px] outline-none w-[310px] border-[1px] border-slate-500 rounded-lg' type="text" placeholder='Old Price' />
                    </li>
                    <li className='mb-[16px]'>
                        <h2 className='font-[400] text-[18px] leading-[25px] mb-[8px]'>New Price</h2>
                        <input ref={newPrice} className='bg-[#F8F8F8] text-[16px] py-[12px] pl-[8px] outline-none w-[310px] border-[1px] border-slate-500 rounded-lg' type="text" placeholder=' New Price' />
                    </li>
                </div>
                <li className='mb-[16px]'>
                    <h2 className='font-[400] text-[18px] leading-[25px] mb-[8px]'>Image-url</h2>
                    <input ref={url} className='bg-[#F8F8F8] text-[16px] py-[12px] pl-[8px] outline-none w-[620px] border-[1px] border-slate-500 rounded-lg' type="text" placeholder='Image-url' />
                </li>
                <li className='mb-[36px]'>
                    <h2 className='font-[400] text-[18px] leading-[25px] mb-[8px]'>Description</h2>
                    <textarea ref={description} className='bg-[#F8F8F8] text-[16px] py-[12px] pl-[8px] outline-none w-[620px] border-[1px] border-slate-500 rounded-lg' type="text" placeholder='Description' />
                </li>
            <button className='w-[180px] py-[8px] bg-[#454545] text-white rounded-lg'>
                Create
            </button>
            </ul>
        </form>
    </div>
  )
}

export default CreateProduct