import HeaderBar from "./components/reusableComponents/HeaderBar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./components/reusableComponents/AppSidebar";


// function Layout() {
//   return (
//     <div className="flex h-screen">
//       <HeaderBar />
//       <SidebarProvider>
//         <AppSidebar />
//       </SidebarProvider>
//       <main className="flex-1 p-4">

//       </main>
//     </div>
//   );
// }

// export default App;

export default function App({ children }) {
  return (
    <>
      <HeaderBar />
      <SidebarProvider>
      <div style={{ display: "flex" }}>
        <AppSidebar />
        <main style={{ flex: 1 }}>
          <SidebarTrigger />
          {children}
        </main>
      </div>
    </SidebarProvider>
    </>

  );
}
