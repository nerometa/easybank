import { Article as ArticleType } from "@/models"

type ArticleProps = ArticleType

const Article = ({ image, author, title, description }: ArticleProps) => {
  return (
    <article className="rounded">
      <div><img className="rounded-t w-full h-[200px] object-cover" src={image} alt={title} /></div>
      <div className="rounded-b px-8 py-6 space-y-2 bg-white">
        <span className="text-xs text-neutral-gray-blue">By {author}</span>
        <h3 className="font-light leading-tight">{title}</h3>
        <p className="text-[13px] text-neutral-gray-blue leading-tight">{description}</p>
      </div>
    </article>
  )
}

export default Article
