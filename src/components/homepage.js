
import '../CSS/homepage.css';
import React, {useState} from 'react'; 

const HomePage = () => {

    //For Open Circuit
    const [voltage, setVoltage] = useState('');
    const [current, setCurrent]  = useState('');
    const [power, setPower] = useState('');
    const [output_Ro, setOutput_Ro] = useState(''); 
    const [output_Xo, setOutput_Xo] = useState(''); 

     //for short circuit

    const [voltage1, setVoltage1] = useState('');
    const [current1, setCurrent1]  = useState('');
    const [power1, setPower1] = useState('');
    const [output_Rc, setOutput_Rc] = useState(''); 
    const [output_Xc, setOutput_Xc] = useState('');

    

    const handleInput = () => {
       //setOutput_0(Number(voltage) + Number(current));
    //    let cos = Math.cos((Number(power))/(Number(current)*Number(voltage)));
       let cos = Number(power)/(Number(current)*Number(voltage));
    //    let sin = Math.sqrt(1 - Math.pow(cos, 2));
       let sin = Math.sqrt(1- Math.pow(Number(cos), 2));
       
       setOutput_Ro(Number(voltage)/Number(current*cos));
       setOutput_Xo(Number(voltage) / Number(current*sin));

        //for short circuit
        var Zc = Number(voltage1)/Number(current1);
        var Pc = Math.pow(Zc, 2) - Math.pow(Number(output_Rc), 2);
        setOutput_Rc(Number(power1)/Math.pow(Number(current1), 2));
        // setOutput_Xc(Math.sqrt((Math.pow(Number(voltage1), 2)/(Math.pow(Number(current1), 2)) - (Math.pow(Number(setOutput_Rc), 2)))));
        // setOutput_Xc(Math.sqrt(Math.pow(Number(Zc), 2)) - (Math.pow(Number(output_Rc), 2)));
        setOutput_Xc(Math.sqrt(Pc))

    }
    return(
        <>
        <div className='homepage'>
            <div className='top_section_homepage'>
                <div className='text_top_section_homepage'>
                    <h1>Find value of Equivalent Circuit</h1>
                </div>
            </div>
            <div className='middle_section_homepage'>
                <div className='leftbox_middle_section_homepage'>
                    <div className='heading_leftbox'>
                        <h1>open circuit test</h1>
                    </div>
                    <div className="inputarea_leftbox">
                        <div className="input1_inputarea_leftbox">
                            <div className="text1_inputarea_leftbox">Voltage (Vo)</div>
                            <div className="placeholder_inputarea_leftbox">
                                <input type="number" name="voltage" id="voltage" placeholder="Vo"
                                onChange = {
                                    e => setVoltage(e.target.value)
                                    }
                                    ></input>
                            </div>
                        </div>
                        <div className="input1_inputarea_leftbox">
                            <div className="text1_inputarea_leftbox"
                           
                            >Current (Io)</div>
                            <div className="placeholder_inputarea_leftbox">
                                <input type="number" name="Current" id="Current" placeholder="Io"
                                 onChange = {
                                    e => setCurrent(e.target.value)
                                }
                                ></input>
                            </div>
                        </div>
                        <div className="input1_inputarea_leftbox">
                            <div className="text1_inputarea_leftbox"
                            
                            >Power (Wo)</div>
                            <div className="placeholder_inputarea_leftbox">
                                <input type="number" name="Power" id="Power" placeholder="Wo"
                                onChange = {
                                    e => setPower(e.target.value)
                                }
                                ></input>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='leftbox_middle_section_homepage'>
                    <div className='heading_leftbox'>
                        <h1>short circuit test</h1>
                    </div>
                    <div className="inputarea_leftbox">
                        <div className="input1_inputarea_leftbox">
                            <div className="text1_inputarea_leftbox">Voltage (Vc)</div>
                            <div className="placeholder_inputarea_leftbox">
                                <input type="number" name="voltage" id="voltage" placeholder="Vc"
                                onChange = {
                                    e => setVoltage1(e.target.value)
                                    }></input>
                            </div>
                        </div>
                        <div className="input1_inputarea_leftbox">
                            <div className="text1_inputarea_leftbox">Current (Ic)</div>
                            <div className="placeholder_inputarea_leftbox">
                                <input type="number" name="Current" id="Current" placeholder="Ic"
                                onChange = {
                                    e => setCurrent1(e.target.value)
                                }></input>
                            </div>
                        </div>
                        <div className="input1_inputarea_leftbox">
                            <div className="text1_inputarea_leftbox">Power (Wc)</div>
                            <div className="placeholder_inputarea_leftbox">
                                <input type="number" name="Power" id="Power" placeholder="Wc"
                                onChange = {
                                    e => setPower1(e.target.value)
                                }></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bottom_section_homepage'>
                <div className='input_submit_button' onClick= { () => {
                    handleInput()
                }}>
                    Submit
                </div>
            </div>
            <div className='lastbottom_section_homepage'>
            <div className="last_section_homepage">
                    <div className='heading_leftbox'>
                        <h1>equivalent circuit</h1>
                    </div>
                    <div className="inputarea_bottombox">
                        <div className="input1_inputarea_bottombox">
                            <div className="text1_inputarea_leftbox">Ro</div>
                            <div className="placeholder_inputarea_leftbox">

                            <div className='display_result'> {output_Ro}Ω </div>
                                {/* <input type="number" name="voltage" id="voltage" placeholder="enter voltage"></input> */}
                            </div>
                        </div>
                        <div className="input1_inputarea_bottombox">
                            <div className="text1_inputarea_leftbox">Xo</div>
                            <div className="placeholder_inputarea_leftbox">
                            <div className='display_result'> {output_Xo}Ω </div>
                                {/* <input type="number" name="Current" id="Current" placeholder="enter Current"></input> */}
                            </div>
                        </div>
                        <div className="input1_inputarea_bottombox">
                            <div className="text1_inputarea_leftbox">Rc</div>
                            <div className="placeholder_inputarea_leftbox">
                            <div className='display_result'>{output_Rc}Ω</div>
                                {/* <input type="number" name="Power" id="Power" placeholder="enter Power"></input> */}
                            </div>
                        </div>
                        <div className="input1_inputarea_bottombox">
                            <div className="text1_inputarea_leftbox">Xc</div>
                            <div className="placeholder_inputarea_leftbox">
                            <div className='display_result'>{output_Xc}Ω</div>
                                {/* <input type="number" name="Power" id="Power" placeholder="enter Power"></input> */}
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
            <div className="infosection">
                <h1>Ro = Equivalent resistance</h1>
                <h1>Xo = Equivalent reactance</h1>
                <h1>Rc = Equivalent resistance referred to the secondary side </h1>
                <h1>Xc = Equivalent reactance referred to the secondary side</h1>
            </div>
        </div>
        </>
    );
}

export default HomePage;