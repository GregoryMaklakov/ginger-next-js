import { PropTypes } from 'prop-types';
import { StoryLine } from '..';

export function MainStoryText({ data, className, year }) {
    const { paragraph01, paragraph02, paragraph03 } = data;

    return (
        <>
            <div className={`${className} history-text-main flex flex-col items-center justify-center gap-4 max-w-2xl text-center font-semibold text-2xl sm:text-base`}>
                {paragraph01 && <p>{paragraph01}</p>}
                {paragraph02 && <p>{paragraph02}</p>}
                {paragraph03 && <p>{paragraph03}</p>}
            </div>
            <StoryLine year={year} />
        </>
    )
}

MainStoryText.propTypes = {
    className: PropTypes.string,
    year: PropTypes.number,
    data: PropTypes.shape({
        paragraph01: PropTypes.string,
        paragraph02: PropTypes.string,
        paragraph03: PropTypes.string,
    }),
};