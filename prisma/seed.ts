import { faker } from '@faker-js/faker'
import { createId } from '@paralleldrive/cuid2'
import { type Prisma, PrismaClient } from '../src/app/generated/prisma'

const prisma = new PrismaClient()

const users: Prisma.UserCreateInput[] = Array.from({ length: 10 }, (_, i) => ({
  id: createId(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
}))

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

const comments: string[] = [
  'Essa tecnologia é incrível! Estou aprendendo muito.',
  'A comunidade é muito ativa e sempre disposta a ajudar.',
  'Adoro como essa tecnologia facilita o desenvolvimento.',
  'A documentação é excelente, muito fácil de seguir.',
  'Estou impressionado com a performance dessa tecnologia.',
  'A integração com outras ferramentas é muito boa.',
  'Essa tecnologia tem uma curva de aprendizado suave.',
  'A flexibilidade dessa tecnologia é um dos seus maiores pontos fortes.',
  'Estou ansioso para ver como essa tecnologia evolui nos próximos anos.',
  'A adoção dessa tecnologia está crescendo rapidamente.',
  'A compatibilidade com diferentes plataformas é um grande diferencial.',
  'A comunidade de desenvolvedores é muito acolhedora.',
  'A quantidade de recursos e bibliotecas disponíveis é impressionante.',
  'A simplicidade dessa tecnologia é um dos seus maiores atrativos.',
  'A escalabilidade dessa tecnologia é excelente.',
]

export async function main() {
  for (const user of users) {
    await prisma.user.create({
      data: user,
    })
  }

  for (const tech of technologies) {
    await prisma.technology.create({
      data: tech,
    })
  }

  const dbTechnologies = await prisma.technology.findMany()
  const dbUsers = await prisma.user.findMany()

  for (const tech of dbTechnologies) {
    for (let i = 0; i < 10; i++) {
      const user = dbUsers[i % dbUsers.length]

      await prisma.review.create({
        data: {
          rating: faker.number.int({ min: 1, max: 5 }),
          comment: faker.helpers.arrayElement(comments),
          userId: user.id,
          technologyId: tech.id,
        },
      })
    }
  }
}

main()
