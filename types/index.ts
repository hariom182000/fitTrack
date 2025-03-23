export interface Workout {
  id: number;
  targetMuscle: string;
  exercise: string;
  weightLifted: number;
  repsDone: number;
  date: number;
}

export interface LiftData {
  selectedExercise: string;
  weightLifted: string | number;
  repsDone: string | number;
}

export interface LogEntryProps {
  targetMuscle: string;
  liftData: LiftData;
  onChange: (data: LiftData) => void;
  onSubmit: () => void;
}

export interface LogProps {
  log: Workout;
  deleteLog: (log: Workout) => void;
}

export interface WorkoutLedgerProps {
  workouts: Workout[];
  setWorkouts: (workouts: Workout[]) => void;
  loadMore: () => void;
}

export interface LogTableProps {
  children: React.ReactNode;
} 