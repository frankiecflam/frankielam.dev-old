import HeaderNavList from "./HeaderNavList";
import HeaderMobileBtn from "./HeaderMobileBtn";
import { useState } from "react";

const HeaderNav = () => {
  const [mobileNavActive, setMobileNavActive] = useState(false);

  const handleMobileBtnToggle = () => {
    setMobileNavActive((prevState) => !prevState);
  };

  return (
    <nav>
      <HeaderNavList mobileNavActive={mobileNavActive} />
      <HeaderMobileBtn
        onClick={handleMobileBtnToggle}
        mobileNavActive={mobileNavActive}
      />
    </nav>
  );
};

export default HeaderNav;
