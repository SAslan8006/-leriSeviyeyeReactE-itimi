
const Button = ({ btnText, btnFunc }) => {
    return (
        <button onClick={btnFunc}>
            {btnText}
        </button>
    )
}

export default Button
