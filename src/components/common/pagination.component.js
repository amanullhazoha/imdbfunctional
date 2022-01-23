import _ from "lodash";

const Pagination = ({ totalItems, activePage, pageCount, onClickPage }) => {
    const totalPages = Math.ceil(totalItems / pageCount);
    const pages = _.range(1, totalPages + 1, 1);

    if (totalItems < pageCount) return false;

    return (
        <div className="d-flex justify-content-center">
            <ul className="pagination">
                <li
                    className="page-item"
                    onClick={() =>
                        activePage > 1 && onClickPage(activePage - 1)
                    }
                >
                    <a className="page-link">Previous</a>
                </li>
                {pages.map((page) => (
                    <li
                        className={
                            activePage === page
                                ? "page-item active"
                                : "page-item"
                        }
                        key={page}
                        onClick={() => onClickPage(page)}
                    >
                        <a className="page-link">{page}</a>
                    </li>
                ))}
                <li
                    className="page-item"
                    onClick={() =>
                        activePage < totalPages && onClickPage(activePage + 1)
                    }
                >
                    <a className="page-link">Next</a>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
