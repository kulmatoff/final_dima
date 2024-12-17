import "./index.css"

export function Tooltip(props) {
    // position : right, left, top, bottom
    const {text="", position="left", children} = props;

    const className = `tooltiptext tooltiptext--${position}`;

    return (<div className="tooltip">{children}
        <span className={className}>{text}</span>
    </div>)
}