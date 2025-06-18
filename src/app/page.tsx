import { SearchForm } from '@/features/technologies/components/search-form'
import { TechList } from '@/features/technologies/components/tech-list'
import { TechListSkeleton } from '@/features/technologies/components/tech-list-skeleton'
import { Suspense } from 'react'

type HomeProps = {
  searchParams?: Promise<{ search?: string }>
}

export default async function Home(props: HomeProps) {
  const searchParams = await props.searchParams
  const searchTerm = searchParams?.search || ''

  return (
    <main className="max-w-7xl w-full mx-auto px-4">
      <header className="py-8 leading-relaxed">
        <h1 className="text-2xl text-zinc-900 font-bold">
          Bem-vindo a nossa plataforma
        </h1>

        <p className="text-muted-foreground text-lg">
          Descubra e analise as últimas tecnologias
        </p>
      </header>

      <SearchForm />

      <Suspense key={searchTerm} fallback={<TechListSkeleton />}>
        <TechList searchTerm={searchTerm} />
      </Suspense>
    </main>
  )
}
