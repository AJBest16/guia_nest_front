import React from 'react'

type ButtonProps = { 
  style: React.CSSProperties;
}

function Button({style}: ButtonProps) {
  return <button style = {
    style 
  }>test</button>
  }

 function Page() {
  return (
    <div>
      <Button style={{ 
        backgroundColor: "gold", 
        color: "white",
        border: "none",
        borderRadius: "15px",
        padding: "10px 20px",
        }} />
      </div>
  );
}
export default Page