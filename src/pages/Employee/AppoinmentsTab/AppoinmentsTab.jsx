import React, { useState } from 'react';
import Calendar from '@/common/components/Calendar/Calendar';
import TabTitle from '@/common/components/EmployeeTabTitle/TabTitle';
import Breadcrumb from '@/common/components/Breadcrumb/Breadcrumb';
import useFetch from '@/common/hooks/useFetch';

import * as BackendService from "@/common/services/BackendService"

function AppoinmentsTab() {
  const { data: appointments, isLoading } = useFetch({
    fnKey: "appointments",
    fnMethod: async () => {
      try {
        const appointments = await BackendService.getEmployeeAppointments("2025-04-12", 2)

        return appointments
      } catch (error) {
        console.error(error)
        return null
      }
    }
  })
  console.log("AppointmentTab", appointments)

  if (isLoading) return null

  return (
    <div className="appoinments-container">
      <div className="breadcrumb-top">
        <Breadcrumb.Root className="about-cadunico__breadcrumb">
          <Breadcrumb.Path path="/employee">inicio</Breadcrumb.Path>
          <Breadcrumb.Path path="/services/cadunico/about" isActive>
            Agendamentos
          </Breadcrumb.Path>
        </Breadcrumb.Root>
      </div>
      <TabTitle titleTab="Agendamentos" titleSpan="ACOMPANHE OS AGENDAMENTOS MARCADOS" />
      <Calendar appointments={appointments} />
    </div>
  );
}

export default AppoinmentsTab;