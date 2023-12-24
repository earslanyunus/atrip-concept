const Bus =  ({isActive}:{isActive:string}) => {
    return (
<svg className="z-10" xmlns="http://www.w3.org/2000/svg" height="24" fill={isActive ==="tab-bus"?"#554138":"#94A3B8"} viewBox="0 -960 960 960" width="24"><path d="M320-200v20q0 25-17.5 42.5T260-120q-25 0-42.5-17.5T200-180v-62q-18-20-29-44.5T160-340v-380q0-83 77-121.5T480-880q172 0 246 37t74 123v380q0 29-11 53.5T760-242v62q0 25-17.5 42.5T700-120q-25 0-42.5-17.5T640-180v-20H320Zm162-560h224-448 224Zm158 280H240h480-80Zm-400-80h480v-120H240v120Zm100 240q25 0 42.5-17.5T400-380q0-25-17.5-42.5T340-440q-25 0-42.5 17.5T280-380q0 25 17.5 42.5T340-320Zm280 0q25 0 42.5-17.5T680-380q0-25-17.5-42.5T620-440q-25 0-42.5 17.5T560-380q0 25 17.5 42.5T620-320ZM258-760h448q-15-17-64.5-28.5T482-800q-107 0-156.5 12.5T258-760Zm62 480h320q33 0 56.5-23.5T720-360v-120H240v120q0 33 23.5 56.5T320-280Z"/></svg>)
}
export default Bus