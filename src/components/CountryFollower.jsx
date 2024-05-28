/* eslint-disable react/prop-types */

import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

const data = [
  { value: 5, label: "Nepal", color: "#ff6ec7" },
  { value: 10, label: "United State", color: "#ff5ccd" },
  { value: 13, label: "Israel", color: "#ff007f" },
  { value: 20, label: "South Africa", color: "#e0218a" },
];

const size = {
  width: 400,
  height: 200,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function PieChartWithCenterLabel() {
  return (
    <>
      <PieChart series={[{ data, innerRadius: 70 }]} {...size}>
        <PieCenterLabel>Users</PieCenterLabel>
      </PieChart>
    </>
  );
}
