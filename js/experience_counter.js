var today = new Date();
var today_dd = String(today.getDate()).padStart(2, '0');
var today_mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var today_yyyy = today.getFullYear();
const todayDate = today_yyyy + "-" + today_mm + "-" + today_dd;
const startDate = "2017-11-01"

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

// a and b are javascript Date objects
function dateDiffInDays(a, b) {
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

function getFormatedStringFromDays(numberOfDays) {
    var years = Math.floor(numberOfDays / 365);
    var months = Math.floor(numberOfDays % 365 / 30);
    var days = Math.floor(numberOfDays % 365 % 30);

    return `${years} YEARS : ${months} MONTHS EXP.`;
}

const a = new Date(startDate);
const b = new Date(todayDate);
const difference = dateDiffInDays(a, b);
const formattedStringFromDays = getFormatedStringFromDays(difference);

$("#experienceCounter").text(formattedStringFromDays);
