import { PropTypes } from 'prop-types';

export function SecondaryStoryText({ className }) {
    return (
        <div className={`${className} flex items-center justify-between`}>
            <div>image</div>
            <p>text</p>
        </div>
    )
}

SecondaryStoryText.propTypes = {
    className: PropTypes.string,
};