"use client";

import { useState } from "react";
import {
  LayoutDashboard as DashboardIcon,
  ShoppingCart as ShoppingCartIcon,
  Box as InventoryIcon,
  Users as PeopleIcon,
  Settings as SettingsIcon,
} from "lucide-react";
import Image from "next/image";

interface SidebarProps {
  onSelect?: (tabId: string) => void;
}

const tabs = [
  {
    id: "dashboard",
    label: "Tableau de bord",
    icon: <DashboardIcon size={20} />,
  },
  { id: "commandes", label: "Commandes", icon: <ShoppingCartIcon size={20} /> },
  { id: "produits", label: "Produits", icon: <InventoryIcon size={20} /> },
  { id: "clients", label: "Clients", icon: <PeopleIcon size={20} /> },
  { id: "parametres", label: "Paramètres", icon: <SettingsIcon size={20} /> },
];

export default function SidebarDi({ onSelect }: SidebarProps) {
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleClick = (tabId: string) => {
    setActiveTab(tabId);
    if (onSelect) onSelect(tabId);
  };

  return (
    <aside className="w-64 min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 p-4 border-r border-gray-800">
      <div className="flex items-center gap-3 p-3">
        <Image
          src="/images/logo.png"
          alt="Logo bipSOS Pro"
          width={200}
          height={100}
          className="object-contain p-1.5"
          priority
        />
      </div>

      <div className="text-center border-t border-gray-200 mb-7"></div>

      <ul className="space-y-1">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <button
              onClick={() => handleClick(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-[#0F9C8E]/20 to-emerald-400/10 border border-[#0F9C8E]/30 text-white shadow-lg shadow-[#0F9C8E]/10"
                  : "text-gray-400 hover:text-white hover:bg-gray-800/50"
              }`}
            >
              <div
                className={`transition-colors ${
                  activeTab === tab.id ? "text-[#0F9C8E]" : "text-gray-400"
                }`}
              >
                {tab.icon}
              </div>
              <span
                className={`font-medium ${
                  activeTab === tab.id ? "text-white" : ""
                }`}
              >
                {tab.label}
              </span>
              {activeTab === tab.id && (
                <div className="ml-auto w-2 h-2 rounded-full bg-[#0F9C8E] animate-pulse"></div>
              )}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
