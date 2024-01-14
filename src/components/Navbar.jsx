
function Navbar() {
  return (
    <div className="container flex justify-between items-center py-2">
        <div className="logo">Memory</div>
        <div className="menus">
            <button className="rounded-lg px-3 py-2 bg-lightGray text-darkGray font-semibold">New Game</button>
        </div>
    </div>
  )
}

export default Navbar