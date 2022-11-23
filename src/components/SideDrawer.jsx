import { Drawer, List, ListItem, ListItemButton } from "@mui/material";
import { scroller } from "react-scroll";
export const SideDrawer = ({ open, onClose }) => {
  const links = [
    { where: "featured", value: "To top" },
    { where: "venueinfo", value: "Venue NFO" },
    { where: "highlights", value: "Highlights" },
    { where: "pricing", value: "Pricing" },
    { where: "location", value: "Location" },
  ];

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150,
    });
    onClose(false);
  };
  const renderItem = (item) => {
    return (
      <ListItem key={item.where}>
        <ListItemButton onClick={() => scrollToElement(item.where)}>
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
