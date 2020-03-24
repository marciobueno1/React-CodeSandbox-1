import * as React from "react";

import { Button, ButtonProps } from "semantic-ui-react";

type OwnProps = {
  titulo: string;
  meuClick: (message: string) => void;
};

type Props = OwnProps & ButtonProps;

export const CompReusavel = ({
  titulo,
  meuClick,
  ...outrasProps
}: Props): JSX.Element => (
  <Button onClick={() => meuClick(titulo)} {...outrasProps}>
    {titulo}
  </Button>
);
