import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { productColumns, productRows } from "../../DataSource";

const Datatable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="flex items-center gap-5">
            <div className="text-blue-800 p-[2px]  px-1 font-semibold bg-blue-200 rounded  cursor-pointer">View</div>
            <div className="text-red-800 p-[2px] px-1 font-semibold bg-red-200 rounded cursor-pointer">Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="min-h-[400px] p-5">
      <DataGrid
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
