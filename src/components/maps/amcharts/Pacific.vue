<script type="te" setup>
import { onUnmounted, onMounted, ref } from 'vue';
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";

const chartEle = ref(null)

onMounted(() => {
    if (typeof window !== "undefined") {
        initPacific()
    }
})

const initPacific = () => {

    const element = document.getElementById("pacificMap");
    if (element) {
        let root = am5.Root.new("pacificMap");
        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        var chart = root.container.children.push(am5map.MapChart.new(root, {
            panX: "rotateX",
            panY: "none",
            projection: am5map.geoNaturalEarth1(),
            rotationX: -154.8
        }));

        var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
            geoJSON: am5geodata_worldLow
        }));

        polygonSeries.mapPolygons.template.setAll({
            tooltipText: "{name}",
            fillOpacity: 0.8
        });

        var colorSet = am5.ColorSet.new(root, {});

        var i = 0;
        polygonSeries.mapPolygons.template.adapters.add("fill", function (fill, target) {
            if (i < 10) {
                i++;
            }
            else {
                i = 0;
            }
            var dataContext = target.dataItem.dataContext;
            if (!dataContext.colorWasSet) {
                dataContext.colorWasSet = true;
                var color = am5.Color.saturate(colorSet.getIndex(i), 0.3);
                target.setRaw("fill", color);
                return color;
            }
            else {
                return fill;
            }
        })

        polygonSeries.mapPolygons.template.states.create("hover", { fillOpacity: 1 });

        var graticuleSeries = chart.series.push(am5map.GraticuleSeries.new(root, {}));
        graticuleSeries.mapLines.template.setAll({
            stroke: root.interfaceColors.get("alternativeBackground"),
            strokeOpacity: 0.1
        });

        chart.set("zoomControl", am5map.ZoomControl.new(root, {}));

        // Set clicking on "water" to zoom out
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
  <div id="pacificMap" style="height: 340px"></div>
</template>
