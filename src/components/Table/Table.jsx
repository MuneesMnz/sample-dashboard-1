import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ListTable = () => {
  const data = [
    {
      id: 254136,
      product: "Fortune Oil",
      img: "https://m.media-amazon.com/images/I/51GyUUKe-0L._AC_UL400_.jpg",
      date: "2 March",
      amount: 150,
      method: "online",
      status: "Pending",
    },
    {
      id: 254139,
      product: "Nestle Everyday Dairy Whitener",
      img: "https://m.media-amazon.com/images/I/71x9onReBAL._AC_UL400_.jpg",
      date: "1 March",
      amount: 220,
      method: "online",
      status: "Approved",
    },
    {
      id: 254142,
      product: "Tata Tea Chakra Gold Premium Tea",
      img: "https://m.media-amazon.com/images/I/61BxON-2YAL._AC_UL400_.jpg",
      date: "2 March",
      amount: 300,
      method: "online",
      status: "Pending",
    },
    {
      id: 254146,
      product: "Fiama Gel Bar Celebration",
      img: "https://m.media-amazon.com/images/I/61FjVQa2R5L._AC_UL400_.jpg",
      date: "1 March",
      amount: 160,
      method: "online",
      status: "Approved",
    },
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="">ID</TableCell>
            <TableCell className="">Product</TableCell>
            <TableCell className="">Date</TableCell>
            <TableCell className="">amount</TableCell>
            <TableCell className="">Payment Method</TableCell>
            <TableCell className="">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((value) => (
            <TableRow key={value.id}>
              <TableCell>{value.id}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <img
                    src={value.img}
                    alt={value.product}
                    className="w-8 h-8 rounded-full object-cover mr-2"
                  />
                  <p> {value.product}</p>
                </div>
              </TableCell>
              <TableCell>{value.date}</TableCell>
              <TableCell>{value.amount}</TableCell>
              <TableCell>{value.method}</TableCell>
              <TableCell><div className={` p-1 rounded w-[max-content] ${value.status==="Approved" ? "text-green-800 bg-green-200" : "text-yellow-800 bg-yellow-200" }`}>
              {value.status }
                </div></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> 
    </TableContainer>
  );
};

export default ListTable;
