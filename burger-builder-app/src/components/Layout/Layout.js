import React from "react";

import Auxiliar from "../../hoc/Auxiliar";

const layout = (props) => (
  <Auxiliar>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className="Content">{props.children}</main>
  </Auxiliar>
);

export default layout;
