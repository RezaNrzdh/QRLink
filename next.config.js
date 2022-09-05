// module.exports = {
//     useFileSystemPublicRoutes: false,
//   }

// module.exports = {
//     async rewrites() {
//         return[
//             {
//                 source: "/admin",
//                 destination: "/admin/dashboard"
//             },
//             {
//                 source: "/admin/customer",
//                 destination: "/admin/customer/customer"
//             },
//             {
//                 source: "/admin/article",
//                 destination: "/admin/article/article"
//             },
//             {
//                 source: "/admin/article/create",
//                 destination: "/admin/article/create/create"
//             },
//             {
//                 source: "/profile",
//                 destination: "/profile/profile"
//             },
//             {
//                 source: "/code",
//                 destination: "/auth/code/code"
//             },
//             {
//                 source: "/login",
//                 destination: "/auth/login/login"
//             },
//             {
//                 source: "/register",
//                 destination: "/auth/register/register"
//             },
//             {
//                 source: "/about",
//                 destination: "/support/about/about"
//             },
//             {
//                 source: "/contact",
//                 destination: "/support/contact/contact"
//             },
//             {
//                 source: "/faq",
//                 destination: "/support/faq/faq"
//             },
//             {
//                 source: "/terms",
//                 destination: "/support/terms/terms"
//             },
//             {
//                 source: "/pricing",
//                 destination: "/support/pricing/pricing"
//             },
//             {
//                 source: "/:username",
//                 destination: "/profile/user/[username]"
//             },
//         ];
//     }
// }