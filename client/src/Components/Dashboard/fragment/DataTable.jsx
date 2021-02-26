import React, { useState } from "react";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import DataTable from "react-data-table-component";
import { useEffect } from "react";
import axios from "axios";

export default function DataTableComponent({ id }) {
    const [data, settableData] = useState([]);

    const columns = [
        {
            name: "Transaction Id",
            selector: "reciver_id",
            sortable: true,
        },
        { name: "Sender", selector: "sender_id", sortable: true },
        {
            name: "Amount",
            cell: (d) => (
                <span>{d.amount.value + " " + d.amount.currency} </span>
            ),
            sortable: true,
        },
        {
            name: "Date ",
            sortable: true,
            cell: (d) => (
                <span>
                    {new Date(d.date).getDate() +
                        "-" +
                        (new Date(d.date).getMonth() + 1) +
                        "-" +
                        new Date(d.date).getFullYear()}
                </span>
            ),
        },
    ];

    useEffect(() => {
        axios
            .post(process.env.REACT_APP_URL + "/getUserTranscations", { id })
            .then((res) => settableData(res.data));
    }, []);

    const tableData1 = {
        columns,
        data,
    };
    return (
        <div>
            {data && (
                <DataTableExtensions {...tableData1}>
                    <DataTable
                        data={data}
                        columns={columns}
                        noHeader
                        defaultSortField="id"
                        defaultSortAsc={false}
                        pagination
                        highlightOnHover
                    />
                </DataTableExtensions>
            )}
        </div>
    );
}
