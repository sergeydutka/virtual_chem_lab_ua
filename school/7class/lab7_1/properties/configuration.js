var configuration = {
    "title": "Визначення густини твердого тіла та сипкої речовини",
    "solutionModellers": { "specificHeat": "solvent2" },
    "solutionViewers": [
        {
            "id": "solutionProperties", "displayDefault": false,
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
        { "id": "thermometer", "displayDefault": false },
        { "id": "pH", "displayDefault": false },
        { "id": "vesselTrackingControl", "displayDefault": false }
    ],
    "transfer": ["realistic"]
}
