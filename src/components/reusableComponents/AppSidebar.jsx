import React, { useState } from "react";
import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  ChevronDown,
  ChevronRight,  // Chevron for side
  User2,
  Ellipsis,
  LogOut,
  Lock,
  ChartNetwork,
  Book,
  Table
} from "lucide-react";

import {
  Sidebar,
  SidebarFooter,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Menu items with sub-items
const items = [
  {
    title: "Insights",
    url: "#",
    icon: ChartNetwork,
    subItems: [],
  },
  {
    title: "Students List",
    url: "#",
    icon: Inbox,
    subItems: [
      { title: "ACT 1", url: "#reminders-a" },
      { title: "ACT 2", url: "#reminders-a" },
      { title: "BSIS 1", url: "#reminders-a" },
      { title: "BSIS 2", url: "#reminders-a" },
      { title: "BSIS 3", url: "#reminders-a" },
      { title: "BSIS 4", url: "#reminders-a" },
    ],
  },
  {
    title: "Free Lunch Eligibility Chart",
    url: "#",
    icon: Table,
    subItems: [],
  },
  {
    title: "Reminders",
    url: "#",
    icon: Book,
    subItems: [],
  },
];

export function AppSidebar() {
  // State to track which menu is open
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle open/closed state of the sub-menu
  const toggleSubMenu = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle between open/close
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, index) => (
                <div key={item.title}>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={() => toggleSubMenu(index)}>
                      <item.icon />
                      <span>{item.title}</span>
                      {item.subItems.length > 0 && (
                        openIndex === index ? (

                          <ChevronDown className="ml-auto transform transition-transform duration-200" />
                        ) : (
                          <ChevronRight className="ml-auto transform transition-transform duration-200" />
                        )
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  {item.subItems.length > 0 && openIndex === index && (
                    <SidebarMenuSub>
                      {item.subItems.map((subItem, subIndex) => (
                        <SidebarMenuSubItem key={subIndex}>
                          <a href={subItem.url}>{subItem.title}</a>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  )}
                </div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Admin
                  <Ellipsis className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <Lock className="inline" /> <span> Change Password</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="inline" /> <span> Log-out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
