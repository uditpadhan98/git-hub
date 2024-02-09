import React from 'react'

const Graph = ({username}) => {
    const graphUrl = `https://ghchart.rshah.org/${username}`; 
  return (
    <div className="box border p-4 rounded-lg shadow-md bg-dark-500  flex flex-col mt-4 text-[#F8FAFC]">
      <h3 className="text-2xl font-semibold mb-4 text-left underline">
        Contribution Graph
      </h3>
      <img
        src={graphUrl}
        alt="Contribution Graph"
        style={{ width: "100%", alignItems: "center", wordSpacing: "1rem" }}
      />
    </div>
  )
}

export default Graph