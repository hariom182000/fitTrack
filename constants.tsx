export const CHEST = "chest";
export const TRICEP = "tricep";
export const BICEP = "bicep";
export const LEGS = "legs";
export const CALVES = "calves";
export const SHOULDERS = "shoulders";
export const FOREARMS = "forearms";
export const GLUTES = "glutes";
export const ABS = "abs";
export const BACK = "back";

export const MUSCLES = [
  CHEST,
  BACK,
  TRICEP,
  BICEP,
  LEGS,
  CALVES,
  SHOULDERS,
  FOREARMS,
  GLUTES,
  ABS,
];

export const EXCERICSE_FOR_MUSCLE = {
  [CHEST]: [
    "flat bench press",
    "incline bench press",
    "flat dumbell press",
    "incline dumbell press",
    "decline bench press",
    "peck deck fly",
    "cable fly",
    "pushups",
  ],
  [BACK]: [
    "pull ups",
    "lat pulldowns",
    "barbell rows",
    "dumbell rows",
    "t-bar rows",
    "seated rows",
    "cable rows",
    "seated wide grip rows",
    "deadlifts",
  ],
  [BICEP]: [
    "preacher curls",
    "dumbell curls",
    "barbell curls",
    "hammer curls",
    "concentration curls",
    "reverse curls",
  ],
  [TRICEP]: [
    "skull crushers",
    "dips",
    "tricep pushdown",
    "overhead tricep extension",
    "close grip bench press",
    "tricep kickbacks",
  ],
  [LEGS]: [
    "barbell squats",
    "smith squats",
    "lunges",
    "leg extenions",
    "hamstring curls",
    "leg press",
  ],
  [CALVES]: ["seated calf raises", "standing calf raises"],
  [SHOULDERS]: [
    "dumbell press",
    "machine press",
    "barbell press",
    "lateral raises",
    "front raises",
    "rear delt flys",
    "shrugs",
    "upright rows",
    "face pulls",
    "arnold press",
    "reverse flys",
  ],
  [FOREARMS]: ["wrist curls", "reverse wrist curls"],
  [GLUTES]: ["hip thrusts", "glute bridges", "cable pull throughs"],
  [ABS]: [
    "crunches",
    "leg raises",
    "planks",
    "side planks",
    "bicycle crunches",
    "russian twists",
    "hanging leg raises",
    "ab rollouts",
  ],
};

export const MUSCLE_MESSAGES = {
  [CHEST]: "Chest day, best day!",
  [BACK]: "Back to the grind!",
  [FOREARMS]: "Grip it and rip it!",
  [GLUTES]: "Booty gains don’t lie!",
  [SHOULDERS]: "Big delts, no regrets!",
  [TRICEP]: "Horseshoe arms incoming!",
  [BICEP]: "Curls for the girls (or gains)!",
  [LEGS]: "Never skip leg day!",
  [CALVES]: "Calves of steel, wheels for real!",
  [ABS]: "Abs-solutely necessary!",
};

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const DAYS = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];
