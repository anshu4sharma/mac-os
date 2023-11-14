import "react-cmdk/dist/cmdk.css";
import CommandPalette, { filterItems, getItemIndex } from "react-cmdk";
import { useState } from "react";

const CommandPallete = ({
  showCommandPallete,
  setshowCommandPallete,
}: {
  showCommandPallete: boolean;
  setshowCommandPallete: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [page, setPage] = useState<"root" | "projects">("root");
  const [search, setSearch] = useState("");

  const filteredItems = filterItems(
    [
      {
        heading: "Home",
        id: "home",
        items: [
          {
            id: "home",
            children: "Home",
            icon: "HomeIcon",
            href: "#",
          },
          {
            id: "settings",
            children: "Settings",
            icon: "CogIcon",
            href: "#",
          },
          {
            id: "projects",
            children: "Projects",
            icon: "RectangleStackIcon",
            closeOnSelect: false,
            onClick: () => {
              setPage("projects");
            },
          },
        ],
      },
      {
        heading: "Other",
        id: "advanced",
        items: [
          {
            id: "developer-settings",
            children: "Developer settings",
            icon: "CodeBracketIcon",
            href: "#",
          },
          {
            id: "privacy-policy",
            children: "Privacy policy",
            icon: "LifebuoyIcon",
            href: "#",
          },
          {
            id: "log-out",
            children: "Log out",
            icon: "ArrowRightOnRectangleIcon",
            onClick: () => {
              alert("Logging out...");
            },
          },
        ],
      },
    ],
    search
  );

  return (
    <CommandPalette
      onChangeSearch={setSearch}
      onChangeOpen={setshowCommandPallete}
      search={search}
      isOpen={showCommandPallete}
      page={page}
    >
      <CommandPalette.Page id="root">
        {filteredItems.length ? (
          filteredItems.map((list) => (
            <CommandPalette.List key={list.id} heading={list.heading}>
              {list.items.map(({ id, ...rest }) => (
                <CommandPalette.ListItem
                  key={id}
                  index={getItemIndex(filteredItems, id)}
                  {...rest}
                />
              ))}
            </CommandPalette.List>
          ))
        ) : (
          <CommandPalette.FreeSearchAction />
        )}
      </CommandPalette.Page>

      <CommandPalette.Page id="projects">
        {/* Projects page */}
      </CommandPalette.Page>
    </CommandPalette>
  );
};

export default CommandPallete;
