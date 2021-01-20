import React from "react";
import { FlexRowSingleline } from "../elements/Flex";
import GitIcon from "../elements/GitIcon";
import Link from "../elements/Link";
import Spacer from "../elements/Spacer";
import { MarginlessParagraph } from "../elements/Typography";

const SourceLink = () => (
  <Link
    href="https://github.com/apata/sensor-panel-web#sensor-panel"
    rel="noreferrer noopener"
    target="_blank"
  >
    <FlexRowSingleline>
      <MarginlessParagraph>View source on Github</MarginlessParagraph>
      <Spacer widthSpacing="d1" />
      <GitIcon />
    </FlexRowSingleline>
  </Link>
);

export default SourceLink;
