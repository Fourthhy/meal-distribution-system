"use client"

import * as React from "react"
import {
  Book,
  BookOpen,
  Bot,
  Calendar,
  Command,
  ChartNetwork,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
  Table,
} from "lucide-react"

import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Insights",
      url: "#",
      icon: ChartNetwork,
      isActive: true,
      items: [
        { title: "Daily", url: "#", },
        { title: "Weekly", url: "#", },
        { title: "Monthly", url: "#", },
        { title: "Semester", url: "#", },
      ],
    },
    {
      title: "Schedule",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Masterlist",
      url: "#",
      icon: Table,
        items: [
          { title: "ACT 1", url: "#reminders-a" },
          { title: "ACT 2", url: "#reminders-a" },
          { title: "BSIS 1", url: "#reminders-a" },
          { title: "BSIS 2", url: "#reminders-a" },
          { title: "BSIS 3", url: "#reminders-a" },
          { title: "BSIS 4", url: "#reminders-a" },
      ],
    },
    {
      title: "Daily Operation",
      url: "#",
      icon: Book,
    },
  ],
}

export function AppSidebar({ ...props }) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Meal Distribution System</span>
                  <span className="truncate text-xs">La Verdad</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <div className="mb-[110px]">
        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
      </div>
      
    </Sidebar>
  )
}
