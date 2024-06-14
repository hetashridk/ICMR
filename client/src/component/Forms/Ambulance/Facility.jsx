import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelAmbulance';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { turnOffbutton } from '../helpers';
import AMB1 from './table/AMB1';
import AMB2 from './table/AMB2';
import Heading from '../../Heading/Heading.jsx';

function Facility() {

  turnOffbutton();
  const columns1 = [
    { key: 'Item', label: 'Item', type: 'text' },
    { key: 'Available', label: 'Available (Y/N)', type: 'radio', options: ['Yes', 'No'] },
    { key: 'Functional', label: 'Functional (Y/N)', type: 'radio', options: ['Yes', 'No'] },
    { key: 'LastUsed', label: 'If Functional (Yes), When was it last used?', type: 'input' },
  ];

  const initialRows1 = [
    { Item: 'ECG Machine', Available: '', Functional: '', LastUsed: '' },
    { Item: 'Pulse Oxymeter', Available: '', Functional: '', LastUsed: '' },
    { Item: 'Glucometer', Available: '', Functional: '', LastUsed: '' },
    { Item: 'Defibrillator', Available: '', Functional: '', LastUsed: '' },
    { Item: 'Defibrillator pads — disposable', Available: '', Functional: '', LastUsed: '' },
    { Item: 'Sphygmomanometer, Non-mercurial- Paediatric cuff- Adult cuff', Available: '', Functional: '', LastUsed: '' },
    { Item: 'Stethoscope (Adult)', Available: '', Functional: '', LastUsed: '' },
    { Item: 'Stethoscope (Paediatric)', Available: '', Functional: '', LastUsed: '' },
    { Item: 'Endotracheal tubes (Adult)', Available: '', Functional: '', LastUsed: '' },
    { Item: 'Endotracheal tubes (Paediatric)', Available: '', Functional: '', LastUsed: '' },
    { Item: 'Laryngeal Mask Airway (Paediatric)', Available: '', Functional: '', LastUsed: '' },
    { Item: 'Laryngeal Mask Airway (Adult)', Available: '', Functional: '', LastUsed: '' },
    { Item: 'Nebulizer with nebulizer kit', Available: '', Functional: '', LastUsed: '' },
    { Item: 'Laryngoscope set (Adult)', Available: '', Functional: '', LastUsed: '' },
    { Item: 'Laryngoscope set (Paediatric)', Available: '', Functional: '', LastUsed: '' },
    { Item: 'Communication device(eg. mobile, Radio)', Available: '', Functional: '', LastUsed: '' },
    { Item: 'Syringe infusion pump', Available: '', Functional: '', LastUsed: '' },
    { Item: 'Transport Ventilators', Available: '', Functional: '', LastUsed: '' },
    { Item: 'GPS system', Available: '', Functional: '', LastUsed: '' },
  ];


  const columns2 = [
    { key: 'Item', label: 'Item', type: 'text' },
    { key: 'Available', label: 'Available (Y/N)', type: 'radio', options: ['Yes', 'No'] },
  ];

  const initialRows2 = [
    { Item: 'Adrenaline Ampoules', Available: '' },
    { Item: 'Anti Snake Venom Vial', Available: '' },
    { Item: 'Atropine Ampoules', Available: '' },
    { Item: 'Buscopan / Hyoscine Ampoules', Available: '' },
    { Item: 'Methylergonovine Inj', Available: '' },
    { Item: 'Frusemide / Lasix Ampoules', Available: '' },
    { Item: 'Hydrocort 2ml Vial', Available: '' },
    { Item: 'Magnesium Sulfate Ampoules', Available: '' },
    { Item: 'Midazolam Vial', Available: '' },
    { Item: 'Mucain gel Syrup', Available: '' },
    { Item: 'Ondansetron Zofer Ampoules', Available: '' },
    { Item: 'Oxytocin Ampoules', Available: '' },
    { Item: 'ORS', Available: '' },
    { Item: 'Glucose', Available: '' },
    { Item: 'ParacetaJhol Ampoules', Available: '' },
    { Item: 'Paracetamol Syrup', Available: '' },
    { Item: 'Pheniramine Maleate / Avil Ampoules', Available: '' },
    { Item: 'Ranitidine Ampoules', Available: '' },
    { Item: 'Tablet Activated Charcoal / Powder', Available: '' },
    { Item: 'Tablet Aspirin / Dispirin', Available: '' },
    { Item: 'Tablet Clopidogrel (75mg)', Available: '' },
    { Item: 'Tablet Isosorbide', Available: '' },
    { Item: 'AsthalinRespule', Available: '' },
    { Item: 'BudecortRepsule', Available: '' },
    { Item: 'DuolinRespule', Available: '' },
    { Item: 'Lignocaine / Xylocaine Gel', Available: '' },
    { Item: 'Distil / Sterile Water', Available: '' },
    { Item: 'Fluid Normal Saline (NS) 100 ml & 500 ml', Available: '' },
    { Item: 'Betadine', Available: '' },
    { Item: 'Dextrose 25% 100 ml', Available: '' },
    { Item: 'Disposable Delivery Kit', Available: '' },
    { Item: 'Disposable Hand Gloves', Available: '' },
    { Item: 'Disposable Face Masks', Available: '' },
    { Item: 'Cotton 500gm', Available: '' },
    { Item: 'IV Cannula 18G 20G 22G & 24G', Available: '' },
    { Item: 'All Syringes 3ml,5ml & 10 ml', Available: '' },
    { Item: 'IV Sets – Macro', Available: '' },
    { Item: 'IV Sets – Micro', Available: '' },
    { Item: 'Spirit', Available: '' },
    { Item: 'Betadine', Available: '' },
  ];



  const date = new Date();
  return (
    <div>
      <Heading h2="GAP Assessment Tool – Ambulance at Facility Level"></Heading>
    <section>
      <SidePanel id={"1"} />
      <div className="siteInfo">

        <div className="formhdr">
          <div>
            <h3>
              Facility Information
            </h3>
          </div>
        </div>

        <div className="formcontent">

          <Radio h3="State :" CheckbobItems={["GJBRC_AST_00000", "ORPUR_AST_11111", "MPBHS_AST_22222", "PBLDH_AST_33333", "PYPDY_AST_44444"]} name='AMB1' />

          <InputField h3="Name of the data collector:" placeholder="Type here" name='AMB2'/>

          <div>
            <p className='datetime'>Date : {date.toDateString()}  {date.getHours()}:{date.getMinutes()}</p>
          </div>
          <InputField h3="GPS Coordinates:" placeholder="Type here" name='AMB4'/>
          <Radio h3="Name of the Ambulance Service?" CheckbobItems={["Public", "108", "104", "112", "102", "Private", "Institutional Ambulance"]} name='AMB5' />

          <InputField h3="Which Location/Area does your ambulance operate in?" placeholder="Type here" name='AMB6'/>

          <Radio h3="Type of Ambulance Service?" CheckbobItems={["Type A", "Type B", "Type C", "Type D"]} name='AMB7'/>

          <Radio h3="Is the ambulance service available 24/7?" CheckbobItems={["Yes", "No"]} name='AMB8'/>

          <InputField h3="How many cases do you transport per day on an a average" placeholder="Type here" name='AMB9'/>

          <InputField h3="How many emergency cases do you transport per day on an a average" placeholder="Type here" name='AMB10'/>
          <InputField h3="How much area to you cater to ?" placeholder="Km radius" name='AMB11'/>

          {/* Radio */}

          <h2>EMERGENCY EQUIPMENT:</h2>
          <Radio
            h3="Which Suction apparatus and accessories is available"
            CheckbobItems={[
              "Portable or Mounted Suction Machine",
              "Flexible suction catheters Fr. 5,8,12 and 14"
            ]}
            name="AMB13"
          />
          <Radio
            h3="Which type of Portable oxygen equipment/installed"
            CheckbobItems={[
              "Portable oxygen tank with regulator",
              "Oxygen mask No. 2,3 and 4 (for new-born, infant and adult)"
            ]}
            name="AMB14"
          />
          <Radio
            h3="Whether Bag valve mask resuscitator with rebreathe bag for adult, paediatric and infant is available"
            CheckbobItems={["Yes", "No"]}
            name="AMB15"
          />
          <h3>Whether it’s available or not</h3>
          <AMB1 columns={columns1} initialRows={initialRows1} name='AMB16'/>

          <h3>Whether these Emergency Medications are available or not?</h3>
          <AMB2 columns={columns2} initialRows={initialRows2} name='AMB17'/>

          <h3>Whether these Immobilizing equipment’s are available?</h3>
          {/* <Checkbox
          h3="Select the appropriate equipment available:"
          CheckbobItems={[
            "Firm padding or commercial head immobilization device",
            "Lower extremity traction devices (supporting slings, padding, traction strap)",
            "Upper and Lower extremity immobilization devices",
            "Joint above and joint below fracture immobilizing device",
            "Resistant straps or cravats",
            "Orthopaedic (scoop) stretcher/ Long back board",
            "Rigid cervical collars (small, medium, large)"
          ]}
           /> */}

          <h3>What are the different types of registers/records/checklists maintained on the ambulance?</h3>
          {/* checkbox */}
          {/* Ambulance Cleaning Checklist
          Portable Oxygen Cylinder Pressure Monitoring Sheet
          In Ambulance Treatment Summary Form
          Emergency Injection Register
          Emergency Medicine Checklist
          AED Checklist
          Patient Register
          Other (Specify) _______________________ */}

          <Buttons prev="" next="" />
        </div>
      </div>
    </section>
    </div>
  )
}

export default Facility