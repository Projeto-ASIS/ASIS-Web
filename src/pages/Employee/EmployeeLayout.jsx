import SideBarEmployee from "@/common/components/SideBarEmployee/SideBarEmployee";

export default function EmployeeLayout(){
    return(
      <>
          <div className="app">
        <SideBarEmployee />
        <div className="main-content">
          <h1>Main Content Area</h1>
          <p>Your content goes here</p>
        </div>
      </div>
      </>
    )
  }