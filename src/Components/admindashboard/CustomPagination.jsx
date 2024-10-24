import React from "react";
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon, FirstPage as FirstPageIcon, LastPage as LastPageIcon } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { GridPagination } from "@mui/x-data-grid";

const CustomPagination = (props) => {
  const { apiRef, paginationModel, setPaginationModel } = props;
  
  const handlePageChange = (event, newPage) => {
    setPaginationModel({ ...paginationModel, page: newPage });
  };

  const handlePageSizeChange = (event) => {
    setPaginationModel({ ...paginationModel, pageSize: Number(event.target.value) });
  };

  return (
    <div className="flex items-center justify-between p-4">
      <div>
        <Button
          size="small"
          onClick={() => handlePageChange(null, 0)}
          disabled={paginationModel.page === 0}
        >
          <FirstPageIcon />
        </Button>
        <IconButton
          size="small"
          onClick={() => handlePageChange(null, paginationModel.page - 1)}
          disabled={paginationModel.page === 0}
        >
          <ChevronLeftIcon />
        </IconButton>
        <IconButton
          size="small"
          onClick={() => handlePageChange(null, paginationModel.page + 1)}
          disabled={paginationModel.page >= Math.ceil(props.rowCount / paginationModel.pageSize) - 1}
        >
          <ChevronRightIcon />
        </IconButton>
        <Button
          size="small"
          onClick={() => handlePageChange(null, Math.ceil(props.rowCount / paginationModel.pageSize) - 1)}
          disabled={paginationModel.page >= Math.ceil(props.rowCount / paginationModel.pageSize) - 1}
        >
          <LastPageIcon />
        </Button>
      </div>
      <div>
        <select
          value={paginationModel.pageSize}
          onChange={handlePageSizeChange}
          className="border rounded p-1"
        >
          {props.pageSizeOptions.map(size => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CustomPagination;
