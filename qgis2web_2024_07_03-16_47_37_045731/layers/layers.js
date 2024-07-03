var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_1 = format_ADMINISTRASIDESA_AR_25K_1.readFeatures(json_ADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_1.addFeatures(features_ADMINISTRASIDESA_AR_25K_1);
var lyr_ADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_1, 
                style: style_ADMINISTRASIDESA_AR_25K_1,
                popuplayertitle: "ADMINISTRASIDESA_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_1.png" /> ADMINISTRASIDESA_AR_25K'
            });
var format_RumahSakit_2 = new ol.format.GeoJSON();
var features_RumahSakit_2 = format_RumahSakit_2.readFeatures(json_RumahSakit_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahSakit_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahSakit_2.addFeatures(features_RumahSakit_2);
var lyr_RumahSakit_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahSakit_2, 
                style: style_RumahSakit_2,
                popuplayertitle: "Rumah Sakit",
                interactive: true,
                title: '<img src="styles/legend/RumahSakit_2.png" /> Rumah Sakit'
            });
var format_Pasar_3 = new ol.format.GeoJSON();
var features_Pasar_3 = format_Pasar_3.readFeatures(json_Pasar_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pasar_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pasar_3.addFeatures(features_Pasar_3);
var lyr_Pasar_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pasar_3, 
                style: style_Pasar_3,
                popuplayertitle: "Pasar",
                interactive: true,
                title: '<img src="styles/legend/Pasar_3.png" /> Pasar'
            });
var format_Hotel_4 = new ol.format.GeoJSON();
var features_Hotel_4 = format_Hotel_4.readFeatures(json_Hotel_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hotel_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hotel_4.addFeatures(features_Hotel_4);
var lyr_Hotel_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hotel_4, 
                style: style_Hotel_4,
                popuplayertitle: "Hotel",
                interactive: true,
                title: '<img src="styles/legend/Hotel_4.png" /> Hotel'
            });
var format_Mall_5 = new ol.format.GeoJSON();
var features_Mall_5 = format_Mall_5.readFeatures(json_Mall_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mall_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mall_5.addFeatures(features_Mall_5);
var lyr_Mall_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mall_5, 
                style: style_Mall_5,
                popuplayertitle: "Mall",
                interactive: true,
                title: '<img src="styles/legend/Mall_5.png" /> Mall'
            });
var format_JALAN_LN_25K_6 = new ol.format.GeoJSON();
var features_JALAN_LN_25K_6 = format_JALAN_LN_25K_6.readFeatures(json_JALAN_LN_25K_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_25K_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_25K_6.addFeatures(features_JALAN_LN_25K_6);
var lyr_JALAN_LN_25K_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LN_25K_6, 
                style: style_JALAN_LN_25K_6,
                popuplayertitle: "JALAN_LN_25K",
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_25K_6.png" /> JALAN_LN_25K'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_1.setVisible(true);lyr_RumahSakit_2.setVisible(true);lyr_Pasar_3.setVisible(true);lyr_Hotel_4.setVisible(true);lyr_Mall_5.setVisible(true);lyr_JALAN_LN_25K_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ADMINISTRASIDESA_AR_25K_1,lyr_RumahSakit_2,lyr_Pasar_3,lyr_Hotel_4,lyr_Mall_5,lyr_JALAN_LN_25K_6];
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_RumahSakit_2.set('fieldAliases', {'id': 'id', 'Keterangan': 'Keterangan', });
lyr_Pasar_3.set('fieldAliases', {'id': 'id', 'Keterangan': 'Keterangan', });
lyr_Hotel_4.set('fieldAliases', {'id': 'id', 'Keterangan': 'Keterangan', });
lyr_Mall_5.set('fieldAliases', {'id': 'id', 'Keterangan': 'Keterangan', });
lyr_JALAN_LN_25K_6.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_RumahSakit_2.set('fieldImages', {'id': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_Pasar_3.set('fieldImages', {'id': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_Hotel_4.set('fieldImages', {'id': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_Mall_5.set('fieldImages', {'id': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_JALAN_LN_25K_6.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_RumahSakit_2.set('fieldLabels', {'id': 'no label', 'Keterangan': 'no label', });
lyr_Pasar_3.set('fieldLabels', {'id': 'no label', 'Keterangan': 'no label', });
lyr_Hotel_4.set('fieldLabels', {'id': 'no label', 'Keterangan': 'no label', });
lyr_Mall_5.set('fieldLabels', {'id': 'no label', 'Keterangan': 'no label', });
lyr_JALAN_LN_25K_6.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JALAN_LN_25K_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});