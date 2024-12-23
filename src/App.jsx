import HeaderBar from "./components/reusableComponents/HeaderBar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./components/reusableComponents/AppSidebar";
// export default function App({ children }) {
//   return (

//       <div className="grid grid-cols-1 grid-rows-[auto,1fr]" >
//         <div className="bg-blue-500 p-4 col-span-2" >
//           <HeaderBar/>
//         </div >

//         {/* Sidebar Section */}
//         <SidebarProvider>
//         < aside className="bg-gray-200 p-4" >
//           <AppSidebar />
//         </aside >

//         {/* Main Section */}
//         < main className="bg-white p-4" >
//           {/* Main Content */}
//           <SidebarTrigger />
//           {children}
//         </main >
//         </SidebarProvider>
//       </div >
//   );
// }


export default function App({ children }) {
  return (
    <div className="flex flex-col flex-wrap">

      <SidebarProvider>
        <div className="grow-0">
          <AppSidebar />
        </div>


        <div className="grow">
          <HeaderBar />
          <SidebarTrigger />
          {children}
        </div>

      </SidebarProvider >

    </div>




  );
}
