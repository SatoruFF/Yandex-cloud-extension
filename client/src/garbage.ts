// const [visitors, setVisitors]: any = useState([])
// const [modalView, setModalView]: any = useState(false)

// const [fetchUsersArray, isLoading, userError]: any = useFetching( async () => {
//     const response = await FakeUsers.getAllUsers()
//     setVisitors([...response])
// })

// useEffect(() => {

//     setTimeout(() => {
//         fetchUsersArray()
//     }, 4000)

// }, [])


// import { createSlice } from "@reduxjs/toolkit";

// export interface userState {
//   firstName: string;
//   lastName: string;
//   role: string;
//   budget: number;
//   isAuth: boolean;
// }

// const initialState: userState = {
//   firstName: "",
//   lastName: "",
//   role: "USER",
//   budget: 0,
//   isAuth: false,
// };

// const userSlice: any = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     isAuthDef(state, payload) {
//       state.isAuth = true;
//     },
//   },
// });


// export const { isAuthDef } = userSlice.actions;
// export default userSlice.reducer;