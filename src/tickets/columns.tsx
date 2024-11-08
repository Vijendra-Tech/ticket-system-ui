import { ColumnDef } from "@tanstack/react-table"
import { ResultType, TicketType } from "./ticket-columns"

export const  TicketColumns:ColumnDef<TicketType>[] =[
    {
        header: 'Ticket Number',
        accessorKey: 'ticketNumber',
    },
    {
        header: 'Summary',
        accessorKey: 'summary',
    },
    {
        header: 'Priority',
        accessorKey: 'priority',
    },
    {
        header: 'Severity',
        accessorKey: 'severity',
    },
    {
        header: 'Category',
        accessorKey: 'category',
    },
    {
        header: 'Similarity',
        accessorKey: 'similarity',
    },
    {
        header: 'Time Taken',
        accessorKey: 'timeTaken',
    },
]

export const ResultColumns:ColumnDef<ResultType>[] =[
    {
        header: 'Predicted Priority',
        accessorKey: 'predictedPriority',
    },
    {
        header: 'Predicted Severity',
        accessorKey: 'predictedSeverity',
    },
    {
        header: 'Predicted Category',
        accessorKey: 'predictedCategory',
    },
    {
        header: 'Predicted Duration',
        accessorKey: 'predictedDuratiion',
    },
]