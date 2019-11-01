import { ReactNode } from "react";
import * as React from "react";
import MenuPage from "../menu/MenuPage";

export default class LandingPage extends React.Component<any> {

  render(): ReactNode {
    return (
      <MenuPage>
        <div>Landing page!!!!</div>
      </MenuPage>
    );
  }

}
