import React, { createContext, useContext } from "react";

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div
        className="border border-gray-200 bg-gray-50 rounded-md overflow-hidden"
        role="table"
      >
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <div
      role="row"
      className={`grid grid-cols-${columns} gap-6 items-center bg-gray-100 border-b border-gray-200 uppercase tracking-wide font-semibold text-gray-600 p-4`}
    >
      {children}
    </div>
  );
}

function Row({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <div
      role="row"
      className={`grid grid-cols-${columns} gap-6 items-center p-3 border-b border-gray-200`}
    >
      {children}
    </div>
  );
}

function Body({ data, render }) {
  if (!data.length)
    return (
      <p className="text-lg font-medium text-center my-6">
        No data to show at the moment
      </p>
    );

  return <section className="my-1">{data.map(render)}</section>;
}

function Footer({ children }) {
  return (
    <footer
      className={`bg-gray-100 flex justify-center p-3 ${
        children ? "" : "hidden"
      }`}
    >
      {children}
    </footer>
  );
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
