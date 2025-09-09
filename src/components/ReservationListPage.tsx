import React, { useState } from "react";
import ReservationList from "./ReservationList";
import ReservationDrawer, { ReservationData } from "./ReservationDrawer";

const ReservationListPage: React.FC<{}> = ({}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [changedReservation, setChangedReservation] = useState<
    ReservationData | undefined
  >(undefined);

  const openDrawer = (rid: string) => {
    setSelectedId(rid);
    setDrawerOpen(true);
  };

  return (
    <div className="w-full">
      <ReservationList
        onOpen={openDrawer}
        changedReservation={changedReservation}
      />
      <ReservationDrawer
        open={drawerOpen}
        id={selectedId}
        onClose={(reservation) => {
          setChangedReservation(reservation), setDrawerOpen(false);
        }}
      />
    </div>
  );
};

export default ReservationListPage;
