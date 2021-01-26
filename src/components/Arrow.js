const Arrow = ({ direction, clickFunction, glyph, disabled }) => {
    const style = {
        border: "none",
        background: "transparent",
        color: disabled ? "#AFB1B1" : "#14B6D4"
    }
    return <button
        style={style}
        disabled={disabled}
        className={ `slide-arrow ${direction}` }
        onClick={ clickFunction }>
        { glyph }
    </button>
};
export default Arrow;