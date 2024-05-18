import Divider from "@/components/atoms/Divider";
import Label from "@/components/atoms/Label";
import { BasePorps } from "@/components/Types";
import React from "react";

const AuthTitle: React.FC<BasePorps> = ({ children, css, className }) => {
  return (
    <div>
      <Label css={css}>{children}</Label>
      <Divider />
    </div>
  );
};

export default AuthTitle;