type PageHeaderProps = {
  title: string
  description: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="py-6 sm:py-8 leading-relaxed">
      <h1 className="text-xl sm:text-2xl text-zinc-900 font-bold">{title}</h1>

      <p className="text-muted-foreground text-base sm:text-lg">
        {description}
      </p>
    </header>
  )
}
