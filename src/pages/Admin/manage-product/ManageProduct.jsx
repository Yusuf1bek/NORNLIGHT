import Products from '../../../components/Products'
import { useFetch } from '../../../hooks/useFetch'
import { useStateValue } from '../../../context'

const ManageProduct = () => {
  const [state] = useStateValue()
    const {data} = useFetch("products", {}, [state.reload])
    return (
    <div className='px-[32px] py-[22px]'>
        <h2 className='font-[400] text-[28px] leading-[30px] mb-[33px]'>Manage Product</h2>
        <Products admin={true} data={data}/>
    </div>
  )
}

export default ManageProduct