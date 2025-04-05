import React, { useState } from 'react';
import Calendar from '@/common/components/Calendar/Calendar';
import TabTitle from '@/common/components/EmployeeTabTitle/TabTitle';
import Breadcrumb from '@/common/components/Breadcrumb/Breadcrumb';

function AppoinmentsTab() {
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
      <Calendar />
    </div>
  );
}

export default AppoinmentsTab;