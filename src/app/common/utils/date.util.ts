export class  DateUtils {
  static isDateISOFormat(obj: any): boolean {
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(obj);
  }

  static getHumanFormatDate(dateString: string): string {
    const dateArrayObject = dateString.split('/');

    return dateArrayObject[2] + '-' + this.getPaddedNumber(dateArrayObject[1]) + '-' + this.getPaddedNumber(dateArrayObject[0]);
  }

  static isValidDate(dateString: string): boolean {

    if (dateString === '') {
      return false;
    }

    if ( this.isDateISOFormat( dateString ) ) {
      return true;
    }

    const dateBits = dateString.split('/');
    const newDate = new Date(Number(dateBits[2]), Number(dateBits[1]) - 1, Number(dateBits[0]));

    return newDate && ( (newDate.getMonth() + 1) === Number(dateBits[1]));
  }

  static getDateFromControl(dateObject: any): Date {
    if ( this.isDateISOFormat(dateObject) ) {
      return new Date(dateObject);
    }

    if (this.isValidDate(dateObject)) {
      return new Date(this.getHumanFormatDate(dateObject));
    }

    return null; // check is required for IE

  }

  static getPreviousDateByYears(years: number): Date {
    const previousDate = new Date();
    previousDate.setFullYear(previousDate.getFullYear() - years);

    return previousDate;
  }

  static getPaddedNumber(dt: string): string {
    return ('0' + dt).slice(-2);
  }
}
