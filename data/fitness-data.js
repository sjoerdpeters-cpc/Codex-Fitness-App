window.FITNESS_SOURCE_DATA = {
  versions: {
    exercises: "1.2.0",
    muscleGroups: "1.2.0",
    materials: "1.4.0"
  },
  defaultEquipmentIds: ["mat_001", "mat_002", "mat_003", "mat_005"],
  defaultMaterialConfig: {
    mat_001: { values: [2.5, 5, 10, 12, 20] },
    mat_002: { values: [20] },
    mat_003: { values: [5, 10, 20] },
    mat_004: { values: [10] },
    mat_005: { values: [1.25, 2.5, 5, 10, 20, 25] },
    mat_006: { values: ["licht", "medium", "zwaar"] }
  },
  muscleGroups: [
    { id: "chest_mid_lower", name: "Borst midden/onder", parentId: "chest", isLeaf: true },
    { id: "triceps", name: "Triceps", parentId: "upper_arm", isLeaf: true },
    { id: "shoulders_front", name: "Schouders voor", parentId: "shoulders", isLeaf: true },
    { id: "hamstrings", name: "Hamstrings", parentId: "posterior_leg", isLeaf: true },
    { id: "glutes", name: "Bilspieren", parentId: "hips", isLeaf: true },
    { id: "erector_spinae", name: "Rugstrekkers", parentId: "back", isLeaf: true },
    { id: "quadriceps", name: "Quadriceps", parentId: "anterior_leg", isLeaf: true },
    { id: "core_deep", name: "Diepe core", parentId: "core", isLeaf: true }
  ],
  materials: [
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
  ],
  exercises: [
    {
      id: "bench_press",
      name: "Bench Press",
      primaryMuscleGroupIds: ["chest_mid_lower"],
      secondaryMuscleGroupIds: ["triceps", "shoulders_front"],
      materialIds: ["mat_002", "mat_005"]
    },
    {
      id: "deadlift",
      name: "Deadlift",
      primaryMuscleGroupIds: ["hamstrings", "glutes"],
      secondaryMuscleGroupIds: ["erector_spinae", "core_deep"],
      materialIds: ["mat_002", "mat_005"]
    },
    {
      id: "squat",
      name: "Squat",
      primaryMuscleGroupIds: ["quadriceps", "glutes"],
      secondaryMuscleGroupIds: ["hamstrings", "core_deep"],
      materialIds: ["mat_002", "mat_005"]
    },
    {
      id: "dumbbell_press",
      name: "Dumbbell Press",
      primaryMuscleGroupIds: ["chest_mid_lower"],
      secondaryMuscleGroupIds: ["triceps", "shoulders_front"],
      materialIds: ["mat_001"]
    },
    {
      id: "kettlebell_swing",
      name: "Kettlebell Swing",
      primaryMuscleGroupIds: ["glutes", "hamstrings"],
      secondaryMuscleGroupIds: ["core_deep", "erector_spinae"],
      materialIds: ["mat_003"]
    }
  ]
};
