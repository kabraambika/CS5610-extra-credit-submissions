import './warning.css'

//Warning text if invalid color entered in input text 
function Warning(props) {
    return (
        <div className={`warning ${props.active ? "display-block" : "display-none"}`}>{props.colorName} is not a valid color.  Please choose green, blue or red.</div>
    )
}

export default Warning