import React from "react";
import {
  InlineDescriptionLabel,
  RadioOptionLabel,
  RadioInput,
} from "../shared/SharedStyles";
import { UnitTypeWrapper } from "./RiskUnitRadio";

export const RiskAggrRadio = (props) => (
  <UnitTypeWrapper>
    <InlineDescriptionLabel>Aggregation Option:</InlineDescriptionLabel>
    <RadioOptionLabel>
      <RadioInput
        value="individual"
        checked={props.aggrType === "individual"}
        onChange={(e) => props.setAggrType(e.target.value)}
      />
      Individual
    </RadioOptionLabel>
    <RadioOptionLabel>
      <RadioInput
        value="sum"
        checked={props.aggrType === "sum"}
        onChange={(e) => props.setAggrType(e.target.value)}
      />
      Sum
    </RadioOptionLabel>
  </UnitTypeWrapper>
);

export default RiskAggrRadio;