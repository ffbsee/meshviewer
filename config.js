module.exports = function () {
  return {
    'nodeInfos': [
      {
        'name': 'Clientstatistik',
        'href': 'https://grafana.sum7.eu/d/000000006/node?var-node={NODE_ID}',
        'image': 'https://grafana.sum7.eu/render/d-solo/000000006/node?panelId=1&var-node={NODE_ID}&from=now-86399s&width=650&height=350&theme=light',
        'title': 'Entwicklung der Anzahl der Clients innerhalb des letzten Tages'
      },
      {
        'name': 'Hardwareauslastung',
        'href': 'https://grafana.sum7.eu/d/000000006/node?var-node={NODE_ID}',
        'image': 'https://grafana.sum7.eu/render/d-solo/000000006/node?panelId=4&var-node={NODE_ID}&from=now-86399s&width=650&height=350&theme=light',
        'title': 'Loadavg und Arbeitspeicherauslastung innerhalb des letzten Tages'
      }
    ],
    'linkInfos': [
      {
        'name': 'Statistik für alle Links zwischen diese Knoten',
        'href': 'https://grafana.sum7.eu/d/000000006/node?var-node={SOURCE_ID}&var-nodetolink={TARGET_ID}',
        'image': 'https://grafana.sum7.eu/render/d-solo/000000006/node?panelId=7&var-node={SOURCE_ID}&var-nodetolink={TARGET_ID}&from=now-86399s&width=650&height=350&theme=light',
        'title': 'Linkstatistik des letzten Tages, min und max aller Links zwischen diesen Knoten'
      }
    ],
    'linkTypeInfos': [
      {
        'name': 'Statistik für {TYPE}',
        'href': 'https://grafana.sum7.eu/d/000000006/node?var-node={SOURCE_ID}&var-nodetolink={TARGET_ID}&var-source_mac={SOURCE_MAC}&var-target_mac={TARGET_MAC}',
        'image': 'https://grafana.sum7.eu/render/d-solo/000000006/node?panelId=8&var-node={SOURCE_ID}&var-nodetolink={TARGET_ID}&var-source_mac={SOURCE_MAC}&var-target_mac={TARGET_MAC}&from=now-86399s&width=650&height=350&theme=light',
        'title': 'Linkstatistik des letzten Tages des einzelnen Links in beide Richtungen'
      }
    ],
    'globalInfos': [
      {
        'name': 'Wochenstatistik',
        'href': 'https://grafana.sum7.eu/d/000000004/global',
        'image': 'https://grafana.sum7.eu/render/d-solo/000000004/global?panelId=1&from=now-7d&width=650&height=400&theme=light',
        'title': 'Entwicklung der Anzahl der Knoten und der Clients innerhalb der letzten 7 Tage'
      }
    ],
    'maxAge': 2,
    // Array of data provider are supported
    'dataPath': ['https://web.fireorbit.de/meshviewer/data/'],
    'siteName': 'Freifunk Multiple Communities',
    'mapLayers': [
      {
        'name': 'Freifunk Regensburg',
        // Please ask Freifunk Regensburg before using its tile server c- example with retina tiles
        'url': 'https://{s}.tiles.ffrgb.net/{z}/{x}/{y}{retina}.png',
        'config': {
          'maxZoom': 20,
          'subdomains': '1234',
          'attribution': '<a href="http://www.openmaptiles.org/" target="_blank">&copy; OpenMapTiles</a> <a href="http://www.openstreetmap.org/about/" target="_blank">&copy; OpenStreetMap contributors</a>'
        }
      },
      {
        'name': 'OpenStreetMap.HOT',
        'url': 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        'config': {
          'maxZoom': 19,
          'attribution': '&copy; Openstreetmap France | &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }
      },
      {
        'name': 'Esri.WorldImagery',
        'url': '//server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        'config': {
          'maxZoom': 20,
          'attribution': 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        }
      }
    ],
    // Set a visible frame
    'fixedCenter': [
      // Northwest
      [
        54.8449,
        6.07543
      ],
      // Southeast
      [
        47.8721,
        13.9526
      ]
    ],
    'siteNames': [
      {
        'site': 'ffhb',
        'name': 'Bremen'
      }, {
        'site': 'ffda',
        'name': 'Darmstadt'
      }, {
        'site': 'ffdef',
        'name': 'Darmstadt'
      }, {
        'site': 'ffein',
        'name': 'Einbeck'
      }, {
        'site': 'ffept',
        'name': 'Ennepe-Ruhr-Kreis (Ennepetal)'
      }, {
        'site': 'ffen',
        'name': 'Ennepe-Ruhr-Kreis (Sprockhövel)'
      }, {
        'site': 'ffhat',
        'name': 'Ennepe-Ruhr-Kreis (EN-Kreis)'
      }, {
        'site': 'ffspr',
        'name': 'Ennepe-Ruhr-Kreis (Sprockhoevel)'
      }, {
        'site': 'ffwtt',
        'name': 'Ennepe-Ruhr-Kreis (Wetter)'
      }, {
        'site': 'ffwit',
        'name': 'Ennepe-Ruhr-Kreis (Witten)'
      }, {
        'site': 'ffggrz',
        'name': 'Gera-Greiz'
      }, {
        'site': 'ffffm',
        'name': 'Frankfurt'
      }, {
        'site': 'ffrgb',
        'name': 'Regensburg'
      }, {
        'site': 'ffrgb-bat15',
        'name': 'Regensburg'
      }, {
        'site': 'ffki',
        'name': 'Kiel'
      }, {
        'site': 'ffwp',
        'name': 'Westpfalz'
      }
    ]
  };
};
