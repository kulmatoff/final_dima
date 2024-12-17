import "./index.css"

export function Button(props) {
    const {variant="primary", children, onClick} = props;

    const className = `my-butt my-butt--${variant}`;

    return <button className={className} onClick={onClick}>{children}</button>
}