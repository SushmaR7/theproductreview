import React from "react";
import classNames from 'classnames';
function HeaderComp({lblClass,inptClass,id,value,chngInpt,name_onC,lblValue,errMsg})
{
   return <div className="mb-4 w-[700px]">
                  <label className={lblClass}>{lblValue} </label>
                  <input className={inptClass} type="text" id={id} value={value} 
                  onChange={(e)=>chngInpt(name_onC,e)}/>
                  {/** Error message for email */}
                  {
                    errMsg && <p className="text-red-700">{errMsg}</p>
                  }
              </div>
}
export default HeaderComp