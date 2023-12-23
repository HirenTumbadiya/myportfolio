// import CrazyCursor from "@/components/CrazyCursor";
// import Navbar from "@/components/Navbar";

// export default function Home() {
//   return (
//       <div style={{ backgroundColor: "#1C1F25" }} className="pt-5">
//         <CrazyCursor />
//         <Navbar />
//         <main className="flex min-h-screen flex-col items-center justify-between p-24">
          
//         </main>
//       </div>
//   );
// }

import { redirect } from "next/navigation"

export default function Home() {
  redirect('/home')
}
