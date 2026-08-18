var wms_layers = [];


        var lyr_Argenmap_0 = new ol.layer.Tile({
            'title': 'Argenmap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG:3857@png/{z}/{x}/{-y}.png'
            })
        });
var format_punto_test_1 = new ol.format.GeoJSON();
var features_punto_test_1 = format_punto_test_1.readFeatures(json_punto_test_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_punto_test_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_punto_test_1.addFeatures(features_punto_test_1);
var lyr_punto_test_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_punto_test_1, 
                style: style_punto_test_1,
                popuplayertitle: 'punto_test',
                interactive: true,
                title: '<img src="styles/legend/punto_test_1.png" /> punto_test'
            });

lyr_Argenmap_0.setVisible(true);lyr_punto_test_1.setVisible(true);
var layersList = [lyr_Argenmap_0,lyr_punto_test_1];
lyr_punto_test_1.set('fieldAliases', {'test': 'test', 'descripc': 'descripc', });
lyr_punto_test_1.set('fieldImages', {'test': '', 'descripc': '', });
lyr_punto_test_1.set('fieldLabels', {'test': 'no label', 'descripc': 'no label', });
lyr_punto_test_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});