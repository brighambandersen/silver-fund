import React, { useState } from "react";

// import MsgBanner from "../shared/MsgBanner";
import {
  Content,
  TwoColWrapper,
  RightCol,
  LeftCol,
} from "../../components/SharedStyles";
import RiskVTRadio from "../../components/risk/RiskVTRadio";
import RiskWhatIfStocksTable from "../../components/risk/RiskWhatIfStocksTable";
import RiskWhatIfStatsTable from "../../components/risk/RiskWhatIfStatsTable";
import { RiskSubNavbar } from "../../components/nav/SubNavbars";

const RiskWhatIf = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [riskVT, setRiskVT] = useState("total");

  return (
    <>
      {/* <MsgBanner msg={errorMsg} setMsg={(value) => setErrorMsg(value)} /> */}
      <RiskSubNavbar />
      <Content>
        <TwoColWrapper>
          <LeftCol>
            <RiskVTRadio riskVT={riskVT} setRiskVT={setRiskVT} />
            <br />
            <br />
            <RiskWhatIfStocksTable
              setErrorMsg={(value) => setErrorMsg(value)}
            />
            <br />
            <br />
          </LeftCol>
          <RightCol>
            <RiskWhatIfStatsTable />
          </RightCol>
        </TwoColWrapper>
      </Content>
    </>
  );
};

export default RiskWhatIf;
