/** DO NOT EDIT THIS LINE! IT IS FOR TESTING PURPOSES */
import {
  shouldBeInTodayIdList,
  shouldBeInTomorrowIdList,
  testDeliveries,
  testTomorrow,
  testToday,
} from "./question-5-data.js";
/** DO NOT EDIT THE ABOVE LINE! IT IS FOR TESTING PURPOSES */

/**
 * Your delivery drivers would like a dashboard to see what deliveries are STILL planned for today and tomorrow.
 * STILL means that we don't want to see deliveries that have already been delivered or returned.
 */

/** DO NOT EDIT THE BELOW CONSTANT VARIABLE */
const DELIVERY_STATUS = {
  DELIVERED: "STATUS_DELIVERED",
  RETURNED: "STATUS_RETURNED",
  PENDING: "STATUS_PENDING",
};
/** DO NOT EDIT THE ABOVE CONSTANT VARIABLE */

/**
 * Finish the following function.
 *
 * The `deliveries` parameter is an array of objects with the structure:
 *
 * [
 *   {
 *     id: string,
 *     description: string,
 *     plannedDeliveryDate: Date,
 *     isDelivered: boolean,
 *     isReturned: boolean,
 *   }
 * ]
 *
 * The `today` and `tomorrow` parameters are Date objects that need to be checked.
 *
 * As a return we want an object with two properties (`today` and `tomorrow`) that contain arrays of the deliveries for that day.
 * The deliveries should be PENDING (see question-3 how to determine that)! You can copy over the function you created there as well if you want!
 *
 * HINT: you will need to use the Date object and do Date manipulation, have a look at the MDN documentation of that object for functions you can use
 * HINT: the Date object is badly named as it also includes the current time so you will need to find a way to ignore it (can you see now how naming matters!)
 */
const getDeliveryStatus = (delivery) => {
  if (delivery.isReturned) {
    return DELIVERY_STATUS.RETURNED;
  } else if (delivery.isDelivered) {
    return DELIVERY_STATUS.DELIVERED;
  } else {
    return DELIVERY_STATUS.PENDING;
  }
};

const isOnSameDay = (date1, date2) => {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};
const getDashboardInformation = (deliveries, today, tomorrow) => {
  const pendingDeliveries = deliveries.filter(
    (delivery) => getDeliveryStatus(delivery) === DELIVERY_STATUS.PENDING
  );

  const todaysDeliveries = [];
  const tomorrowsDeliveries = [];

  pendingDeliveries.forEach((delivery) => {
    const day = delivery.plannedDeliveryDate;

    if (isOnSameDay(today, day)) {
      todaysDeliveries.push(delivery);
    } else if (isOnSameDay(tomorrow, day)) {
      tomorrowsDeliveries.push(delivery);
    }
  });

  return {
    today: todaysDeliveries,
    tomorrow: tomorrowsDeliveries,
  };
};

/**
 * TEST CODE. DO NOT EDIT
 */
const testResult = getDashboardInformation(
  testDeliveries,
  testToday,
  testTomorrow
);
testResult.today.forEach((result) => {
  console.assert(
    shouldBeInTodayIdList.includes(result.id),
    `${result.id} is in the today array, but should not be!`
  );
});
testResult.tomorrow.forEach((result) => {
  console.assert(
    shouldBeInTomorrowIdList.includes(result.id),
    `${result.id} is in the tomorrow array, but should not be!`
  );
});
shouldBeInTodayIdList.forEach((shouldBeInToday) => {
  console.assert(
    testResult.today.map((result) => result.id).includes(shouldBeInToday),
    `${shouldBeInToday} should be in the today array, but isn't`
  );
});
shouldBeInTomorrowIdList.forEach((shouldBeInTomorrow) => {
  console.assert(
    testResult.tomorrow.map((result) => result.id).includes(shouldBeInTomorrow),
    `${shouldBeInTomorrow} should be in the tomorrow array, but isn't`
  );
});
