import { getChartColorsArray } from "@/app/utils.ts";
import { TableHeaderType } from "@/app/components/tables/types";
import { MoveUpRight, MoveDownLeft } from "lucide-vue-next";
import {
  avatar10,
  avatar2,
  avatar3,
  avatar4,
  avatar5
} from "@/assets/images/users/utils";
import { user1, user2, user3 } from "@/assets/images/users/utils.ts";
//  Total Employee
export const totalEmployeeChart = {
  series: [10],
  chartOptions: {
    chart: {
      height: 110,
      type: "radialBar",
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "50%"
        },
        track: {
          margin: 2
        },
        dataLabels: {
          show: false
        }
      }
    },
    grid: {
      padding: {
        top: -15,
        bottom: -15
      }
    },
    stroke: {
      lineCap: "round"
    },
    labels: ["Total Employee"],
    colors: getChartColorsArray('["bg-custom-500"]')
  }
};

//  Total Application
export const totalApplicationChart = {
  series: [60],
  chartOptions: {
    chart: {
      height: 110,
      type: "radialBar",
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "50%"
        },
        track: {
          margin: 2
        },
        dataLabels: {
          show: false
        }
      }
    },
    grid: {
      padding: {
        top: -15,
        bottom: -15
      }
    },
    stroke: {
      lineCap: "round"
    },
    labels: ["Total Employee"],
    colors: getChartColorsArray('["bg-purple-500"]')
  }
};

//  Hired Candidates
export const hiredCandidatesChart = {
  series: [25],
  chartOptions: {
    chart: {
      height: 110,
      type: "radialBar",
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "50%"
        },
        track: {
          margin: 2
        },
        dataLabels: {
          show: false
        }
      }
    },
    grid: {
      padding: {
        top: -15,
        bottom: -15
      }
    },
    stroke: {
      lineCap: "round"
    },
    labels: ["Total Employee"],
    colors: getChartColorsArray('["bg-green-500"]')
  }
};

//  Rejected Candidates
export const rejectedCandidatesChart = {
  series: [75],
  chartOptions: {
    chart: {
      height: 110,
      type: "radialBar",
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "50%"
        },
        track: {
          margin: 2
        },
        dataLabels: {
          show: false
        }
      }
    },
    grid: {
      padding: {
        top: -15,
        bottom: -15
      }
    },
    stroke: {
      lineCap: "round"
    },
    labels: ["Total Employee"],
    colors: getChartColorsArray('["bg-red-500"]')
  }
};

//Application Received
export const applicationReceivedChart = {
  series: [
    {
      name: "Total Application",
      type: "area",
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
    },
    {
      name: "Hired Candidates",
      type: "line",
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
    }
  ],
  chartOptions: {
    chart: {
      height: 260,
      type: "line",
      stacked: false,
      margin: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      },
      toolbar: {
        show: false
      }
    },
    stroke: {
      width: [2, 2],
      curve: "smooth"
    },
    plotOptions: {
      bar: {
        columnWidth: "50%"
      }
    },

    fill: {
      opacity: [0.03, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100]
      }
    },
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    colors: getChartColorsArray('["bg-custom-500", "bg-green-500"]'),
    markers: {
      size: 0
    },
    grid: {
      padding: {
        top: -15,
        right: 0
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y: any) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
        }
      }
    }
  }
};

// Table
export const tableHeader: TableHeaderType[] = [
  { type: "check", value: "checked", justifyCenter: true },
  { title: "ID", value: "ticket" },
  { title: "Name", value: "user" },
  { title: "Designation", value: "role" },
  { title: "Performance", value: "status" },
  { title: "Status", value: "isActive" },
  { title: "Action", value: "action" }
];

export const tableData = [
  {
    id: "productsCheck1",
    ticket: "TW-1001",
    user: {
      name: "Kristen Redden",
      email: "kredden@tailwick.com",
      avatar: avatar10
    },
    role: "Designer",
    status: "Good",
    statusColor: "text-green-500",
    isActive: "Active"
  },
  {
    id: "productsCheck2",
    ticket: "TW-1002",
    user: {
      name: "Howard George",
      email: "george@tailwick.com",
      avatar: avatar2
    },
    role: "ASP.Net Developer",
    status: "Low",
    statusColor: "text-red-500",
    isActive: "Active"
  },
  {
    id: "productsCheck3",
    ticket: "TW-1003",
    user: {
      name: "Laura Carlson",
      email: "carlson15@tailwick.com",
      avatar: avatar3
    },
    role: "React Developer",
    status: "Good",
    statusColor: "text-green-500",
    isActive: "Active"
  },
  {
    id: "productsCheck4",
    ticket: "TW-1004",
    user: {
      name: "Joseph Hawkins",
      email: "joseph@tailwick.com",
      avatar: avatar4
    },
    role: "Angular Developer",
    status: "Good",
    statusColor: "text-green-500",
    isActive: "Disabled"
  },
  {
    id: "productsCheck5",
    ticket: "TW-1005",
    user: {
      name: "Jeremy Clifford",
      email: "joseph@tailwick.com",
      avatar: avatar5
    },
    role: "UI / UX Designer",
    status: "Low",
    statusColor: "text-red-500",
    isActive: "Disabled"
  }
];

//Stacked Columns
export const totalProjectChart = {
  series: [
    {
      name: "New",
      data: [44, 55, 41, 67, 22, 43, 14, 55, 41]
    },
    {
      name: "Pending",
      data: [13, 23, 20, 8, 13, 27, 8, 20, 8]
    },
    {
      name: "Completed",
      data: [11, 17, 15, 15, 21, 14, 24, 11, 17]
    },
    {
      name: "Rejected",
      data: [21, 7, 25, 13, 22, 8, 13, 7, 25]
    }
  ],
  chartOptions: {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      zoom: {
        enabled: true
      },
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 2,
        columnWidth: "25%"
      }
    },
    grid: {
      padding: {
        top: -15,
        bottom: 5,
        right: 0
      }
    },
    xaxis: {
      categories: ["01", "02", "03", "04", "05", "06", "07", "08", "09"]
    },
    dataLabels: {
      enabled: false
    },
    colors: getChartColorsArray(
      '["bg-custom-500", "bg-yellow-500", "bg-green-400", "bg-red-400"]'
    ),
    legend: {
      position: "bottom"
    },
    fill: {
      opacity: 1
    }
  }
};

// intervie data
export const interviews = [
  {
    user: {
      avatar: user1,
      name: "James Krogman",
      email: "james@tailwick.com",
      profileLink: "#!"
    },
    date: "25 Nov",
    time: "02:41 PM",
    label: {
      text: "confirm",
      color: "green"
    }
  },
  {
    user: {
      avatar: user2,
      name: "Michael Scott",
      email: "michaelScott@tailwick.com",
      profileLink: "#!"
    },
    date: "05 Dec",
    time: "01:23 PM",
    label: {
      text: "Re-scheduled",
      color: "custom"
    }
  },
  {
    user: {
      avatar: user3,
      name: "Denise Ledford",
      email: "ledford@tailwick.com",
      profileLink: "#!"
    },
    date: "27 Nov",
    time: "11:59 PM",
    label: {
      text: "Scheduled",
      color: "sky"
    }
  },
  {
    user: {
      avatar: avatar5,
      name: "Gladys Smith",
      email: "gap-4@tailwick.com",
      profileLink: "#!"
    },
    date: "7 Dec",
    time: "05:19 PM",
    label: {
      text: "cancelled",
      color: "red"
    }
  }
];

// Recent Payroll data
export const recentData = [
  {
    iconColor: "text-red-500",
    icon: MoveUpRight,
    name: "Christopher Horn",
    amount: "$145.32",
    status: {
      text: "Paid",
      color: "green"
    }
  },
  {
    iconColor: "text-green-500",
    icon: MoveDownLeft,
    name: "Richard Peters",
    amount: "$4512.99",
    status: {
      text: "Pending",
      color: "yellow"
    }
  },
  {
    iconColor: "text-green-500",
    icon: MoveDownLeft,
    name: "James Perez",
    amount: "$879.99",
    status: {
      text: "Paid",
      color: "green"
    }
  },
  {
    iconColor: "text-red-500",
    icon: MoveUpRight,
    name: "Myrtle Velez",
    amount: "$978.14",
    status: {
      text: "Cancelled",
      color: "red"
    }
  },
  {
    iconColor: "text-green-500",
    icon: MoveDownLeft,
    name: "Brad Castillo",
    amount: "$412.59",
    status: {
      text: "Pending",
      color: "yellow"
    }
  },
  {
    iconColor: "text-green-500",
    icon: MoveDownLeft,
    name: "Robert Jump",
    amount: "$666.99",
    status: {
      text: "Paid",
      color: "green"
    }
  },
  {
    iconColor: "text-red-500",
    icon: MoveUpRight,
    name: "Myrtle Velez",
    amount: "$978.14",
    status: {
      text: "Cancelled",
      color: "red"
    }
  },
  {
    iconColor: "text-red-500",
    icon: MoveUpRight,
    name: "Christopher Horn",
    amount: "$145.32",
    status: {
      text: "Paid",
      color: "green"
    }
  },
  {
    iconColor: "text-green-500",
    icon: MoveDownLeft,
    name: "Richard Peters",
    amount: "$4512.99",
    status: {
      text: "Pending",
      color: "yellow"
    }
  },
  {
    iconColor: "text-green-500",
    icon: MoveDownLeft,
    name: "James Perez",
    amount: "$879.99",
    status: {
      text: "Paid",
      color: "green"
    }
  }
];

// Upcoming Scheduled
export const scheduled = [
  {
    date: {
      day: 28,
      month: "July"
    },
    title: "Meeting with Designer",
    time: "09:57 AM",
    createdBy: "Admin"
  },
  {
    date: {
      day: 8,
      month: "June"
    },
    title: "Developing Line Managers Conference",
    time: "10:54 AM",
    createdBy: "HR"
  },
  {
    date: {
      day: 17,
      month: "July"
    },
    title: "Airplane in Las Vegas",
    time: "12:00 PM",
    createdBy: "HR"
  },
  {
    date: {
      day: 11,
      month: "Nov"
    },
    title: "Hospitality Project Discuses",
    createdBy: "Admin"
  },
  {
    date: {
      day: 20,
      month: "Nov"
    },
    title: "Gartner Digital Workplace",
    time: "03:49 PM",
    createdBy: "HR"
  },
  {
    date: {
      day: 4,
      month: "Dec"
    },
    title: "Nordic People Analytics",
    time: "11:00 AM",
    createdBy: "Admin"
  },
  {
    date: {
      day: 17,
      month: "Jan"
    },
    title: "CIPD Festival of Work",
    time: "01:29 PM",
    createdBy: "HR"
  },
  {
    date: {
      day: 3,
      month: "Feb"
    },
    title: "HRO Today Forum",
    time: "02:15 PM",
    createdBy: "Admin"
  }
];
