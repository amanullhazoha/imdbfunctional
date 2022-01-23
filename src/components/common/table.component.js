import TableBody from "./tableBody.component";
import TableHead from "./tableHead.component";

const Table = ({ columns, items, sorting, onSort }) => {
    return (
        <table className="table">
            <TableHead 
                headers={columns} 
                sorting={sorting} 
                onSort={onSort} 
            />
            <TableBody columns={columns} items={items} />
        </table>
    );
};

export default Table;
