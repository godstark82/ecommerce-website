// "use client";

// import { useShopifyAuth } from "@/providers/ShopifyAuthProvider";
// import { useState } from "react";

// export const UserDropdown: React.FC = () => {
//     const { customer, logout, login } = useShopifyAuth();
//     const [showDropdown, setShowDropdown] = useState(false);
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     if (!customer) {
//         // Login form
//         return (
//             <form
//                 onSubmit={async (e) => {
//                     e.preventDefault();
//                     const success = await login(email, password);
//                     if (!success) alert("Login failed");
//                 }}
//                 className="flex flex-col gap-2 p-4 border rounded w-64 bg-white"
//             >
//                 <input
//                     className="p-2 border rounded"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <input
//                     className="p-2 border rounded"
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button type="submit" className="bg-black text-white p-2 rounded">
//                     Login
//                 </button>
//             </form>
//         );
//     }

//     // Logged-in dropdown
//     return (
//         <div className="relative">
//             <button
//                 className="px-4 py-2 border rounded"
//                 onClick={() => setShowDropdown(!showDropdown)}
//             >
//                 {customer.firstName}
//             </button>
//             {showDropdown && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow">
//                     <p className="p-2 border-b">Hello, {customer.firstName}</p>
//                     <a href="/account" className="block p-2 hover:bg-gray-100">
//                         My Account
//                     </a>
//                     <a href="/orders" className="block p-2 hover:bg-gray-100">
//                         Orders
//                     </a>
//                     <button
//                         onClick={logout}
//                         className="w-full text-left p-2 hover:bg-gray-100"
//                     >
//                         Logout
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// };
