import { Article as ArticleType } from "@/models"
import { Link } from "@radix-ui/themes"

type ArticleProps = ArticleType

const Article = ({ image, author, title, description }: ArticleProps) => {
  return (
    <article className="rounded">
      <div><img className="rounded-t w-full h-[200px] object-cover" src={image} alt={title} /></div>
      <div className="rounded-b px-8 py-6 space-y-2 bg-white lg:px-6">
        <span className="text-xs lg:text-[10px] text-neutral-gray-blue">By {author}</span>
        <h3 className="font-light leading-tight">
          <Link href="#" className="text-black hover:text-primary-lime-green no-underline transition-colors duration-150 ease-out">{title}</Link>
        </h3>
        <p className="text-[13px] text-neutral-gray-blue leading-tight">{description}</p>
      </div>
    </article>
  )
}

export default Article
