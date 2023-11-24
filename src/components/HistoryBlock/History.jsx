import { HistoryCard, MainStoryText, StoryLine } from ".";
import { aboutHistoryCard, aboutHistoryMainText } from "../../lib";
import { AnimatedText } from "../AnimatedText";

export function History() {
    return (
        <section className="flex flex-col items-center justify-center">
            <HistoryCard
                title={aboutHistoryCard.title}
                image={aboutHistoryCard.image}
                subtitle={aboutHistoryCard.subtitle}
            />
            <StoryLine year={2018} />
            <MainStoryText className="py-12" data={aboutHistoryMainText[0]} />
            <StoryLine />
            <MainStoryText className="py-12" data={aboutHistoryMainText[1]} />
            <StoryLine year={2019} />
            <MainStoryText className="py-12" data={aboutHistoryMainText[2]} />
            <StoryLine year={2022} />
            <AnimatedText
                className="pt-24 max-w-5xl text-[5rem]"
                text="Koniec września... Przyjmuję decyzję - czas! "
            />
            <h5
                className="w-full font-bold capitalize text-8xl flex items-center justify-center text-center
                py-24 max-w-5xl text-[5rem] bg-gradient-to-r from-[#7053ff] to-[#e0658c] bg-clip-text"
                style={{ WebkitBackgroundClip: "text", color: "transparent" }}
            >
                Miesiąc do otwarcia Ginger...
            </h5>
        </section>
    );
}
History.propTypes = {};
