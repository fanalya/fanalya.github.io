export interface FCalendarOptions {
  timeZone: string;
  droppable: boolean;
  navLinks: boolean;
  plugins: any[];
  themeSystem: string;
  weekNumbers: any;
  headerToolbar: {
    left: string;
    center: string;
    right: string;
  };
  windowResize: () => void;
  initialView: string;
  initialEvents: any[];
  editable: boolean;
  selectable: boolean;
  selectMirror: boolean;
  dayMaxEvents: boolean;
  weekends: boolean;
  dateClick: (info: any) => void;
  eventClick: void;
}

export interface Event {
  title: string | null;
  date: string;
  category: string | null;
}
