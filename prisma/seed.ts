import { type Prisma, PrismaClient } from '../src/app/generated/prisma'

const prisma = new PrismaClient()

const technologies: Prisma.TechnologyCreateInput[] = [
  {
    name: 'React',
    slug: 'react',
    description:
      'Uma biblioteca JavaScript para construir interfaces de usuário.',
  },
  {
    name: 'Next.js',
    slug: 'nextjs',
    description: 'Um framework React para aplicações web modernas.',
  },
  {
    name: 'Tailwind CSS',
    slug: 'tailwindcss',
    description: 'Um framework CSS utilitário para estilização rápida.',
  },
  {
    name: 'Node.js',
    slug: 'nodejs',
    description: 'Um ambiente de execução JavaScript no lado do servidor.',
  },
  {
    name: 'Django',
    slug: 'django',
    description: 'Um framework web Python para desenvolvimento rápido.',
  },
  {
    name: 'Flask',
    slug: 'flask',
    description: 'Um microframework web Python leve e flexível.',
  },
]

export async function main() {
  for (const tech of technologies) {
    await prisma.technology.create({
      data: tech,
    })
  }
}

main()
