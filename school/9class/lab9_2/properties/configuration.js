var configuration = {
    "title": "Тепловий ефект розчинення",
    "solutionModellers": { "specificHeat": "solvent2" },
    "solutionViewers": [
        {
            "id": "solutionProperties", "displayDefault": true,
            "args": { "honorSignificantFigures": false }
        },
        {
            "id": "aqueous", "displayDefault": false,
            "args": { "unitsToggleEnabled": false }
        },
        {
            "id": "solid", "displayDefault": false,
            "args": { "unitsToggleEnabled": false }
        },
        { "id": "spectrometer", "displayDefault": false },
        { "id": "particleView", "displayDefault": false },
        { "id": "thermometer", "displayDefault": true },
        { "id": "pH", "displayDefault": false },
        { "id": "vesselTrackingControl", "displayDefault": false }
    ],
    "transfer": ["precise", "significantFigures", "realistic"]
}
