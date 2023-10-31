import PropTypes from "prop-types";

export function ServicesTitle({ additionalHeading }) {
    return (
        <h3
            className="text-3xl font-bold capitalize lg:text-center my-12">{additionalHeading}
        </h3>
    )
}

ServicesTitle.propTypes = {
    additionalHeading: PropTypes.string,
};
