// INSPIRATION DETAILS COMPONENT (STATELESS)
const InspirationDetails = ({ inspiration }) => {
    return (
        <div className="inspiration">
            <p>
                {inspiration.content} <em>#{inspiration.category}</em>
            </p>
            <span>({inspiration.source})</span>
            <br />
        </div>
    );
};

// EXPORT INSPIRATIONDETAILS COMPONENT
export default InspirationDetails;
