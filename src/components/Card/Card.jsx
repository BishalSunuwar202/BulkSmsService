import PropTypes from "prop-types";

const Card = (children) => {
  return (
    <>
      <div className=" bg-white text-black rounded-lg font-small tracking-tighter flex flex-col items-center p-1">
        <h1 className="font-semibold text-lg md:font-bold">{children.text.title}</h1>
        <p className="font-semi text-xs md:text-sm ">{children.text.descripttion}</p>
      </div>
    </>
  );
};

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
