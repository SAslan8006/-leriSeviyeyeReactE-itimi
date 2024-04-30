import ProductCard from '../components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import Modal from './../components/Modal';
import Input from './../components/Input';
import Button from '../components/Button';
import { useEffect, useState } from 'react';
import { createDataFunc, updateDataFunc } from '../redux/dataSlice';
import { modalFunc } from '../redux/modalSlice';
import { useLocation, useNavigate } from 'react-router-dom';

const Product = () => {
    const { modal } = useSelector(state => state.modal)
    const { data } = useSelector(state => state.data)
    const location = useLocation();
    const [productInfo, setProductInfo] = useState({ name: "", price: "", url: "" })
    const dispatch = useDispatch();
    let loc = location?.search.split('=')[1]
    const navigate = useNavigate();
    useEffect(() => {
        if (loc) {
            setProductInfo(data.find(dt => dt.id == loc))
        }
    }, [loc])
    const buttonFunc = () => {
        dispatch(createDataFunc({ ...productInfo, id: data.length + 1 }))
        dispatch(modalFunc())
    }

    const buttonUpdateFunc = () => {
        dispatch(updateDataFunc({ ...productInfo, id: loc }))
        dispatch(modalFunc())
        navigate("/")
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
            <Input value={productInfo?.name} type={"text"} placeholder={"Ürün Ekle"} name={"name"} id={"name"} onChange={e => onChangeFunc(e, "name")} />
            <Input value={productInfo?.price} type={"text"} placeholder={"Fiyat Ekle"} name={"price"} id={"price"} onChange={e => onChangeFunc(e, "price")} />
            <Input type={"file"} placeholder={"Resim Seç"} name={"url"} id={"url"} onChange={e => onChangeFunc(e, "url")} />
            <Button btnText={loc ? "Ürün Güncelle" : "Ürün Oluştur"} onClick={loc ? buttonUpdateFunc : buttonFunc} />
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
            {modal && <Modal content={contentModal} title={loc ? "Ürün Güncelle" : "Ürün Oluştur"} />}
        </div>
    )
}

export default Product
