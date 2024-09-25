

pls edit the html using the following data

  const data =[
  {
    Department: {
      Biochemistry: {
        jamb: ["biology", "chemistry", "physics", "mathmatics"],
        waec: ["biology", "chemistry", "physics", "mathmatics", "EngLish"],
      },
      chemistry: {
        jamb: ["chemistry", "physics", "biology", "mathmatics"],
        waec: ["chemistry", "physics", "biology", "mathmatics", "EngLish"],
      },
      industrialCchemistry: {
        jamb: ["chemistry", "mathmatics", "biology", "physics"],
        waec: ["EngLish", "chemistry", "mathmatics", "physics", "biology"],
      },
      AnimalAndEnvironmentalBiology: {
        jamb: ["biology", "physics", "chemistry", "physics"],
        waec: ["mathmatics", "EngLish", "physics", "biology", "chemistry"],
      },
      ComputerScience: {
        jamb: [
          "mathmatics",
          "physics",
          "biology",
          "chemistry",
          "agriculture",
          "economics",
          "physics",
        ],
        waec: [
          "English",
          "mathmatics",
          "physics",
          "chemistry",
          "biology",
          "mathmatics",
        ],
      },
      industrialMathmatics: {
        jamb: [
          "mathmatics",
          "physics",
          "chemistry",
          "biology",
          "economics",
          "agriculture",
        ],
        waec: ["mathmatics", "EngLish", "physics", "chemistry", "biology"],
      },
      mathmatics: {
        jamb: [
          "mathmatics",
          "physics",
          "chemistry",
          "economics",
          "agriculture",
        ],
        waec: [
          "mathmatics",
          "EngLish",
          "physics",
          "economics",
          "chemistry",
          "biology",
          "agriculture",
        ],
      },

      Geology: {
        jamb: ["chemistry", "physics", "mathmatics", "EngLish"],
        waec: ["EngLish", "mathmatics", "chemistry", "biology", "physics"],
      },
      appliedGeophysics: {
        jamb: ["chemistry", "physics", "mathmatics", "EngLish"],
        waec: ["biology", "chemistry", "physics", "mathmatics", "EngLish"],
      },
      microBiology: {
        jamb: ["biology", "chemistry", "physics", "mathmatics"],
        waec: ["EngLish", "mathmatics", "physics", "chemistry", "biology"],
      },
      physicsAndElectronics: {
        jamb: ["physics", "mathmatics", "chemistry", "biology"],
        waec: ["mathmatics", "chemistry", "biology", "EngLish", "physics"],
      },
      plantScienceAndTechnology: {
        jamb: ["biology", "chemistry", "physics", "mathmatics"],
        waec: ["mathmatics", "biology", "chemistry", "physics", "EngLish"],
      },
    },
  },
];
note: some data in the wace have more than five, let english and mathematics be shown, any extra subject that is more than 5 should have two subjects in the option eg Agricture or Economics, however all wace displayed should be 5 subjects.


on click of any of the course, the wace subject and the jamb required for each courses will be changed then the student can also input their wace and jamb result for each subject
