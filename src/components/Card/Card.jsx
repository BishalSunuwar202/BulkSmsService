import PropTypes from "prop-types";

const Card = (children) => {
  return (
    <>
      <div className="absolute bg-white text-black py-2 mb-2 px-4 rounded-lg transform -translate-x-1/2 -translate-y-1/2  font-small tracking-tighter w-56 h-28">
        <h1 className="font-bold">{children.text.title}</h1>
        <p className="font-semi text-xs">{children.text.descripttion}</p>
      </div>
    </>
  );
};

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
