// import {createApi} from "@reduxjs/toolkit/query/react";
// import {customFetchBaseQuery} from "@/services/api/customFetchBaseQuery";
//
// export const employeeApi =createApi({
//     reducerPath: 'logApi',
//     baseQuery: customFetchBaseQuery,
//     tagTypes:['Login'],
//     endpoints:(builder)=>({
//         addEmployee: builder.mutation({
//             query:(body)=>({
//                 url:`organization/member`,
//                 method: 'POST',
//                 body
//             }),
//             invalidatesTags:['Login']
//         }),
//         // getAllEmployees: builder.query({
//         //     query:(data)=>({
//         //         url:`/organization/member/view/${data.siteName}?page=${data.page}&size=${data.size}`
//         //     }),
//         //     providesTags:['Employees']
//         })
//     })
// })
// export const {useAddEmployeeMutation, useGetAllEmployeesQuery} = employeeApi
