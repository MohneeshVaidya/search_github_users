import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Bar3D = ({ data }) => {
  const chartConfigs = {
    type: "bar3d",
    height: "300",
    width: "100%",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Most Forked",
        xAxisName: "Stars",
        yAxisName: "Forkes",
        xAxisNameFontSize: "16px",
        yAxisNameFontSize: "16px",
      },
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default Bar3D;
