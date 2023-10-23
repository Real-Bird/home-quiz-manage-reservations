declare namespace ReservationData {
  interface Reservation {
    id: string;
    clientName: string;
    phoneNumber: string;
    reservedDate: Date | undefined;
    personCount: number;
    reservedTable: {
      floor: number;
      table: number[];
    }[];
    notes?: string;
    isSeated: boolean;
  }
}
