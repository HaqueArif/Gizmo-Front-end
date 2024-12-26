import TableRow from "./TableRow";

const TableBody = ({ data, onDetailsClick }) => {
  return (
    <tbody>
      {data.length > 0 ? (
        data?.map((item, index) => (
          <TableRow key={index} item={item} onDetailsClick={onDetailsClick} />
        ))
      ) : (
        <tr>
          <td colSpan={5}>No data available</td>
        </tr>
      )}
    </tbody>
  );
};

export default TableBody;
