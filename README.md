# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

redux steps :

1-create the structure
features :
userSlice
userThunk
and store

2-intstalation
npm i @reduxjs/toolkit react-redux

3- configure the store
configure the store and add the slices as reducers
and export them

4- provider
wrap the app in the provider and provide the store prop

5-Create a Slice
-create a variable and export it , assign it to a create slice method from redux
-provide a name for the slice , initialstate
-provide the reducers
-all of them act as object , so the cases are functions that recieves state and action parameters
-reducers act as the same as useReducer hook

6-extraReducers
-extra reducers are there to handle async code
-it's a function that recieves a parameter we call it builder
-we bend a 'case' to each builder as builder.addCase...
-cases : pending , fullfilled , rejected

7-create the Thunk
-in a separate file we create a variable and export it , and assign it to createThunk function from redux
-we provide a name for the thunk
-we provide the async function

8-usage in components
-use the useDispatch hook to dispatch the functions
-use the useSelector hook to have the data

best practices :
make a variable that holds the state changes , to make the components unfamiliar with the structure of the code
