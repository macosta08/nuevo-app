// Component that loads the items of the table header

function ThTagTable({ name, extraClassName = '' }) {
  return (
    <th
      className={`font-font_montserrat_medium text-black border-collapse px-5 py-4 text-center align-baseline capitalize ${extraClassName}`}
    >
      {name}
    </th>
  );
}

function TdTagTable({ children, extraClassName = '' }) {
  return (
    <td
      className={`font-font_montserrat_regular whitespace-nowrap border-b px-5 py-4 text-sm ${extraClassName}`}
    >
      {children}
    </td>
  );
}

export { ThTagTable, TdTagTable };
