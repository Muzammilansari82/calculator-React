import { useState } from "react"
import "./calculator.css"



export const Calculator = () => {

    const [ppl, setppl] = useState("");

    const input = (ans) => {

        setppl(ppl.concat(ans.target.value));
    }
    const clear = () => {
        setppl("");
    }
    const del = () => {
        setppl(ppl.slice(0, -1));
    };

    const equal = () => {
        setppl(eval(ppl).toString())
    }
    return (
        <div>
            <p className="h1">CALCULATOR USING REACT</p>
            <hr style={{ borderColor: '#232b30', marginTop: -15 }} />

            <div className="a1">
                <input type="text" name="p" className="a2" value={ppl} />


                <hr style={{ borderColor: '#232b30' }} />
                <div>
                    <input type="button" value="AC" onClick={clear} className="button" />
                    <input type="button" value="DE" onClick={del} className="button" />
                    <input type="button" value="." onClick={input} className="button" />
                    <input type="button" value="/" onClick={input} className="button" />
                </div>
                <div>
                    <input type="button" value="7" onClick={input} className="button" />
                    <input type="button" value="8" onClick={input} className="button" />
                    <input type="button" value="9" onClick={input} className="button" />
                    <input type="button" value="*" onClick={input} className="button" />
                </div>
                <div>
                    <input type="button" value="4" onClick={input} className="button" />
                    <input type="button" value="5" onClick={input} className="button" />
                    <input type="button" value="6" onClick={input} className="button" />
                    <input type="button" value="-" onClick={input} className="button" />
                </div>
                <div>
                    <input type="button" value="1" onClick={input} className="button" />
                    <input type="button" value="2" onClick={input} className="button" />
                    <input type="button" value="3" onClick={input} className="button" />
                    <input type="button" value="+" onClick={input} className="button" />
                </div>
                <div>
                    <input type="button" value="00" onClick={input} className="button" />
                    <input type="button" value="0" onClick={input} className="button" />
                    <input type="button" value="=" onClick={equal} className="button a89"  />
                </div>
            </div>
        </div>
    )
}
