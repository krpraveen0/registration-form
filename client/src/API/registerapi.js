// import axios  from 'axios'

// const apiIns = axios.create({
//     baseURL : "http://localhost:4000"
// })

// const CourseApi = {
//     getAll : () =>{
//         return apiIns.request({
//             method : "GET",
//             url: "/course"
//         })
//     },
//     getSingle: (id) =>{
// return apiIns.request({
//     method: "GET",
//     url: "/course/${id}"
// })
//     },

//     create:(course) =>{
//         return apiIns.request({
//             method: "POST",
//             url :"/course",
//             data:course
//         })
//     },
//     update:(course , id) =>{
//         return apiIns.request({
//             method: "PUT",
//             url :"/course/${id}",
//             data:course
//         })
//     },
//     delete:(id) =>{
//         return apiIns.request({
//             method: "DELETE",
//             url :"/course/${id}"
          
//         })
//     }
   

// }

// export default CourseApi