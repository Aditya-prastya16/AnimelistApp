import React from "react";

const HeaderMenu = ({ title }) => {
  return (
    <div className="flex items-center justify-between p-12 my-10 shadow-md rounded-lg" style={{ backgroundImage: `url('/banner.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center', color: '#FFF' }}>
      <h3 className="text-xl font-bold items-center w-full text-center text-color-dark">
        {title}
      </h3>
    </div>
  );
};

export default HeaderMenu;
