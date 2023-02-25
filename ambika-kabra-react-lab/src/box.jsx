import './box.css';
//Box which changes color in white, red, green and blue
function Box(props) {
    return (
        <div id="box" className={`bg-${!props.colorValue ? "white" : props.colorValue}`}></div>
    )
}

export default Box