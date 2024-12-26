const TableHead = ({ columns }) => {
  return (
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        {columns.map((col, index) => (
          <th key={index}>{col}</th>
        ))}
        <th></th>
      </tr>
    </thead>
  );
};

export default TableHead;
