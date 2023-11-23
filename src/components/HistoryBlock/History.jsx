import { PropTypes } from 'prop-types';
import { HistoryCard, StoryLine } from '.';
import { aboutHistory } from '../../lib';

export function History() {
    return (
        <>
            <HistoryCard
                title={aboutHistory.title}
                image={aboutHistory.image}
                link='/about/history'
                subtitle={aboutHistory.subtitle}
            />
            <StoryLine year={2019} />
        </>
    )
}

History.propTypes = {

};