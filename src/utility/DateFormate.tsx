export type DateFormatType = string;

export enum DateFormats {
	/**
	 * Full month name, day, and year.
	 * Example: July 25, 2025
	 */
	FullMonthDayYear = 'MMMM D, YYYY',

	/**
	 * Day of the week, numeric day, and abbreviated month.
	 * Example: Friday, 25 Jul
	 */
	DayMonthShort = 'dddd, D MMM',

	/**
	 * Numeric month, day, and year separated by slashes.
	 * Commonly used in the United States.
	 * Example: 07/25/2025
	 */
	MonthDayYear = 'MM/DD/YYYY',
	/**
	 * Numeric month and day separated by slashes.
	 * Commonly used in short-form dates.
	 * Example: 07/25
	 */
	MonthDay = 'MM/DD',
	/**
	 * Numeric day, month, and year separated by dashes.
	 * Common in Europe and many other regions.
	 * Example: 25-07-2025
	 */
	DayMonthYear = 'DD-MM-YYYY',
	/**
	 * ISO-style year, month, day (common in databases / sorting)
	 * Example: 2025-07-25
	 */
	YearMonthDay = 'YYYY-MM-DD',
	/**
	 * ISO 8601 format with year, month, and day separated by dashes.
	 * Ideal for storage, sorting, and international usage.
	 * Example: 2025-07-25
	 */
	ISODate = 'YYYY-MM-DD',
	/**
	 * Abbreviated month name, day, and year.
	 * Example: Jul 25, 2025
	 */
	AbbreviatedMonthDayYear = 'MMMM D, YYYY',
	/**
	 * Full weekday, numeric day, and abbreviated month.
	 * Example: Friday, 5 Sep
	 */
	WeekdayDayShortMonth = 'dddd, D MMM',
	/**
	 * Day of year with 24-hour time (hour/minute).
	 * Example: 248, 14/30
	 */
	DayOfYearHourMinute = 'ddd, DD/MM',
	/**
	 * Full weekday, full month name, day, and year.
	 * Example: Friday, July 25, 2025
	 */
	WeekdayFullMonthDayYear = 'dddd, MMMM D, YYYY',
	/**
	 * Numeric month, day, and year with 12-hour time and AM/PM.
	 * Commonly used in the United States.
	 * Example: 07/25/2025, 03:30 PM
	 */
	MonthDayYearTime = 'MM/DD/YYYY, hh:mm a',

	/**
	 * 12-hour time and AM/PM with Numeric month, day, and year.
	 * Example: 03:30 PM, 07/25/2025
	 */
	TimeMonthDayYear = 'hh:mm a, MM/DD/YYYY',

	/**
	 * Original UTC date and time as-is (no timezone conversion)
	 * Example: 2025-09-05 09:00:34
	 */
	DateTimeWithMilliseconds = 'YYYY-MM-DDTHH:mm:ss.SSS[Z]'
}
export enum DateFormatToken {
	/**
	 * Locale-aware short date format
	 * Example: Jul 25, 2025
	 */
	ShortLocalized = 'll',

	/**
	 * Locale-aware long month date format
	 * Example: July 25, 2025
	 */
	LongLocalized = 'LL',

	/**
	 * Locale-aware format with abbreviated weekday
	 * Example: Fri, Jul 25, 2025
	 */
	FullLocalizedShortWeekday = 'llll',

	/**
	 * Locale-aware format with full weekday and month
	 * Example: Friday, July 25, 2025
	 */
	FullLocalizedLongWeekday = 'LLLL'
}
export enum TimeFormats {
	/**
	 * 24-hour time: hours and minutes
	 * Example: 14:30
	 */
	HourMinute = 'HH:mm',

	/**
	 * 24-hour time: hours, minutes, and seconds
	 * Example: 14:30:45
	 */
	HourMinuteSecond = 'HH:mm:ss',

	/**
	 * 12-hour time: hours and minutes with AM/PM
	 * Example: 02:30 PM
	 */
	HourMinute12Hour = 'hh:mm A',

	/**
	 * Unit label for time granularity
	 * Example: 'minute'
	 */
	Minute = 'minute'
}
