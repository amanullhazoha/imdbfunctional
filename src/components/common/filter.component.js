const Filter = ({ filterItems, onFilter, selectFilterItem }) => {
    return (
        <div className="col-md-2">
            <ul className="list-group">
                {filterItems.map((item) => (
                    <li
                        className={
                            selectFilterItem === item
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                        key={item}
                        onClick={() => onFilter(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Filter;
