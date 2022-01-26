
import React from "react";


export function OnePostHome ({data}) {

console.log (data)

    return (
        <div style={{margin:"auto", position:"relative"}}>
          <div>
              <span>
                  <p>{data.title}</p>
                  </span>
          </div>
          <div>
              <span>
                  {data.textBody}
              </span>
          </div>
        </div>

    )
}