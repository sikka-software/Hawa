import {
  BarChart3,
  KeyRound,
  LogOut,
  Settings2,
  User2,
  Users2
} from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button, DropdownMenu, Switch } from "@sikka/hawa";
import { Alert } from "@sikka/hawa/alert";
import { MenuItemType } from "@sikka/hawa/elements";

export default function AlertDemo() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  let profileItems: MenuItemType[] = [
    {
      label: "Account",
      subitems: [
        {
          icon: <User2 className="h-4 w-4" />,
          label: "My Info",
          action: () => router.push("/account"),
          slug: `/account`
        },
        {
          icon: <Users2 className="h-4 w-4" />,
          label: "Users",
          value: "/users",
          slug: `/users`,
          action: async () => {
            await router.push("/");
          }
        },

        {
          icon: <KeyRound className="h-4 w-4" />,
          label: "Roles",
          value: "/roles",
          slug: `/roles`,
          action: async () => {
            await router.push("/");
          }
        }
      ]
    },

    {
      icon: <Settings2 className="h-4 w-4" />,
      label: "Settings",
      slug: `/settings`
      // action: () => router.push(namePages.settings)
    },
    {
      icon: <BarChart3 className="h-4 w-4" />,
      label: "Analytics",
      slug: `/analytics`,
      action: () => router.push("/analytics")
    },
    {
      label: "Logout",
      icon: <LogOut className="h-4 w-4" />,
      action: async () => {
        router.push("/login");
      }
    },
    { itemType: "separator" },
    { label: "User Interface", itemType: "label" },
    {
      label: "Dark Mode",
      presist: true,
      end: (
        <Switch
          size="sm"
          checked={theme === "dark"}
          onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
      )
    }
    // {
    //   presist: true,
    //   end: (
    //     <Radio
    //       forceHideHelperText
    //       name="language"
    //       onChange={(e: any) => switchLang(e)}
    //       design="tabs"
    //       defaultValue={currentLang}
    //       width="full"
    //       options={[
    //         { value: "ar", label: "عربي" },
    //         { value: "en", label: "English" }
    //       ]}
    //     />
    //   )
    // }
  ];

  return (
    <div>
      <DropdownMenu
        LinkComponent={Link}
        items={profileItems}
        trigger={<Button>Open Menu</Button>}
      />
    </div>
  );
}
