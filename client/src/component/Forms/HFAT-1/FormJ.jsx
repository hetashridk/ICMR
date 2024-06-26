import React, { useState,useEffect } from 'react'
import SidePanel from './SidePanelHFAT1';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';
import LastButton from '../child-comp/LastButton';
import Heading from '../../Heading/Heading.jsx';
import AOS from 'aos'
import 'aos/dist/aos.css'


function FormJ() {
  useEffect(()=> {
    AOS.init({duration:2000})
}, []);
  turnOffbutton();
  var formj = setLocalStorage("formj",
    { H1J1: "", H1J2: "" })

  const [formJ, setFormJ] = useState(JSON.parse(formj));
  return (
    <div>
      <Heading h2="Health Facility Assessment Tool 1: District Hospital/Tertiary Care (Public or Private)"></Heading>
      <section>
        <SidePanel id={"10"} />
        <div className="siteInfo" data-aos="fade-left">

          <div className="formhdr">
            <div>
              <h3>
                1J. Referral Linkages
              </h3>
            </div>
          </div>

          <div className="formcontent cont_extra">

            <Radio byDefault={formJ.H1J1} onClick={handleChange(setFormJ)} name="H1J1" h3="1J.1 : Does this facility have policies and procedures which guide the referral of patients from other hospitals?" CheckbobItems={["Yes", "No"]} />


            <Radio byDefault={formJ.H1J2} onClick={handleChange(setFormJ)} name="H1J2" h3="1J.2 : Does this facility have any policies and procedures which guide the transfer- out/referral of stable and unstable patients after stabilization to another facility with documentation?" CheckbobItems={["Yes", "No"]} />

            <LastButton formName="formj" formData={formJ} prev="/processpoliciessops" MainForm={"HFAT-1"} />

          </div>
        </div>
      </section>
    </div>
  )
}

export default FormJ