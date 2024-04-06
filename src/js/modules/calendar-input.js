import { easepick, RangePlugin, LockPlugin, DateTime } from '@easepick/bundle';

/* const DateTime = easepick.DateTime; */
const bookedDates = [
  '2024-04-02',
  ['2024-04-06', '2024-04-11'],
  '2024-04-18',
  '2024-04-19',
  '2024-04-20',
  '2024-04-25',
  '2024-04-28',
].map(d => {
  if (d instanceof Array) {
    const start = new DateTime(d[0], 'YYYY-MM-DD');
    const end = new DateTime(d[1], 'YYYY-MM-DD');

    return [start, end];
  }

  return new DateTime(d, 'YYYY-MM-DD');
});

/* document.querySelector('.hotel-datepicker')
document.getElementById('checkin'), */
/* elementEnd: "#checkout", */

const hotelDatepickers = document.querySelectorAll('.hotel-datepicker');

hotelDatepickers.forEach(el => {
  new easepick.create({
    element: el,
    css: ['https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css'],
    zIndex: 5,
    format: "DD MMM YYYY",
    plugins: [RangePlugin, LockPlugin],
    RangePlugin: {
      elementEnd: "#checkout",
      tooltipNumber(num) {
        return num - 1;
      },
      locale: {
        one: 'night',
        other: 'nights',
      },
    },
    LockPlugin: {
      minDate: new Date(),
      minDays: 2,
      inseparable: true,
      filter(date, picked) {
        if (picked.length === 1) {
          const incl = date.isBefore(picked[0]) ? '[)' : '(]';
          return !picked[0].isSame(date, 'day') && date.inArray(bookedDates, incl);
        }

        return date.inArray(bookedDates, '[)');
      },
    }
  });
});


const flightDatepickers = document.querySelectorAll('.flight-datepicker');

flightDatepickers.forEach(el => {
  new easepick.create({
    element: el,
    css: ['https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css'],
    zIndex: 5,
    format: "DD MMM YYYY",
    plugins: [RangePlugin]
  })
});
