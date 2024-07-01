declare module "@DiaaSaada/date-helper" {
    function dateAfterDays(days: number): string;
    function today(a: number, b: number): string;
    function formatDateToDDMMYYYY(date: Date | string): string;
    function sleep(ms: number): void;
}