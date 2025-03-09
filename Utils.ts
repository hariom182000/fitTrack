export const deleteLog = async ({ log, db, setWorkouts }) => {
  await db
    .runAsync(`DELETE FROM Lifts WHERE id = ?`, log.id)
    .then((res) => {
      setWorkouts((prevWorkouts) =>
        prevWorkouts.filter((workout) => workout.id !== log.id)
      );
    })
    .catch((err) => {
      console.log("Deleting errr ", err);
    });
};
