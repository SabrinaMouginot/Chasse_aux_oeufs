import PropTypes from "prop-types";

function Egg({ position, onFind }) {
    return (
        <div
            style={{
                position: "absolute",
                top: position.top,
                left: position.left,
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                cursor: "pointer",
                zIndex: 10, // S'assure que l'œuf est au-dessus des fleurs
            }}
            onClick={onFind}
        >
            🥚
        </div>

    );
}

Egg.propTypes = {
    position: PropTypes.shape({
        top: PropTypes.string.isRequired,
        left: PropTypes.string.isRequired,
    }).isRequired,
    onFind: PropTypes.func.isRequired,
};

export default Egg;
