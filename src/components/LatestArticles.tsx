import { articles } from '@/articles'
import Article from './Article'

const LatestArticles = () => {
  return (
    <section id="latest-articles" className="px-6 pt-20 pb-36 bg-neutral-light-gray">
      <div className="text-center">
        <h2 className="text-[32px] leading-tight font-light">Latest Articles</h2>
      </div>
      <div className="space-y-6 mt-8">
        {articles.map((article) => <Article key={article.title} {...article} />)}
      </div>
    </section>
  )
}

export default LatestArticles
