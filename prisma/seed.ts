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
  {
    name: 'Vue.js',
    slug: 'vuejs',
    description: 'Um framework progressivo para construção de interfaces web.',
  },
  {
    name: 'Angular',
    slug: 'angular',
    description: 'Um framework TypeScript para aplicações web robustas.',
  },
  {
    name: 'Svelte',
    slug: 'svelte',
    description: 'Um framework reativo que compila para JavaScript eficiente.',
  },
  {
    name: 'Express',
    slug: 'express',
    description: 'Um framework minimalista para aplicações Node.js.',
  },
  {
    name: 'Laravel',
    slug: 'laravel',
    description: 'Um framework PHP elegante para desenvolvimento web.',
  },
  {
    name: 'Ruby on Rails',
    slug: 'rails',
    description: 'Um framework web completo baseado em Ruby.',
  },
  {
    name: 'Spring Boot',
    slug: 'springboot',
    description: 'Um framework Java para aplicações backend robustas.',
  },
  {
    name: 'ASP.NET Core',
    slug: 'aspnetcore',
    description: 'Um framework para construção de APIs e apps web com .NET.',
  },
  {
    name: 'GraphQL',
    slug: 'graphql',
    description: 'Uma linguagem de consulta para APIs flexíveis e eficientes.',
  },
  {
    name: 'TypeScript',
    slug: 'typescript',
    description: 'Um superconjunto de JavaScript com tipagem estática.',
  },
  {
    name: 'PostgreSQL',
    slug: 'postgresql',
    description: 'Um banco de dados relacional poderoso e open-source.',
  },
  {
    name: 'MongoDB',
    slug: 'mongodb',
    description: 'Um banco de dados NoSQL baseado em documentos.',
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
  'A segurança dessa tecnologia é uma prioridade.',
  'A facilidade de integração com APIs é um grande benefício.',
  'A capacidade de personalização é um dos pontos fortes dessa tecnologia.',
  'A performance em aplicações de grande escala é notável.',
  'A curva de aprendizado é rápida, o que facilita a adoção.',
  'A comunidade é muito colaborativa e sempre disposta a ajudar.',
  'A documentação é clara e bem estruturada, facilitando o aprendizado.',
  'A flexibilidade dessa tecnologia permite criar soluções inovadoras.',
  'A compatibilidade com diferentes sistemas operacionais é um grande diferencial.',
  'A adoção dessa tecnologia está crescendo rapidamente entre os desenvolvedores.',
  'A integração com outras ferramentas é muito bem suportada.',
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
    for (let i = 0; i < 20; i++) {
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
