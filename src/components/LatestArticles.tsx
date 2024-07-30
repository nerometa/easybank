import { articles } from '@/articles'
import Article from './Article'

const LatestArticles = () => {
  return (
    <section id="latest-articles" className="bg-neutral-light-gray">
      <div className="max-w-6xl mx-auto px-6 pt-[5.875rem] lg:pt-[4.75rem] pb-[8.125rem]">
        <div className="text-center lg:text-start">
          <h2 className="text-primary-dark-blue text-[32px] lg:text-[2.5rem] lg:leading-normal leading-tight font-light">Latest Articles</h2>
        </div>
        <div className="space-y-6 mt-8 lg:space-y-0 lg:flex lg:gap-8 lg:mt-10">
          {articles.map((article) => <Article key={article.title} {...article} />)}
        </div>
      </div>
    </section>
  )
}

export default LatestArticles
