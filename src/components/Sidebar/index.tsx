import React from "react";

import Button from "../Button";

import iconPlus from "../../assets/images/plus.png";

import * as S from "./styled";

const Sidebar = () => (
  <S.SideBarWrapper>
    <S.SideBarList>
      <S.SideBarItem>?</S.SideBarItem>
    </S.SideBarList>

    <Button icon={iconPlus} onClick={() => {}} />
  </S.SideBarWrapper>
);

export default Sidebar;
