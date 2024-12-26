const TableRow = ({ item }) => {
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={
                  item?.image ||
                  "https://img.daisyui.com/images/profile/demo/2@94.webp"
                }
                alt="Avatar"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{item?.name}</div>
            <div className="text-sm opacity-50">{item?.country}</div>
          </div>
        </div>
      </td>
      <td>{item?.job}</td>
      <td>{item?.favoriteColor}</td>
    </tr>
  );
};

export default TableRow;
