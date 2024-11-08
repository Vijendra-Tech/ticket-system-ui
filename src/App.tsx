import './App.css'
import { DataTable } from './components/data-table'
import { SkeletonCard } from './components/ticket-skelton'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import { useToast } from './hooks/use-toast'
import * as React from 'react'
import { ResultColumns, TicketColumns } from './tickets/columns'
import { ResultType, TicketType } from './tickets/ticket-columns'

function App() {
  // const { toast } = useToast()
  const [loading, setLoading] = React.useState(false)
  const [data, setData] = React.useState<TicketType[]>([])

  const loadData = async () => {
    setLoading(true)
    setData([])
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Data Loaded')
        setLoading(false)
        setData(rowData)
      }, 5000)
    })
  }

  const rowData: Array<TicketType> = [
    {
      id: 1,
      ticketNumber: 'T001',
      summary: 'Summary 1',
      priority: 'High',
      severity: 'Critical',
      category: 'Category 1',
      similarity: 0.9,
      timeTaken: 10
    },
    {
      id: 2,
      ticketNumber: 'T002',
      summary: 'Summary 2',
      priority: 'Medium',
      severity: 'High',
      category: 'Category 2',
      similarity: 0.8,
      timeTaken: 20
    }
  ]
  const predictRowData: Array<ResultType> = [
    {
      id: 1,
      predictedPriority: 'High',
      predictedSeverity: 'Critical',
      predictedCategory: 'Category 1',
      predictedDuratiion: 10
    },
    {
      id: 2,
      predictedPriority: 'Medium',
      predictedSeverity: 'High',
      predictedCategory: 'Category 2',
      predictedDuratiion: 20
    }
  ]

  return (
    <div className="containe px-44 mt-16 h-screen">
      <div className="flex justify-start items-start">
        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-2xl font-semibold underline flex justify-center">
            Ticket Search and Comparison
          </h2>
          <Label>Name or Summary</Label>
          <Input placeholder="Enter Name or Summary" />
          <div>
            <Button
              onClick={async () => {
                await loadData()
              }}
            >
              Predict
            </Button>
          </div>
          {loading && <SkeletonCard />}
          {data && data.length > 0 && (
            <div className="flex flex-col gap-4">
              <Label className="text-xl font-bold">Top 5 Similar Tickets</Label>
              <DataTable columns={TicketColumns} data={data} />
              <Label className="text-xl font-bold"> Predicted Results</Label>
              <DataTable columns={ResultColumns} data={predictRowData} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
