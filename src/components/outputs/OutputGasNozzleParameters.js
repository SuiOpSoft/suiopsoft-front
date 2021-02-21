import "primeicons/primeicons.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "../../index.css";
import React, { useState, useRef, useContext } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "../inputs/DataReliefValve.css";
import {Context} from "../../store/context"
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";

export const OutputGasNozzleParameters = () => {
  
  const { store, actions } = useContext(Context);
  const [gasNozzleParameters, setGasNozzleParameters] = useState(store.output_gas_nozzle_parameters);
  const dt = useRef(null);
  
  const rightToolbarTemplate = () => {
    return (
        <React.Fragment>
            <Button label="Export" icon="pi pi-upload" className="export-button" onClick={exportCSV} />
        </React.Fragment>
    )
}
const exportCSV = () => {
  dt.current.exportCSV();
}

  // useEffect(() => {
  //       fetchProductData('reliefValves');
  //   }, []); // eslint-disable-line react-hooks/exhaustive-deps*/

  return (
    <div className="p-grid p-fluid index">
      <div className="card card-color">
        <h5>Gas Nozzle Parameters</h5>
        <Toolbar className="p-mb-4" right={rightToolbarTemplate}></Toolbar>
        <DataTable
          ref={dt}
          value={gasNozzleParameters}
          scrollHeight="55vh" 
          frozenWidth="15rem"
          scrollable          
          >
          <Column headerStyle={{ width: '15rem' }}
            field="separator"
            header="Separator" frozen           
          ></Column>
          <Column headerStyle={{ width: '20rem' }}
            field="Gas_Nozzle_Velocity"
            header="Gas Nozzle Velocity (m/s)"
          ></Column>
          <Column headerStyle={{ width: '20rem' }}
            field="Gas_Nozzle_Momentum"
            header="Gas Nozzle Momentum (kg/(m*sec&sup2;))"
          ></Column>
          <Column headerStyle={{ width: '20rem' }}
            field="Maximum_Gas_Nozzle_Velocity"
            header="Maximum Gas Nozzle Velocity (m/s)"
          ></Column>
          <Column headerStyle={{ width: '25rem' }}
            field="Maximum_Gas_Nozzle_Momentum"
            header="Maximum Gas Nozzle Momentum (kg/(m*sec&sup2;))"
          ></Column>
          <Column headerStyle={{ width: '20rem' }}
            field="Maximum_Gas_Nozzle_Flow"
            header="Maximum Gas Nozzle Flow (m&sup3;/h)"
          ></Column>
          <Column headerStyle={{ width: '15rem' }}
            field="Status_Gas_Nozzle"
            header="Status_Gas_Nozzle"
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};