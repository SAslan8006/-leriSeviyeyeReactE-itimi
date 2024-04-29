import { GrClose } from 'react-icons/gr'
const Modal = ({ title, content, btnText, btnFunc }) => {
    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 w-ful h-screen flex items-center justify-center'>
            <div className='w-1/3 bg-white shadow-lg rounded-md p-4'>
                <div className='border-b py-3 flex '>
                    <div className='text-2xl'>{title}</div>
                    <GrClose size={24} />
                </div>
            </div>
        </div>
    )
}
export default Modal
