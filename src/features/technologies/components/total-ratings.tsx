import { BotIcon } from 'lucide-react'

export function TotalRatings({ total }: { total: number }) {
  return (
    <div className="text-muted-foreground flex items-center gap-2">
      <BotIcon className="size-5" />

      {total === 1 ? (
        <span>{total} avaliação</span>
      ) : (
        <span>{total} avaliações</span>
      )}
    </div>
  )
}
