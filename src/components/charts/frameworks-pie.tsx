import { labelDict } from "@/data/label-dict";
import { CompletePieSvgProps, MayHaveLabel, ResponsivePie } from "@nivo/pie";
import React from "react";

interface Props extends Partial<CompletePieSvgProps<MayHaveLabel>> {
  colors: string[];
}

const FrameworksPie: React.FC<Props> = ({ data, colors }) => {
  if (!data) {
    return;
  }

  return (
    <div className="h-[300px] w-full">
      <ResponsivePie
        data={data}
        margin={{ top: 20, right: 60, bottom: 20, left: 60 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        colors={colors}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#999999"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        valueFormat={(value) => labelDict(value)}
        enableArcLabels={false}
        arcLinkLabelsStraightLength={9}
        arcLinkLabelsDiagonalLength={6}
      />
    </div>
  );
};

export default FrameworksPie;
