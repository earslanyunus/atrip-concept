import { create } from 'zustand'

type PlaneStore = {
    from: string,
    to: string,
    date:string | object,
    passenger:{
        type:string,
        adult:number,
        student:number,

    }

}
type PlaneActions = {
    setFrom: (from: PlaneStore['from']) => void,
    setTo: (to: PlaneStore['from']) => void,
    setDate: (date: PlaneStore['date']) => void,
    setPassenger: (passenger: PlaneStore['passenger']) => void,

}
  

export const usePlaneStore = create<PlaneStore & PlaneActions>((set) => ({
    from:"",
    to:"",
    setFrom: (from) => set({ from }),
    setTo: (to) => set({ to }),
    date:"",
    setDate: (date) => set({ date }),
    passenger:{
        type:"adult",
        adult:1,
        student:0,
    },
    setPassenger: (passenger) => set({ passenger }),
   
}));