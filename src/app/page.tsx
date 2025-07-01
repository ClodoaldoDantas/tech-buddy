import { PageHeader } from '@/components/page-header'
import { SearchForm } from '@/features/technologies/components/search-form'
import { TechList } from '@/features/technologies/components/tech-list'
import { TechListSkeleton } from '@/features/technologies/components/tech-list-skeleton'
import { Suspense } from 'react'

type HomeProps = {
  searchParams?: Promise<{ search?: string; page?: string }>
}

export default async function Home(props: HomeProps) {
  const searchParams = await props.searchParams
  const searchTerm = searchParams?.search || ''
  const page = Number(searchParams?.page) || 1

  return (
    <main className="max-w-7xl w-full mx-auto px-4">
      <PageHeader
        title="Bem-vindo a nossa plataforma"
        description="Descubra e analise as últimas tecnologias"
      />

      <SearchForm />

      <Suspense key={searchTerm} fallback={<TechListSkeleton />}>
        <TechList searchTerm={searchTerm} currentPage={page} />
      </Suspense>
    </main>
  )
}
