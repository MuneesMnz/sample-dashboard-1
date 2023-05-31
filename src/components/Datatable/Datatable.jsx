import React, { useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { productColumns, productRows } from "../../DataSource";
import { Link, useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../Context/darkModeContext";

const Datatable = () => {

  const {darkMode}=useContext(DarkModeContext)
  const navigate=useNavigate()
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="flex items-center gap-5">
            <Link to='/users/test' className="text-blue-800 p-[2px]  px-1 font-semibold bg-blue-200 rounded  cursor-pointer">View</Link>
            <Link className="text-red-800 p-[2px] px-1 font-semibold bg-red-200 rounded cursor-pointer">Delete</Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className="min-h-[400px] ">
      <div className="p-5 flex justify-between">
        <div className={`text-2xl ${darkMode ? "text-gray-200":"text-gray-500"} font-semibold`}>
           Users List
        </div>
        <button className="px-2 py-1 rounded bg-teal-600 text-white font-semibold" onClick={()=>navigate('new')}>
          Add New
        </button>
      </div>
      <DataGrid
      className={`${darkMode ? "bg-[#222]  !text-gray-300":"bg-white"}`}
        rows={productRows}
        columns={productColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10,20]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
