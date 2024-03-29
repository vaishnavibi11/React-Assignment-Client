import React, { useEffect, useState } from "react";
import { useDataLayerValue } from "../DataLayer/DataLayer";
import Layout from "../Layout";
import { DataGrid } from "@mui/x-data-grid";
import moment from 'moment'
import Api from "../utils/Api";
const Home = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "_id", headerName: "UserID",  width: 300},
    {
      field: "name",
      headerName: "Name",
      width: 160,
    },
    { field: "email", headerName: "Email", width: 130 },
    {
      field: "dob",
      headerName: "Date of Birth",
      width: 130,
      valueGetter: (value, row) => `${moment(value).format("MMMM DD, YYYY")}`,
    },
  ];

  const [rows, setRows] = useState([]);
  const [{ userDetails }] = useDataLayerValue();
  useEffect(() => {
    if (userDetails) getData();
  }, [userDetails]);

  const getData = async () => {
    try {
      const res = await Api.get("/user/allUsers");
      console.log({ data: res.data });
      if (res.data?.success) setRows(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows.map((item,index) => ({ ...item, id:index}))}
          columns={columns}
        />
      </div>

  );
};

export default Home;
