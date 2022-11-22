import { Drawer, List, ListItem, ListItemButton } from "@mui/material";

export const SideDrawer = ({ open, onClose }) => {
  const links = [
    { where: "featured", value: "To top" },
    { where: "venueinfo", value: "Venue NFO" },
    { where: "highlights", value: "Highlights" },
    { where: "pricing", value: "Pricing" },
    { where: "location", value: "Location" },
  ];

  const renderItem = (item) => {
    return (
      <ListItem key={item.where}>
        <ListItemButton onClick={() => alert(item.where)}>
          {item.value}
        </ListItemButton>
      </ListItem>
    );
  };
  return (
    <Drawer anchor="right" open={open} onClose={() => onClose(false)}>
      <List component="nav">{links.map((item) => renderItem(item))}</List>
    </Drawer>
  );
};
