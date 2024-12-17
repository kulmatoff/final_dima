import './index.css'

export function Typography(props) {
    const {size="md", additionalClassName="", children} = props;

    const className = `typography--${size} ` + additionalClassName

    return (<p className={className}>{children}</p>)
}