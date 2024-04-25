import Text from '../components/Text'
import Button from '../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, modalOpenFunc } from '../redux/slice/modalSlice';
import { useEffect } from 'react';

const Home = () => {
    const { modal, getData } = useSelector(state => state.modal);
    const dispatch = useDispatch();
    console.log('Home', modal);
    // const changeFunc = () => { dispatch(modalOpenFunc()) }
    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch]);
    console.log(getData);
    return (
        // <div onClick={changeFunc}>
        //     {modal ? "değer True" : "değer False"}
        // </div>
        <div>
            react redux
        </div>
    )
}

export default Home
