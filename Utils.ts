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

export  const getYears=()=>{
  const date= Date.now();
  const year = new Date(date).getFullYear();
  const years=[]
  for(let i=0;i<5;i++){
    years.push(year-i);
  }
  return years
}

export const getDateData = ({ year, monthIndex }) => {
  const datesData = [];
  let date = new Date(year, monthIndex, 1);
  while (date.getMonth() === monthIndex) {
    datesData.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return datesData;
};