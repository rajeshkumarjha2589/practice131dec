import './App.css'
import { LearnComponent } from './components/lernComponents'
import { LearnProps } from './components/LearnProbes'
import { LearnEvent } from './LearnEvent'
import { LearnLiftingStateUp } from './LearnLiftingStateUp'
import { LearnState } from './components/LearnState'
import { CounterApp } from './components/NumCounterApp'
import { LearnUseEffect1 } from './components/LearnUseEffect'
import { LearnMemo } from './components/LearnUseMemosition'
import { LearnCallback } from './components/LearnCallBack'
import { GenerateRandomNumber } from './components/GenerateRandomNumber'
import { LearnCustomHook1 } from './components/LearnCustonHook'
import { LearnConditionalRender } from './components/LearnConditionalRender'
import { LearnMap } from './components/LearnMap'
import { LearnInlineCSS } from './components/LearnInlineCSS'
import { LearnExternalCSS1 } from './components/LearnExternalCSS1'
import { LearnExternalCSS2 } from './components/LearnExternalCSS2'
import { LearnCSSModule1 } from './components/LearnCSSModule1'
import { LearnCSSModule2 } from './components/LearnCSSModule2'
import { LearnUseOfImage } from './components/LearnUseOfImage'
function App() {
  const getData =(data) => {
    console.log(data)
  }
  return(
  <>
    {/* <LearnComponent /> */}
    {/* <LearnProps name= "rajesh" roll = {123} /> */}
    {/* <LearnEvent /> */}
    {/* <LearnLiftingStateUp myClick = {getData}/> */}
    {/* <LearnState/> */}
    {/* <CounterApp/> */}
    {/* <LearnUseEffect1/>  */}
    {/* <LearnMemo/> */}                                  {/* // some error in this code */}
    {/* <LearnCallback/> */}
    {/* <GenerateRandomNumber/> */}
    {/* <LearnCustomHook1/> */}
    {/* <LearnConditionalRender/> */}
    {/* <LearnMap/> */}
    {/* <LearnInlineCSS/> */}
    {/* <LearnExternalCSS1/> */}
    {/* <LearnExternalCSS2/> */}
    {/* <LearnCSSModule1/> */}
    {/* <LearnCSSModule2/> */}
    <LearnUseOfImage/>
  </>
  )
}

export default App
