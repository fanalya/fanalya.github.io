import { FileEdit, Trash2 } from "lucide-vue-next";

export const InvoiceList = [
    { id: 1, invoiceId: "#TW15090251", name: "Paula Keenan", amount: "$873.96", date: "21 Jan, 2024", status: "Unpaid" },
    { id: 2, invoiceId: "#TW15090252", name: "Jaqueline Hammes", amount: "$1,203.74", date: "27 Oct, 2023", status: "Paid" },
    { id: 3, invoiceId: "#TW15090253", name: "Akeem Paucek", amount: "$1,423.10", date: "04 Feb, 2024", status: "Paid" },
    { id: 4, invoiceId: "#TW15090254", name: "Stephon Trantow", amount: "$1,420.99", date: "14 July, 2023", status: "Cancel" },
    { id: 5, invoiceId: "#TW15090255", name: "Domenic Tromp", amount: "$247.18", date: "11 April, 2023", status: "Refund" },
    { id: 6, invoiceId: "#TW15090256", name: "Marie Prohaska", amount: "$559.32", date: "03 Aug, 2023", status: "Paid" },
    { id: 7, invoiceId: "#TW15090257", name: "Ethel Corwin", amount: "$2,147.65", date: "15 Dec, 2024", status: "Unpaid" },
];

export const tableAction = [
    { value: "edit", icon: FileEdit, title: "Edit" },
    { value: "delete", icon: Trash2, title: "Delete" }
];

export const addresses = [
    {
        type: "Shipping Address",
        name: "Paula Keenan",
        address: "176 Arvid Crest Sheastad, IA",
        phone: "+(211) 0123 456 897"
    },
    {
        type: "Billing Address",
        name: "Paula Keenan",
        address: "176 Arvid Crest Sheastad, IA",
        phone: "+(211) 0123 456 897",
        taxNumber: "TAX No. 5415421"
    }
];

export const table_dataHeader = [
    { title: "#", value: "number" },
    { title: "Item Name", value: "item_name" },
    { title: "Rate", value: "rate" },
    { title: "Quantity", value: "quantity" },
    { title: "Amount", value: "amount" }
]
export const table_data = [
    {
        number: 1,
        item_name: "Webadmin - Premium Admin & Dashboard",
        rate: "$24.00",
        quantity: 2,
        amount: "$48"
    },
    {
        number: 2,
        item_name: "Webadmin - Admin & Dashboard",
        rate: "$25.00",
        quantity: 4,
        amount: "$100"
    },
    {
        number: 1,
        item_name: "Tocly - Admin & Dashboard",
        rate: "$16.00",
        quantity: 9,
        amount: "$144"
    },

];

export const subtotal = [
    { label: "Sub Total", value: "$292" },
    { label: "Estimated Tax (18%)", value: "$52.56", },
    { label: "Item Discounts (15%)", value: "-$43.8", },
    { label: "Shipping Charge", value: "$29" },
    { label: "Total Amount", value: "$329.76" },
];