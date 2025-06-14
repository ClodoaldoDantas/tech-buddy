import { TechCard } from '@/features/technologies/tech-card'

export default function Home() {
  const technologies = [
    {
      id: 1,
      name: 'React',
      description:
        'Uma biblioteca JavaScript para construir interfaces de usuário.',
      rating: 4.5,
      totalReviews: 1200,
    },
    {
      id: 2,
      name: 'Next.js',
      description: 'Um framework React para aplicações web modernas.',
      rating: 4.8,
      totalReviews: 800,
    },
    {
      id: 3,
      name: 'Tailwind CSS',
      description: 'Um framework CSS utilitário para estilização rápida.',
      rating: 4.7,
      totalReviews: 600,
    },
    {
      id: 4,
      name: 'Node.js',
      description: 'Um ambiente de execução JavaScript no lado do servidor.',
      rating: 4.6,
      totalReviews: 900,
    },
    {
      id: 5,
      name: 'Django',
      description: 'Um framework web Python para desenvolvimento rápido.',
      rating: 4.4,
      totalReviews: 500,
    },
    {
      id: 6,
      name: 'Flask',
      description: 'Um microframework web Python leve e flexível.',
      rating: 4.3,
      totalReviews: 300,
    },
  ]

  return (
    <main className="max-w-7xl w-full mx-auto px-4">
      <header className="py-8 leading-relaxed">
        <h1 className="text-2xl text-zinc-900 font-bold">
          Bem-vindo a nossa plataforma
        </h1>

        <p className="text-zinc-600 text-lg">
          Descubra e analise as últimas tecnologias
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
        {technologies.map((tech) => (
          <TechCard data={tech} key={tech.id} />
        ))}
      </div>
    </main>
  )
}
