import Head from "next/head";
import { PropTypes } from 'prop-types';
import { AnimatedText, ArticleCard, Layout, TransitionPageEffect } from "../../components";
import { articles } from "../../lib/articlesData";


export default function Blog({ summary }) {
    return (
        <>
            <Head>
                <title>Blog | Ginger</title>
                <meta name="description" content="Teren Twojego Piękna w Warszawe" />
                <meta property="og:type" content="business.business" />
                <meta property="og:title" content="Blog | Ginger" />
                <meta property="og:url" content="https://ginger-beauty-zone.com" />
                <meta property="og:image" content="/meta-tag.jpg" />
                <meta property="og:description" content="Teren Twojego Piękna" />
                <meta property="business:contact_data:street_address" content="278 Grochowska" />
                <meta property="business:contact_data:locality" content="Warsaw" />
                <meta property="business:contact_data:postal_code" content="03-841" />
                <meta property="business:contact_data:country_name" content="Poland" />
                <meta name="description" content="Obejrzyj naszą galerię zdjęć, aby zobaczyć, jakie efekty osiągamy w naszym salonie Ginger Beauty Zone." />
            </Head>
            <TransitionPageEffect />
            <main className="flex w-full items-center justify-center" >
                <Layout className="w-full max-w-[1920px] mx-auto h-full bg-light dark:bg-dark inline-block z-0 p-32 xl:p-24 lg:p-16 lg:pt-0 md:p-12 sm:p-6 py-10">
                    <AnimatedText text="Ginger: Najnowsze informacje i porady"
                        className="mb-16 xl:text-6xl lg:text-5xl xs:text-3xl xs:mb-12" />
                    <ul className="grid grid-cols-2 gap-16 mb-16 md:grid-cols-1">
                        {articles.map((article) => (
                            <ArticleCard
                                key={article.slug}
                                title={article.title}
                                subtitle={article.subtitle}
                                image={article.imgURL}
                                summary={summary}
                                time={article.time}
                                link={`/blog/${article.slug}`}
                            />
                        ))}
                    </ul>
                </Layout>
            </main>
        </>
    )
}
Blog.propTypes = {
    summary: PropTypes.string,
};
