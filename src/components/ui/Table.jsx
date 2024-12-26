import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";

const Table = ({ data, onDetailsClick, columns = [] }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <TableHead columns={columns} />
        <TableBody data={data} onDetailsClick={onDetailsClick} />
        <TableFooter columns={columns} />
      </table>
    </div>
  );
};

export default Table;
