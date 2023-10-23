import React from "react";
import { ResponsiveBar, type BarDatum } from "@nivo/bar";
import { labelDict } from "@/data/label-dict";

interface Props {
  data: BarDatum[];
  color: string;
}

const SkillsBar: React.FC<Props> = ({ data, color }) => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveBar
        data={data}
        keys={["level"]}
        indexBy="skill"
        margin={{ top: 10, right: 20, bottom: 30, left: 90 }}
        padding={0.3}
        groupMode="grouped"
        layout="horizontal"
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={[color]}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 5,
          tickRotation: 0,
          tickValues: [0, 1, 2, 3],
          format: (value) => labelDict(value),
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 5,
          tickRotation: 0,
        }}
        borderRadius={3}
        labelSkipWidth={12}
        valueFormat={(value) => labelDict(value)}
        labelSkipHeight={12}
        labelTextColor={"#fff"}
        role="application"
        enableGridX={false}
        enableGridY={false}
      />
    </div>
  );
};

export default SkillsBar;
