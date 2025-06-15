import { getTechnologies } from '../actions/get-technologies'
import { TechCard } from './tech-card'

type TechListProps = {
  searchTerm: string
}

export async function TechList({ searchTerm }: TechListProps) {
  const { technologies } = await getTechnologies(searchTerm)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
      {technologies.map((tech) => (
        <TechCard data={tech} key={tech.id} />
      ))}
    </div>
  )
}
