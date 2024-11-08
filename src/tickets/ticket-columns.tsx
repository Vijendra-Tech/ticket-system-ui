
export type TicketType = {
    id: number
    ticketNumber: string,
    summary: string,
    priority: string,
    severity: string,
    category: string,
    similarity: number,
    timeTaken: number,
}

export type ResultType = {
    id: number,
    predictedPriority: string,
    predictedSeverity: string,
    predictedCategory: string,
    predictedDuratiion: number,
}

