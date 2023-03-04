import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Pie3D = ({ data }) => {
  const chartConfigs = {
    type: "pie3d",
    height: "300",
    width: "100%",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Languages",
        theme: "fusion",
        pieRadius: "40%",
        decimals: "0",
      },
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default Pie3D;
