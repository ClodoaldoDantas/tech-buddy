import { Pagination } from '@/components/pagination'
import { TECHNOLOGIES_PER_PAGE } from '../../../utils/constants'
import { getTechnologies } from '../actions/get-technologies'
import { TechCard } from './tech-card'

type TechListProps = {
  searchTerm: string
  currentPage: number
}

export async function TechList({ searchTerm, currentPage }: TechListProps) {
  const { technologies, totalCount } = await getTechnologies({
    term: searchTerm,
    page: currentPage,
  })

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
        {technologies.map((tech) => (
          <TechCard data={tech} key={tech.id} />
        ))}
      </div>

      <Pagination
        page={currentPage}
        perPage={TECHNOLOGIES_PER_PAGE}
        totalCount={totalCount}
      />
    </>
  )
}
