import { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { deleteDataFunc, updateDataFunc } from '../redux/dataSlice';
import PropTypes from 'prop-types';
import { modalFunc } from '../redux/modalSlice';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
    const [openEdit, setOpenEdit] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const updateFunc = () => {
        dispatch(modalFunc())
        setOpenEdit(false);
        navigate(`/?update=${item?.id}`)
    }
    return (
        <div className='w-[200px] h-[200px] relative m-2 rounded-md'>
            <img className='w-full h-full rounded-md' alt='Product Image' src={item?.url} />
            <div className='absolute left-0 bottom-0 bg-indigo-600 text-white w-full px-2'>
                <div className='text-lg font-semibold"' >{item?.title}</div>
                <div>{item?.price} tl</div>
            </div>
            <div onClick={() => setOpenEdit(!openEdit)} className='absolute top-0 right-2'>
                <BsThreeDots color='red' size={24} />
            </div>
            {
                openEdit && (
                    <div className='bg-black border border-white text-white absolute top-5 right-2 p-2 text-sm'>
                        <div onClick={() => dispatch(deleteDataFunc(item?.id))} className='cursor-pointer'>Sil</div>
                        <div onClick={updateFunc} className='cursor-pointer'>Güncelle</div>
                    </div>
                )
            }
        </div >
    )
}

ProductCard.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired,
};
export default ProductCard
