/* eslint-disable react/prop-types */

const header = {
  backgroundColor: "#411906",
  color: "#fff"
}

function Header({text}) {
  return (
    <>
      <header style={header} className="head">
        <h3 title="head" data-testid="t3048">{text}</h3>
      </header>
    </>
  )
}

export default Header