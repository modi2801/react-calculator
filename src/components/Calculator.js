import React, {useState, useEffect} from 'react';
import './Calculator.css';

function Calculator() {
        const [result, setResult] = useState(0);
        var [expression, setExpression] = useState(0);
        const [currentOperator, setCurrentOperator] = useState(null);
      
        useEffect(() => {
          
          console.log(expression);
        }, [expression])
      
        const onInput = (num) => {
          if(result!==0){
            setResult("" + result + num);
          }
          else{
            setResult(num);
          }
        }
      
        function onOperator(op){
          if(currentOperator!=null){
            onEquals();
            console.log("Res", expression);
          }
      
          setExpression(result);
          setCurrentOperator(op);
          setResult(0);
        }
      
        const onEquals = () => {
          var old_result;
          switch (currentOperator) {
            case '+':
              old_result = result;
              console.log(expression, result);
              setResult(expression+old_result);
              setExpression(expression+old_result);
              break;
          
            case '-':
              old_result = result;
              console.log(expression, result);
              setResult(expression-old_result);
              setExpression(expression-old_result);
              break;
          
            case '*':
              old_result = result;
              console.log(expression, result);
              setResult(expression*old_result);
              setExpression(expression+old_result);
              break;
      
            case '/':
              old_result = result;
              console.log(expression, result);
              setResult(expression/old_result);
              setExpression(expression/old_result);
              break;
            default:
              break;
          }
        }
      
        const onClear = () =>
        {
          setResult(0);
          setExpression(0);
          setCurrentOperator(null);
        }
      
        return (
          <div className="App">
            <div className="Calculator">
              <div className="Calculator__title">Calculator</div>
              <div className="Calculator__result">{result}</div>
              <div className="Calculator__buttons">
                <div className="Calculator__numbers">
                  <div className="Calculator__number_row">
                    <div className="Calculator__number" onClick={()=>onInput(1)}>1</div>
                    <div className="Calculator__number" onClick={()=>onInput(2)}>2</div>
                    <div className="Calculator__number" onClick={()=>onInput(3)}>3</div>  
                  </div>
                  <div className="Calculator__number_row">
                    <div className="Calculator__number" onClick={()=>onInput(4)}>4</div>
                    <div className="Calculator__number" onClick={()=>onInput(5)}>5</div>
                    <div className="Calculator__number" onClick={()=>onInput(6)}>6</div>
                  </div>
                  <div className="Calculator__number_row">
                    <div className="Calculator__number" onClick={()=>onInput(7)}>7</div>
                    <div className="Calculator__number" onClick={()=>onInput(8)}>8</div>
                    <div className="Calculator__number" onClick={()=>onInput(9)}>9</div>
                  </div>
                  <div className="Calculator__number_row">
                    <div className="Calculator__operator" onClick={()=>onClear()}>CLR</div>
                    <div className="Calculator__number" onClick={()=>onInput(0)}>0</div>
                    <div className="Calculator__operator" onClick={()=>onEquals()}>=</div>
                  </div>
                </div>
                <div className="Calculator__operators">
                  
                  <div className="Calculator__operator" onClick={()=>onOperator('+')}>+</div>
                  <div className="Calculator__operator" onClick={()=>onOperator('-')}>-</div>
                  <div className="Calculator__operator" onClick={()=>onOperator('*')}>*</div>
                  <div className="Calculator__operator" onClick={()=>onOperator('/')}>/</div>
                </div>
              </div>
            </div>
          </div>
        );
      }

export default Calculator;
