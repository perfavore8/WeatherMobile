interface StringObj {
  [key: string]: { ru: string; en: string };
}

const directoryOfMonths: StringObj = {
  "01": { ru: "Янв", en: "Jan" },
  "02": { ru: "Фев", en: "Feb" },
  "03": { ru: "Март", en: "Mar" },
  "04": { ru: "Апр", en: "Apr" },
  "05": { ru: "Май", en: "May" },
  "06": { ru: "Июнь", en: "Jun" },
  "07": { ru: "Июль", en: "Jul" },
  "08": { ru: "Авг", en: "Aug" },
  "09": { ru: "Сент", en: "Sep" },
  "10": { ru: "Окт", en: "Oct" },
  "11": { ru: "Нояб", en: "Nov" },
  "12": { ru: "Дек", en: "Dec" },
};
export default function useDate() {
  const preparationDate = (date: string, lang: "ru" | "en" = "ru") => {
    const [month, day] = date.slice(5).split("-");
    return day + " " + directoryOfMonths[month][lang];
  };
  return preparationDate;
}
