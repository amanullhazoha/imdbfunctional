import { Fragment } from "react";

const TableBody = ({ columns, items }) => {
    let count = 0;

    return (
        <tbody>
            {items.map((item) => (
                <tr key={item.id}>
                    {columns.map((column) => (
                        <Fragment key={count} {...count++}>
                            {column.content(item, column.path)}
                        </Fragment>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};

export default TableBody;
