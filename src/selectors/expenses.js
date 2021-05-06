import moment from 'moment';

// Get visible expenses
<<<<<<< HEAD
import moment from 'moment';

export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {        
=======
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
>>>>>>> 0b622f7f98062bc9d16b3829b771f60cf74e5f71
    //   const startDateMatch =
    //     typeof startDate !== "number" || expense.createdAt >= startDate;
    //   const endDateMatch =
    //     typeof endDate !== "number" || expense.createdAt <= endDate;
    const createdAtMoment=expense.createdAt;
    const startDateMatch=startDate? startDate.isSameOrBefore(createdAtMoment,'day') : true;
    const endDateMatch=endDate ? endDate.isSameOrAfter(createdAtMoment,'day') : true;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};
