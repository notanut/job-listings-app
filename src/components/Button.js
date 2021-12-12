const Button = ({category, onDelete}) => {
    return (
                <button className="filter__categories__category">
                    <span onClick={() => onDelete(category)}>{category}</span>
                </button>

    )
}

export default Button
