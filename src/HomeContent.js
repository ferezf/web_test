import React, { useState, useEffect, useRef } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/jquery.dataTables.css";
import "bootstrap/dist/css/bootstrap.min.css";
import sampleData from "./sampleData.json";
import "./HomeContent.css";

const treeData = [
  {
    name: "USA",
    cities: [
      {
        name: "New York",
        neighborhoods: ["Queens", "Brooklyn"],
      },
    ],
  },
  {
    name: "Canada",
    cities: [
      {
        name: "Vancouver",
        neighborhoods: ["Downtown", "West End"],
      },
    ],
  },
];

const HomeContent = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    if ($.fn.DataTable.isDataTable(tableRef.current)) {
      $(tableRef.current).DataTable().destroy();
    }

    $(tableRef.current).DataTable({
      columns: [
        { data: "#", title: "#" },
        { data: "Name", title: "Name" },
        { data: "Address", title: "Address" },
        { data: "City", title: "City" },
        { data: "Pin Code", title: "Pin Code" },
        { data: "Country", title: "Country" },
        { data: "Neighborhood", title: "Neighborhood" },
        {
          data: null,
          render: (data, type, row) => {
            return `
              <button class="btn btn-primary btn-sm view-button" data-id="${row["#"]}">
                <i class="icon ion-eye"></i>
              </button>
              <button class="btn btn-info btn-sm edit-button" data-id="${row["#"]}">
                <i class="icon ion-edit"></i>
              </button> 
              <button class="btn btn-danger btn-sm delete-button" data-id="${row["#"]}">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash2-fill" viewBox="0 0 16 16">
                  <path d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z"/>
                </svg>
              </button>
            `;
          },
          title: "Actions",
        },
      ],
      data: sampleData,
      order: [[0, "asc"]],
    });

    $(tableRef.current).on("click", ".view-button", function () {
      const rowData = $(this).data("id");
      const selectedRow = sampleData.find((row) => row["#"] === rowData);
      if (selectedRow) {
        setSelectedRowData(selectedRow);
      }
    });
  }, []);

  const [selectedRowData, setSelectedRowData] = useState(null);

  const handleNeighborhoodClick = (neighborhood) => {
    const filteredData = sampleData.filter(
      (row) => row.Neighborhood === neighborhood
    );
    $(tableRef.current).DataTable().clear().rows.add(filteredData).draw();
  };

  const handleCityClick = (country, city) => {
    const filteredData = sampleData.filter(
      (row) => row.Country === country && row.City === city
    );
    $(tableRef.current).DataTable().clear().rows.add(filteredData).draw();
  };

  const handlePrint = () => {
    if (selectedRowData) {
      const printWindow = window.open("", "_blank");
      printWindow.document.open();
      printWindow.document.write(
        `<html><head><title>Selected Data</title></head><body><pre>${JSON.stringify(
          selectedRowData,
          null,
          2
        )}</pre></body></html>`
      );
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <div className="container-fluid">
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.css"
        rel="stylesheet"
        type="text/css"
      />
      <div className="row mt-4">
        <div className="col-md-3 tree-container">
          {treeData.map((country) => (
            <details
              key={country.name}
              className="tree-nav__item is-expandable"
            >
              <summary className="tree-nav__item-title">{country.name}</summary>
              {country.cities.map((city) => (
                <details
                  key={city.name}
                  className="tree-nav__item is-expandable"
                >
                  <summary
                    className="tree-nav__item-title"
                    onClick={() => handleCityClick(country.name, city.name)}
                  >
                    {city.name}
                  </summary>
                  <div className="tree-nav__item">
                    {city.neighborhoods.map((neighborhood) => (
                      <a
                        key={neighborhood}
                        className="tree-nav__item-title"
                        onClick={() => handleNeighborhoodClick(neighborhood)}
                      >
                        <p></p>
                        <i className="icon ion-location"></i> {neighborhood}
                      </a>
                    ))}
                  </div>
                </details>
              ))}
            </details>
          ))}
        </div>
        <div className="col-md-9">
          <h3 className="mt-1">Home Content</h3>
          <table
            ref={tableRef}
            className="display table table-bordered table-hover"
            style={{ width: "100%" }}
          >
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Address</th>
                <th>City</th>
                <th>Pin Code</th>
                <th>Country</th>
                <th>Neighborhood</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
          {selectedRowData && (
            <div className="mt-4">
              <h4>View Data</h4>
              <pre>{JSON.stringify(selectedRowData, null, 2)}</pre>
              <button className="btn btn-secondary" onClick={handlePrint}>
                Print Selected Data
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
