export const reservationData: ReservationData.Reservation[] = [
  {
    id: crypto.randomUUID(),
    clientName: "David",
    phoneNumber: "010-1234-4567",
    reservedDate: new Date(2023, 9, 22, 14, 0),
    personCount: 4,
    reservedTable: [{ floor: 1, table: [7, 8] }],
    notes: "Birthday",
    isSeated: false,
  },
  {
    id: crypto.randomUUID(),
    clientName: "Jason",
    phoneNumber: "010-1234-4567",
    reservedDate: new Date(2023, 9, 22, 15, 30),
    personCount: 3,
    reservedTable: [{ floor: 1, table: [8] }],
    notes: "Note",
    isSeated: false,
  },
  {
    id: crypto.randomUUID(),
    clientName: "Olivia",
    phoneNumber: "010-1234-4567",
    reservedDate: new Date(2023, 9, 22, 15, 0),
    personCount: 5,
    reservedTable: [{ floor: 2, table: [8] }],
    notes: "Note",
    isSeated: false,
  },
  {
    id: crypto.randomUUID(),
    clientName: "Mary",
    phoneNumber: "010-1234-4567",
    reservedDate: new Date(2023, 10, 1, 18, 0),
    personCount: 1,
    reservedTable: [
      { floor: 1, table: [8] },
      { floor: 2, table: [8] },
    ],
    notes: undefined,
    isSeated: false,
  },
  {
    id: crypto.randomUUID(),
    clientName: "Ash",
    phoneNumber: "010-1234-4567",
    reservedDate: new Date(2023, 10, 2, 17, 0),
    personCount: 1,
    reservedTable: [],
    notes: undefined,
    isSeated: false,
  },
];

export const emptyReservationData = {
  id: crypto.randomUUID(),
  clientName: undefined,
  phoneNumber: undefined,
  reservedDate: undefined,
  personCount: undefined,
  reservedTableNumber: undefined,
  reservedFloor: undefined,
  notes: undefined,
};
