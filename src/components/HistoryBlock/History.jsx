import {
    HistoryCard,
    MainStoryText,
    ParallaxText,
    ReviewsStory,
    SecondaryStoryText,
    TwoCardInOne,
} from ".";
import { AnimatedText, GradientText } from "..";
import { aboutHistory, costumerData, socialLink } from "../../lib";

export function History() {
    const [block1, block2, block3, block4, block5, block6] =
        aboutHistory.aboutHistoryMainText;

    const gradientTextBlock04 = [block4.line01, block4.line02];

    const gradientTextBlock05 = [
        block5.line01,
        block5.line02,
        block5.line03,
        block5.line04,
    ];
    const gradientTextBlock06 = [
        block6.line01,
        block6.line02,
        block6.line03,
    ];

    return (
        <section className="flex flex-col items-center justify-center">
            <HistoryCard
                title={aboutHistory.aboutHistoryCard.title}
                image={aboutHistory.aboutHistoryCard.image}
                subtitle={aboutHistory.aboutHistoryCard.subtitle}
                year={2018}
            />
            <MainStoryText className="py-12" data={block1} />
            <MainStoryText className="py-12" data={block2} year={2019} />
            <MainStoryText className="py-12" data={block3} year={2022} />
            <AnimatedText
                className="pt-24 max-w-5xl text-[5rem] xl:text-6xl lg:text-5xl xs:text-3xl"
                text={block4.title}
            />
            <GradientText
                className="text-8xl flex flex-col items-center justify-center text-center py-24 max-w-5xl text-[5rem] xl:text-6xl lg:text-5xl xs:text-3xl"
                lines={gradientTextBlock04}
            />
            <SecondaryStoryText
                image={block5.imageBefore}
                text={block5.beforeText}
                title={block5.alt}
            />

            <GradientText
                className="text-8xl flex flex-col items-center justify-center text-center py-24 max-w-5xl text-[5rem] xl:text-6xl lg:text-5xl xs:text-3xl"
                lines={gradientTextBlock05}
            />
            <SecondaryStoryText
                image={block5.imageAfter}
                text={block5.afterText}
                title={block5.alt}
                reverse
                year={2023}
            />

            {costumerData && (
                <ReviewsStory
                    className="py-24 max-w-5xl lg:pb-2"
                    data={costumerData}
                    textData={block5.tertiaryText}
                    gradientWord="rodziny"
                />
            )}
            <ParallaxText link={socialLink.instagram} className="pt-24" baseVelocity={-10} count={20}>Join us</ParallaxText>
            <ParallaxText link={socialLink.booksy} className="pb-24" baseVelocity={10} count={15}>See more reviews </ParallaxText>

            <TwoCardInOne card01={aboutHistory.card01} card02={aboutHistory.card02} alt="card-birthday-cake" year={2024} />
            <GradientText lines={gradientTextBlock06} className="text-8xl flex flex-col items-center justify-center text-center py-24 max-w-5xl text-[5rem] xl:text-6xl lg:text-5xl xs:text-3xl" />
        </section>
    );
}
