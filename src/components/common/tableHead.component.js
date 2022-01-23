const TableHead = ({ headers, sorting, onSort }) => {
    const handleSort = ({ path, sort }) => {
        if (!sort) return;
        if (path === sorting.path) {
            if (sorting.order === "asc") {
                onSort({ path, order: "desc" });
            } else {
                onSort({ path, order: "asc" });
            }
        } else {
            onSort({ path, order: "asc" });
        }
    };

    return (
        <thead>
            <tr>
                {headers.map((header) => (
                    <th key={header.label} onClick={() => handleSort(header)}>
                        {header.label}
                        <span className="m-2">
                            {header.path === sorting.path ? (
                                sorting.order === "asc" ? (
                                    <i className="bi bi-sort-up" />
                                ) : (
                                    <i class="bi bi-sort-down-alt" />
                                )
                            ) : null}
                        </span>
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHead;
