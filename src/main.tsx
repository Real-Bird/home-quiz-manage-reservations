import "react-datepicker/dist/react-datepicker.css";
import "@styles/globals.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "@src/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NewReservationModal } from "@src/pages/NewReservation";
import { MainReservationModal } from "@src/pages/MainReservation";
import { EditReservationModal } from "@src/pages/EditReservation";
import { SelectDateModal } from "@src/pages/SelectDate";
import ReservationListProvider from "@src/contexts/reservationList/provider";
import ResisterProvider from "@src/contexts/resister/provider";
import EditProvider from "@src/contexts/edit/provider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <ReservationListProvider>
              <ResisterProvider>
                <EditProvider>
                  <App />
                </EditProvider>
              </ResisterProvider>
            </ReservationListProvider>
          }
          path="/">
          <Route element={<MainReservationModal />} path="" />
          <Route element={<NewReservationModal />} path="register" />
          <Route element={<EditReservationModal />} path="edit" />
          <Route element={<SelectDateModal />} path="date" />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
