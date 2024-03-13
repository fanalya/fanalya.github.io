<script setup lang="ts">
import { onMounted } from "vue";
import { Grid } from "gridjs";

onMounted(() => {
  initBasicTable();
  initPagination();
  initSearchTable();
  initSortableTable();
  initResizableTable();
  initLoadingStateTable();
  initFixedHeaderTable();
  initHiddenColumnTable();
  initCellFormationTable();
});

const initBasicTable = () => {
  const basicTable = document.getElementById("basic_tables");
  if (basicTable) {
    new Grid({
      columns: ["Name", "Email", "Phone Number"],
      data: [
        ["John", "john@example.com", "(353) 01 222 3333"],
        ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
        ["Eoin", "eoin@gmail.com", "0097 22 654 00033"],
        ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
        ["Afshin", "afshin@mail.com", "(353) 22 87 8356"]
      ]
    }).render(basicTable);
  }
};

const initPagination = () => {
  const paginationTable = document.getElementById("pagination_tables");
  if (paginationTable)
    new Grid({
      columns: ["Name", "Email", "Phone Number"],
      pagination: {
        limit: 3
      },
      data: [
        ["John", "john@example.com", "(353) 01 222 3333"],
        ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
        ["Eoin", "eoin@gmail.com", "0097 22 654 00033"],
        ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
        ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
        ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
        ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
        ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
        ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
        ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
        ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
        ["Afshin", "afshin@mail.com", "(353) 22 87 8356"]
      ]
    }).render(paginationTable);
};

const initSearchTable = () => {
  const ele = document.getElementById("search_tables");
  if (ele) {
    new Grid({
      columns: ["Name", "Email", "Phone Number"],
      search: true,
      data: [
        ["John", "john@example.com", "(353) 01 222 3333"],
        ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
        ["Eoin", "eoin@gmail.com", "0097 22 654 00033"],
        ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
        ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
        ["Afshin", "afshin@mail.com", "(353) 22 87 8356"]
      ]
    }).render(ele);
  }
};

const initSortableTable = () => {
  const ele = document.getElementById("table_sorting");
  if (ele) {
    new Grid({
      columns: [
        {
          name: "Name",
          width: "150px"
        },
        {
          name: "Email",
          width: "250px"
        },
        {
          name: "Position",
          width: "250px"
        },
        {
          name: "Company",
          width: "250px"
        },
        {
          name: "Country",
          width: "150px"
        }
      ],
      pagination: {
        limit: 5
      },
      sort: true,
      data: [
        [
          "Jonathan",
          "jonathan@example.com",
          "Senior Implementation Architect",
          "Hauck Inc",
          "Holy See"
        ],
        [
          "Harold",
          "harold@example.com",
          "Forward Creative Coordinator",
          "Metz Inc",
          "Iran"
        ],
        [
          "Shannon",
          "shannon@example.com",
          "Legacy Functionality Associate",
          "Zemlak Group",
          "South Georgia"
        ],
        [
          "Robert",
          "robert@example.com",
          "Product Accounts Technician",
          "Hoeger",
          "San Marino"
        ],
        [
          "Noel",
          "noel@example.com",
          "Customer Data Director",
          "Howell - Rippin",
          "Germany"
        ],
        [
          "Traci",
          "traci@example.com",
          "Corporate Identity Director",
          "Koelpin - Goldner",
          "Vanuatu"
        ],
        [
          "Kerry",
          "kerry@example.com",
          "Lead Applications Associate",
          "Feeney, Langworth and Tremblay",
          "Niger"
        ],
        [
          "Patsy",
          "patsy@example.com",
          "Dynamic Assurance Director",
          "Streich Group",
          "Niue"
        ],
        [
          "Cathy",
          "cathy@example.com",
          "Customer Data Director",
          "Ebert, Schamberger and Johnston",
          "Mexico"
        ],
        [
          "Tyrone",
          "tyrone@example.com",
          "Senior Response Liaison",
          "Raynor, Rolfson and Daugherty",
          "Qatar"
        ]
      ]
    }).render(ele);
  }
};

const initResizableTable = () => {
  const ele = document.getElementById("resizable_columns");
  if (ele)
    new Grid({
      columns: ["Name", "Email", "Phone Number"],
      data: [
        ["John", "john@example.com", "(353) 01 222 3333"],
        ["Mark", "mark@gmail.com", "(01) 22 888 4444"]
      ],
      sort: true,
      resizable: true
    }).render(ele);
};

const initLoadingStateTable = () => {
  const ele = document.getElementById("table_loading_state");

  // Loading State Table
  if (ele)
    new Grid({
      columns: [
        {
          name: "Name",
          width: "150px"
        },
        {
          name: "Email",
          width: "250px"
        },
        {
          name: "Position",
          width: "250px"
        },
        {
          name: "Company",
          width: "250px"
        },
        {
          name: "Country",
          width: "150px"
        }
      ],
      pagination: {
        limit: 5
      },
      sort: true,
      data: function () {
        return new Promise(function (resolve) {
          setTimeout(function () {
            resolve([
              [
                "Jonathan",
                "jonathan@example.com",
                "Senior Implementation Architect",
                "Hauck Inc",
                "Holy See"
              ],
              [
                "Harold",
                "harold@example.com",
                "Forward Creative Coordinator",
                "Metz Inc",
                "Iran"
              ],
              [
                "Shannon",
                "shannon@example.com",
                "Legacy Functionality Associate",
                "Zemlak Group",
                "South Georgia"
              ],
              [
                "Robert",
                "robert@example.com",
                "Product Accounts Technician",
                "Hoeger",
                "San Marino"
              ],
              [
                "Noel",
                "noel@example.com",
                "Customer Data Director",
                "Howell - Rippin",
                "Germany"
              ],
              [
                "Traci",
                "traci@example.com",
                "Corporate Identity Director",
                "Koelpin - Goldner",
                "Vanuatu"
              ],
              [
                "Kerry",
                "kerry@example.com",
                "Lead Applications Associate",
                "Feeney, Langworth and Tremblay",
                "Niger"
              ],
              [
                "Patsy",
                "patsy@example.com",
                "Dynamic Assurance Director",
                "Streich Group",
                "Niue"
              ],
              [
                "Cathy",
                "cathy@example.com",
                "Customer Data Director",
                "Ebert, Schamberger and Johnston",
                "Mexico"
              ],
              [
                "Tyrone",
                "tyrone@example.com",
                "Senior Response Liaison",
                "Raynor, Rolfson and Daugherty",
                "Qatar"
              ]
            ]);
          }, 2000);
        });
      }
    }).render(ele);
};

const initFixedHeaderTable = () => {
  const ele = document.getElementById("table_fixed_header");
  // Fixed Header
  if (ele)
    new Grid({
      columns: [
        {
          name: "Name",
          width: "150px"
        },
        {
          name: "Email",
          width: "250px"
        },
        {
          name: "Position",
          width: "250px"
        },
        {
          name: "Company",
          width: "250px"
        },
        {
          name: "Country",
          width: "150px"
        }
      ],
      sort: true,
      pagination: true,
      fixedHeader: true,
      height: "400px",
      data: [
        [
          "Jonathan",
          "jonathan@example.com",
          "Senior Implementation Architect",
          "Hauck Inc",
          "Holy See"
        ],
        [
          "Harold",
          "harold@example.com",
          "Forward Creative Coordinator",
          "Metz Inc",
          "Iran"
        ],
        [
          "Shannon",
          "shannon@example.com",
          "Legacy Functionality Associate",
          "Zemlak Group",
          "South Georgia"
        ],
        [
          "Robert",
          "robert@example.com",
          "Product Accounts Technician",
          "Hoeger",
          "San Marino"
        ],
        [
          "Noel",
          "noel@example.com",
          "Customer Data Director",
          "Howell - Rippin",
          "Germany"
        ],
        [
          "Traci",
          "traci@example.com",
          "Corporate Identity Director",
          "Koelpin - Goldner",
          "Vanuatu"
        ],
        [
          "Kerry",
          "kerry@example.com",
          "Lead Applications Associate",
          "Feeney, Langworth and Tremblay",
          "Niger"
        ],
        [
          "Patsy",
          "patsy@example.com",
          "Dynamic Assurance Director",
          "Streich Group",
          "Niue"
        ],
        [
          "Cathy",
          "cathy@example.com",
          "Customer Data Director",
          "Ebert, Schamberger and Johnston",
          "Mexico"
        ],
        [
          "Tyrone",
          "tyrone@example.com",
          "Senior Response Liaison",
          "Raynor, Rolfson and Daugherty",
          "Qatar"
        ]
      ]
    }).render(ele);
};

const initHiddenColumnTable = () => {
  const ele = document.getElementById("table_hidden_column");
  if (ele)
    new Grid({
      columns: [
        {
          name: "Name",
          width: "120px"
        },
        {
          name: "Email",
          width: "250px"
        },
        {
          name: "Position",
          width: "250px"
        },
        {
          name: "Company",
          width: "250px"
        },
        {
          name: "Country",
          hidden: true
        }
      ],
      pagination: {
        limit: 5
      },
      sort: true,
      data: [
        [
          "Jonathan",
          "jonathan@example.com",
          "Senior Implementation Architect",
          "Hauck Inc",
          "Holy See"
        ],
        [
          "Harold",
          "harold@example.com",
          "Forward Creative Coordinator",
          "Metz Inc",
          "Iran"
        ],
        [
          "Shannon",
          "shannon@example.com",
          "Legacy Functionality Associate",
          "Zemlak Group",
          "South Georgia"
        ],
        [
          "Robert",
          "robert@example.com",
          "Product Accounts Technician",
          "Hoeger",
          "San Marino"
        ],
        [
          "Noel",
          "noel@example.com",
          "Customer Data Director",
          "Howell - Rippin",
          "Germany"
        ],
        [
          "Traci",
          "traci@example.com",
          "Corporate Identity Director",
          "Koelpin - Goldner",
          "Vanuatu"
        ],
        [
          "Kerry",
          "kerry@example.com",
          "Lead Applications Associate",
          "Feeney, Langworth and Tremblay",
          "Niger"
        ],
        [
          "Patsy",
          "patsy@example.com",
          "Dynamic Assurance Director",
          "Streich Group",
          "Niue"
        ],
        [
          "Cathy",
          "cathy@example.com",
          "Customer Data Director",
          "Ebert, Schamberger and Johnston",
          "Mexico"
        ],
        [
          "Tyrone",
          "tyrone@example.com",
          "Senior Response Liaison",
          "Raynor, Rolfson and Daugherty",
          "Qatar"
        ]
      ]
    }).render(ele);
};

const initCellFormationTable = () => {
  const ele = document.getElementById("cell_formatting");
  if (ele)
    new Grid({
      columns: [
        "Salary 1",
        "Salary 2",
        {
          name: "Sum",
          data: null,
          formatter: (_: any, row: any) =>
            `$${(row.cells[0].data + row.cells[1].data).toLocaleString()} USD`
        }
      ],
      data: [1, 2, 3, 4, 5].map(() => [
        Math.round(Math.random() * 100000),
        Math.round(Math.random() * 100000)
      ])
    }).render(ele);
};
</script>

<template>
  <TCard title="Basic Table">
    <div id="basic_tables" />
  </TCard>
  <TCard title="Pagination">
    <p class="mb-4 text-slate-400">
      Pagination can be enabled by setting
      <code class="text-xs text-pink-500 select-all">pagination: true</code>.
    </p>

    <div id="pagination_tables" />
  </TCard>

  <TCard>
    <h6 class="mb-1 text-gray-800 text-15 dark:text-white">Search</h6>
    <p class="mb-4 text-slate-400">
      Grid.js supports global search on all rows and columns. Set
      <code class="text-xs text-pink-500 select-all">search: true</code> to
      enable the search plugin:
    </p>
    <div id="search_tables" />
  </TCard>

  <TCard>
    <h6 class="mb-1 text-gray-800 text-15 dark:text-white">Sorting</h6>
    <p class="mb-4 text-slate-400">
      To enable sorting, simply add
      <code class="text-xs text-pink-500 select-all">sort: true</code> to your
      config:
    </p>
    <div id="table_sorting" />
  </TCard>

  <TCard>
    <h6 class="mb-1 text-gray-800 text-15 dark:text-white">
      Resizable Columns
    </h6>
    <p class="mb-4 text-slate-400">
      Simply add
      <code class="text-xs text-pink-500 select-all">resizable: true</code> to
      your config to enable resizable columns:
    </p>
    <div id="resizable_columns" />
  </TCard>

  <TCard>
    <h6 class="mb-1 text-gray-800 text-15 dark:text-white">Loading State</h6>
    <p class="mb-4 text-slate-400">
      Grid.js renders a loading bar automatically while it waits for the data to
      be fetched. Here we are using an async function to demonstrate this
      behaviour (e.g. an async function can be a XHR call to a server backend)
    </p>
    <div id="table_loading_state" />
  </TCard>

  <TCard>
    <h6 class="mb-1 text-gray-800 text-15 dark:text-white">Fixed Header</h6>
    <p class="mb-4 text-slate-400">
      Simply add
      <code class="text-xs text-pink-500 select-all">height</code> and
      <code class="text-xs text-pink-500 select-all">fixedHeader</code> to your
      Grid.js config object to enable fixed header feature:
    </p>
    <div id="table_fixed_header" />
  </TCard>

  <TCard>
    <h6 class="mb-1 text-gray-800 text-15 dark:text-white">Hidden Columns</h6>
    <p class="mb-4 text-slate-400">
      Add
      <code class="text-xs text-pink-500 select-all">hidden: true</code> to the
      columns definition to hide them.
    </p>
    <div id="table_hidden_column" />
  </TCard>

  <TCard>
    <h6 class="mb-1 text-gray-800 text-15 dark:text-white">Cell formatting</h6>
    <p class="mb-4 text-slate-400">
      You can customize cells and format them at runtime using
      <code class="text-xs text-pink-500 select-all">formatter</code>
      property:
    </p>
    <div id="cell_formatting" />
  </TCard>
</template>
