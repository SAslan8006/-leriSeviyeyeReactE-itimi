import ProductCard from '../components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import Modal from './../components/Modal';
import Input from './../components/Input';
import Button from '../components/Button';
import { useState } from 'react';
import { createDataFunc } from '../redux/dataSlice';
import { modalFunc } from '../redux/modalSlice';

const Product = () => {
    const { modal } = useSelector(state => state.modal)
    const { data } = useSelector(state => state.data)
    const [productInfo, setProductInfo] = useState({ name: "", price: "", url: "" })
    const dispatch = useDispatch();
    const buttonFunc = () => {
        dispatch(createDataFunc(productInfo));
        dispatch(modalFunc())
    }
    const onChangeFunc = (e, type) => {
        if (type == "url") {
            setProductInfo(prev => ({ ...prev, [e.target.name]: URL.createObjectURL(e.target.files[0]) }))

        } else {
            setProductInfo(prev => ({ ...prev, [e.target.name]: e.target.value }))
        }

    }
    const contentModal = (
        <>
            <Input type={"text"} placeholder={"Ürün Ekle"} name={"name"} id={"name"} onChange={e => onChangeFunc(e, "name")} />
            <Input type={"text"} placeholder={"Fiyat Ekle"} name={"price"} id={"price"} onChange={e => onChangeFunc(e, "price")} />
            <Input type={"file"} placeholder={"Resim Seç"} name={"url"} id={"url"} onChange={e => onChangeFunc(e, "url")} />
            <Button btnText={"Ürün Oluştur"} onClick={buttonFunc} />
        </>
    )
    return (
        <div>
            <div className='flex flex-wrap items-center'>
                {
                    data?.map((item, index) => {
                        return <ProductCard item={item} key={index} />
                    })
                }
            </div>
            {modal && <Modal content={contentModal} title={"Ürün Oluştur"} />}
        </div>
    )
}

export default Product
