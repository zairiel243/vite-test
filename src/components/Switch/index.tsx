import { useContext, useState } from "react";

import { GlobalContext } from "../../context/GlobalContext";
import { StyledLabel } from "./styles";

function Switch() {
  const [isToggled, setIsToggled] = useState(false)
  const { setIsDarkMode } = useContext(GlobalContext)

  const onToggle = () => {
    setIsToggled(!isToggled)
    setIsDarkMode((isDarkMode: Boolean) => !isDarkMode)
  };

  return (
    <StyledLabel>
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="switch" />
    </StyledLabel>
  );
}
export default Switch;