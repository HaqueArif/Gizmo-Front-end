/* eslint-disable react/prop-types */
const Container = ({ children, className }) => {
  return (
    <div className={`w-full max-w-[1290px] mx-auto px-5 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
