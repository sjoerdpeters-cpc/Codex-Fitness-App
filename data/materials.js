window.FITNESS_MATERIALS_DATA = {
  version: "1.4.0",
  defaultEquipmentIds: ["mat_001", "mat_002", "mat_003", "mat_005"],
  defaultMaterialConfig: {
    mat_001: { values: [2.5, 5, 10, 12, 20] },
    mat_002: { values: [20] },
    mat_003: { values: [5, 10, 20] },
    mat_004: { values: [10] },
    mat_005: { values: [1.25, 2.5, 5, 10, 20, 25] },
    mat_006: { values: ["licht", "medium", "zwaar"] }
  },
  items: [
    {
      id: "mat_001",
      name: "Dumbbell",
      shortName: "DB",
      category: "free_weight",
      loadType: "pair",
      configType: "weight",
      configLabel: "Beschikbare gewichten in kg",
      placeholder: "2.5, 5, 10, 12, 20"
    },
    {
      id: "mat_002",
      name: "Barbell",
      shortName: "BB",
      category: "free_weight",
      loadType: "barbell",
      configType: "weight",
      configLabel: "Stanggewicht in kg",
      placeholder: "20"
    },
    {
      id: "mat_003",
      name: "Kettlebell",
      shortName: "KB",
      category: "free_weight",
      loadType: "single",
      configType: "weight",
      configLabel: "Beschikbare gewichten in kg",
      placeholder: "5, 10, 20"
    },
    {
      id: "mat_004",
      name: "EZ Curl Bar",
      shortName: "EZ",
      category: "free_weight",
      loadType: "barbell",
      configType: "weight",
      configLabel: "Stanggewicht in kg",
      placeholder: "10"
    },
    {
      id: "mat_005",
      name: "Weight Plates",
      shortName: "PL",
      category: "free_weight",
      loadType: "plates",
      configType: "weight",
      configLabel: "Beschikbare schijven in kg",
      placeholder: "1.25, 2.5, 5, 10, 20, 25"
    },
    {
      id: "mat_006",
      name: "Elastic Band",
      shortName: "EB",
      category: "resistance",
      loadType: "resistance",
      configType: "resistance",
      configLabel: "Beschikbare weerstanden",
      placeholder: "licht, medium, zwaar"
    }
  ]
};
