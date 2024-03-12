<script type="ts" setup>
import { onUnmounted, onMounted, ref } from 'vue';
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";

const chartEle = ref(null)

onMounted(() => {
    if (typeof window !== "undefined") {
        loadMap()
    }
})

const loadMap = () => {

    const element = document.getElementById("chartDiv");

    if (element) {
        var root = am5.Root.new("chartDiv");

        root.setThemes([
            am5themes_Animated.new(root)
        ]);
        let chart = root.container.children.push(am5map.MapChart.new(root, {
            panX: "translateX",
            panY: "translateY",
            projection: am5map.geoMercator()
        }));

        let polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
            geoJSON: am5geodata_worldLow,
            exclude: ["AQ"]
        }));

        polygonSeries.mapPolygons.template.setAll({
            tooltipText: "{name}",
            toggleKey: "active",
            interactive: true,
            fill: "#d6dae6"
        });

        polygonSeries.mapPolygons.template.states.create("hover", {
            fill: root.interfaceColors.get("primaryButtonHover")
        });

        polygonSeries.mapPolygons.template.states.create("active", {
            fill: root.interfaceColors.get("primaryButtonHover")
        });

        let previousPolygon;

        polygonSeries.mapPolygons.template.on("active", function (active, target) {
            if (previousPolygon && previousPolygon != target) {
                previousPolygon.set("active", false);
            }
            if (target.get("active")) {
                polygonSeries.zoomToDataItem(target.dataItem);
            }
            else {
                chart.goHome();
            }
            previousPolygon = target;
        });

        chart.set("zoomControl", am5map.ZoomControl.new(root, {}));



        chart.chartContainer.get("background").events.on("click", function () {
            chart.goHome();
        })
        chartEle.value = chart
    }
}

onUnmounted(() => {
    chartEle.value?.dispose();
})
</script>

<template>
  <div id="chartDiv" style="height: 340px"></div>
</template>
