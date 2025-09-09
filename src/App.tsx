import ReservationListPage from "./components/ReservationListPage";

export default function App() {
  return (
    <div
      className="mx-auto my-8 font-sans"
      tabIndex={0}
      aria-label="Reservation List Container"
    >
      <ReservationListPage />
    </div>
  );
}
