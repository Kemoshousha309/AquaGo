import { Box, Tab, Tabs, Typography } from "@mui/material";
import { PureComponent } from "react";
import "./feed.scss";
import ShrimpFeed from "./shrimpFeed/shrimpFeed";
import TilapiaFeed from "./tilapiaFeed/tilapiaFeed";


class Feed extends PureComponent {

  state = {
    currentTab: 0
  }

  handleTabChange = (event, value) => {
    this.setState({currentTab: value})
  }

  render() {
    const { state: {currentTab}, handleTabChange } = this;
    return (
      <div className="feed container">
        <h2 className="heading-1">
          Calculate the required feed intake for your stock
        </h2>
        <p className="paragraph">
          Choose the fish type then input your fish number and the average of
          your fish weight in grams and other required parameters then click
          Calculate to view the result
        </p>
        <Box sx={{ borderBottom: 3, borderColor: "divider" }}>
          <Tabs
            value={currentTab}
            onChange={handleTabChange}
            aria-label="fish tabs"
            scrollButtons="auto"
            variant="scrollable"
          >
            <Tab label="Tilapia & common species" wrapped {...a11yProps(0)} />
            <Tab label="shrimp" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={currentTab} index={0}>
          <TilapiaFeed />
        </TabPanel>
        <TabPanel value={currentTab} index={1}>
          <ShrimpFeed />
        </TabPanel>
      </div>
    );
  }
}



function a11yProps(index) {
  return {
    id: `fish-tab-${index}`,
    'aria-controls': `fish-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`fish-tabpanel-${index}`}
      aria-labelledby={`fish-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


export default Feed;
